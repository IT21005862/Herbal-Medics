import React,{useEffect, useState}from 'react'
import axios from "axios";
import { useParams } from "react-router";
import { getSuggestedQuery } from '@testing-library/react';




 const UpdateO=()=>{

  let {id} = useParams()

  const [customerID,setID]=useState('');
  const[cartContents,setCartContent]=useState('');
  const[placedDate,setPlacedDate]=useState('');
  const[status,setStatus]=useState('');
  const[estimatedDeliveryDate,setEstimateDelivery]=useState('');
  const[address,setAddress]=useState('');
  

  const sendDataToUpdate= async()=>{
      try{
        let payload = {
            customerID,
            cartContents,
            placedDate,
            status,
            estimatedDeliveryDate,
            address
         
        }
    
        const res = await axios.put(`http://localhost:8070/OrderAdmin/update/${id}`,payload)
        alert("You have successfully updated.")
        window.location.href="/"
      }catch(e){
          alert(e)
      }
  }


  useEffect(()=>{
    getUserData()
  },[]);

  const getUserData=async()=>{
    const res= (await axios.get(`http://localhost:8070/OrderAdmin/get/${id}`)).data.suplier;
    console.log(res);
    setID(res.customerID);
    setCartContent(res.cartContents);
    setPlacedDate(res.placedDate);
    setStatus(res.status);
    setEstimateDelivery(res.estimatedDeliveryDate);
    setAddress(res.address);
  }
    



         return(
          <div id="booking" className="section">
            <div className="section-center">
    <div className="container">
      <div className="row">
        <div className="booking-form">
          <div className="form-header">
          <p>Update Order</p>
        <form  onSubmit={sendDataToUpdate}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputID"  className="form-label">Customer ID ID</label>
      <input type="text"  value={customerID || ""}  name="supierId"  onChange={(e)=>setID(e.target.value)} className="form-control" id="inputID"  placeholder="Enter Supplier ID here" required />
    </div>
    <div className="form-group col-md-6">
      <label for="inputCompanyname"  className="form-label">Cart Content</label>
      <input type="text" value={cartContents || ""} name= "compaName" onChange={(e)=>cartContents(e.target.value)} className="form-control" id="inputCompanyname" placeholder="Enter Company name here"    required/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress"  className="form-label">Placed Date</label>
    <input type="text" value={placedDate || ""} name="adess"  onChange={(e)=>setPlacedDate(e.target.value)} className="form-control" id="inputAddress" placeholder="Enter address here"   required/>
  </div>


  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputphone"  className="form-label">Status</label>
      <input type="text" value={status || ""}  name="compaPhone" onChange={(e)=>setStatus(e.target.value)} className="form-control" id="inputphone"   placeholder="Enter Company phone number here"  required />
    </div>
    <div className="form-group col-md-6">
      <label for="inputemail" className="form-label">Estimated Delivery Date</label>
      <input type="email" value={estimatedDeliveryDate || ""}  name="emil" onChange={(e)=>setEstimateDelivery(e.target.value)} className="form-control" id="inputemail"  placeholder="Enter Email here"  required />
    </div>
  </div>

  
  
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputContactname"  className="form-label">Address</label>
      <input type="text" value={address|| ""}  name="conttName"  onChange={(e)=>setAddress(e.target.value)}className="form-control" id="inputContactname"  placeholder='Enter name here'  required/>
    </div>
   </div>
   
 <div className="form-btn">
  <button type="submit" className="submit-btn">Update</button></div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
   )

    
  }
 export default UpdateO;  