
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ViewOrder from './components/ViewOrder';
import UpdateO from './components/UpdateO';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import'../src/css/dashboard.css';
import '../src/css/formStyles.css';

function App() {
  return (
  <BrowserRouter>
    <div>
    <Routes>
   <Route path="/" element={<><Navbar/><Dashboard/></>}/>
   <Route path="/view" element={<><Navbar/><ViewOrder/></>}/>
   <Route path="/update/:id" element={<><Navbar/><UpdateO/></>}/>
   </Routes>
    </div>
    </BrowserRouter> 
  );
}

export default App;
