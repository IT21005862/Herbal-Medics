import './App.css';
<<<<<<< Updated upstream
import { BrowserRouter as Router, Route} from "react-router-dom"
import Cart from './components/cart';
=======
import {  useSelector } from 'react-redux';
import Signin from './pages/Signin';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import SellerSignup from './pages/SellerSignUp';
import Productperseller from'./components/Productsperseller';
import AddProduct from './components/AddProduct';
import SellerDasboard from './pages/SellerDashboard';
import AdminDasboard from './pages/AdminDashboard';
import Adminretofallsellers from './components/Adminretofallsellers';
import AllProductsseller from "./components/AllProducts";
import Cart from "./components/cart";
>>>>>>> Stashed changes

function App() {
  return (
<<<<<<< Updated upstream
    <div>
      <Router>
        <Cart/>
      </Router>
=======
    <div className="App">
           <BrowserRouter>
           <ScrollToTop/>
           <Header/>
           <Routes>
           <Route index element={<Home/>}/>
           {!user && (
            <>
        <Route path="/sellerSignup" element={<SellerSignup />} />      
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={<Signin/>} />
     
      </>
           )}
           
 {user && (
  <>
<Route path="/cart" element={<Cart/>} />
 </>
 )}

{user && user.isSeller && (
  <>
       <Route path="/seller" element={<Productperseller/>} />
     <Route path="/addprod" element={<AddProduct/>} />
      <Route path="/sellallprod" element={<AllProductsseller/>} />
     <Route path="/sellerdash" element={<SellerDasboard/>} />
  </>
)}

{user && user.isAdmin && (
                        <>
    <Route path="/admindash" element={<AdminDasboard/>}/>
    <Route path="/adminretsellall" element={<Adminretofallsellers/>}/>
                        </>
)}
      </Routes>
      </BrowserRouter>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;