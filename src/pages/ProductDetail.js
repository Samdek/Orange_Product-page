import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function ProductDetail() {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { id } = useParams()

    const fetchProduct = async () => {
        try {
          setLoading(true);
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);

          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }

          const result = await res.json();
          setProduct(result);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      
    useEffect(() => {
        fetchProduct()

    }, [id])


    if (loading) {
        return <h1>Loading...</h1>
    }
    
    if (error) {
        return <h1>There was an error: {error}</h1>
    }

    function EditProduct(product) {
        const [show, setShow] = useState(false);
        const [formData, setFormData] = useState({
            title: product.product.title,
            price: product.product.price,
            description: product.product.description,
            category: product.product.category,
        })

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
        const handleChange = (event) => {
            const { name, value } = event.target
            setFormData(prevForm => {
                return {
                    ...prevForm,
                    [name]: value
                }
            })
        }
    
        const handleSubmit = () => {
            fetch(`https://fakestoreapi.com/products/${product.product.id}`,{
                method:"PUT",
                body:JSON.stringify(
                    formData
                )
            })
            .then(res=>res.json())
            .then(json => {
                console.log("updated")
                setShow(false)
            })
            setProduct(prevData => {
                return {
                    ...prevData,
                    title: formData.title,
                    price: formData.price,
                    description: formData.description,
                    category: formData.category,
                }
            })
        }

        return (
            <div className='modal-container'>
                <button className="open_button" onClick={handleShow}>
                    Edit Product
                </button>
            { show && <div className='modal_body-container'>
                    <div show={show} onHide={handleClose} className="modal">
                        <div className='modal-heading'>
                            <h2>Edit this Product</h2>
                        </div>
                        
                        <div className='modal-body'>
                            <div className='form_element'>
                                <label htmlFor='title'>Title: </label>
                                <input type='text' name='title' value={formData.title} onChange={handleChange}/>
                            </div>
                            
                            <div className='form_element'>
                                <label htmlFor='description'>Description: </label>
                                <input type='text' name='description' value={formData.description} onChange={handleChange}/>
                            </div>
     
                            <div className='form_element'>
                                <label htmlFor='title'>Price: </label>
                                <input type='text' name='price' value={formData.price} onChange={handleChange}/>
                            </div>
    
                            <div className='form_element'>
                                <label htmlFor='title'>Category: </label>
                                <input type='text' name='category' value={formData.category} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button className='secondary_button' onClick={handleClose}>
                                Close
                            </button>
                            <button className='primary-button' onClick={handleSubmit}>
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>}
            </div>
         );
    }


    return product && (
        <div className="product-detail-container">
            <Link className="backk" to="/product">&larr; <span>Back to all products</span></Link>
            <EditProduct product={product} />
            <div className="product-detail">
                <img src={product.image} alt="{product.imageUrl}" />
                <h2>{product.title}</h2>
                <h4 className="product-price">${product.price}</h4>
                <p>{product.description}</p>
                <div>
                    <i>
                        {product.category}
                    </i>
                    <svg className="star" xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24" fill="#ffd700" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <i>
                        {product.rating.rate}
                    </i>
                    <span>Available</span>
                </div>
                <Link to="https://www.github.com/Samdek">Order now</Link>
            </div>

        </div>
    )
}

export default ProductDetail;