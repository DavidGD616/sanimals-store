import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import './index.css';
import { Home } from './pages/Home'
import { ProductPage } from './pages/ProductPage'; 
import { Products } from './pages/Products';
import { Categories } from './pages/Categories';
import { Cart } from './pages/Cart';

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={< Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductPage />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
