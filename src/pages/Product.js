import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Product() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchProducts = async () => {
        try {
          setLoading(true);
          const res = await fetch(`https://fakestoreapi.com/products`);

          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }

          const result = await res.json();
          setProducts(result);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      
      useEffect(() => {
        fetchProducts()
   }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    
    if (error) {
        return <h1>There was an error: {error}</h1>
    }

    return ( 
       <div className="products">
            <h2>List of Products</h2>
                <div className="product_container">
                    {products.map(product => {
                        return (
                            <div key={product.id} className="product">
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.image} alt={product.imgAlt} />
                                    <div className="product_details">
                                        <p>{product.title}</p>
                                        <h6>${product.price}</h6>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
       </div>
    )
}

export default Product;