import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import './index.css';
import { TodoProvider } from './context';
import { Home } from './pages/Home'
import { ProductPage } from './pages/ProductPage'; 
import { Products } from './pages/Products';

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
