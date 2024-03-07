import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import './styles/index.scss';
import './index.css';
import { TodoProvider } from './context';
import { Home } from './pages/Home'
import { ProductPage } from './pages/ProductPage'; 
import { Products } from './pages/Products';
import { Categories } from './pages/Categories';

function App() {
  return (
    <NextUIProvider>
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={< Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductPage />} />
            <Route path='/categories' element={<Categories />} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </NextUIProvider>
  );
}

export default App;
