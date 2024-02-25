import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.scss'
import { TodoProvider } from './context';
import { Home } from './pages/Home'
import { ProductPage } from './pages/ProductPage'; 

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/product/:id' element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
