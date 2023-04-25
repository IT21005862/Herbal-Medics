import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import './App.css';
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

function App() {
  const user = useSelector((state) => state.user);
//   const userid = useSelector((state) => state.user._id);
// console.log(userid._id);



  return (
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
    </div>
  );
}

export default App;
