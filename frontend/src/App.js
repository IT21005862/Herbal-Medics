import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import './App.css';
import {  useSelector } from 'react-redux';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import SellerSignup from './pages/SellerSignUp';
function App() {
  const user = useSelector((state) => state.user);
console.log(user);



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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
