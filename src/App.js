import Layout from './components/Layout';
import NotFound from './pages/NotFound'
import Home from './pages/Home';
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="product/:id" element={<ProductDetail />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
