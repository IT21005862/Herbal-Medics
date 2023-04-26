import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Cart from './components/cart';

function App() {
  return (
    <div>
      <Router>
        <Cart/>
      </Router>
    </div>
  );
}

export default App;