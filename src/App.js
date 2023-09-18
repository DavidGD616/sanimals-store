import { Home } from './pages/Home'
import './styles/index.scss'
import { TodoProvider } from './context';

function App() {
  return (
    <TodoProvider>
      <Home />
    </TodoProvider>
  );
}

export default App;
