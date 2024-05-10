import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import './index.css';
import { Home } from './pages/Home'
import { ProductPage } from './pages/ProductPage'; 
import { Products } from './pages/Products';
import { Categories } from './pages/Categories';
import { ProductsByCategory } from './pages/ProductsByCategory';
import { Cart } from './pages/Cart';
import { Announcement } from './components/Announcement';
import { NavBarSection } from './containers/NavBarSection';
import { Footer } from './containers/Footer';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <>
    <Announcement />
    <NavBarSection />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={< Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductPage />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/categories/:categoryId' element={<ProductsByCategory/>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<PageNotFound/>} />
          </Routes>
        </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
