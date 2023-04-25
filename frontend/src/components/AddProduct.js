import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { Typography, Box, Button } from "@mui/material";

 //IT21013300
 //labelStyles function
 const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
 const AddProduct = () => {

     const User = useSelector((state) => state.user);
     const [approved, setApproved] = useState(User.isApproved);
     console.log("approved", approved);
     //Use of styles from mui system
     //Use of navigate from react router dom
    useEffect(() => {
      console.log("userid", User._id);
    });
    const navigate = useNavigate();
    //implementing use state
    var userid = User._id.toString();
    const [inputs, setInputs] = useState({
      productname:"",
      description:"",
      price:"",
      category:"",
      Stocks:"",
      image:"",
      user: userid,
    });

    //Handle change function
    const handleChange = (e) => {
      setInputs((prevState) => ({
       ...prevState,
       [e.target.name]: e.target.value,
      }));
    };
  
    //send request function
    const sendRequest = async () => {
    console.log("User", User._id);
    const res = await axios.post("http://localhost:9001/product/addProducts", {
      productname: inputs.productname,
      description: inputs.description,
      price: inputs.price,
      category: inputs.category,
      Stocks: inputs.Stocks,
      image: inputs.image,
      user: userid,
      }).catch((err) => console.log(err));
    const data = await res.data;
    };
  
    //handle submit function
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest()
      .then((data) => console.log("d", data))
      .then(() => navigate("/seller"));
    };  
    
    // Change background color of page
    document.body.style.backgroundColor = "#e7e6e3";
    var ApprovalSatt = "Sorry Your Account is not Approved Yet🌿🤨"

    if(approved.toString()==="true"){  //Products could be added by the seller if the seller is approved only
    return (
      <div className="product">
      <form onSubmit={handleSubmit}>
        <Box
           border={3}
           borderColor="linear-gradient(90deg, rgba(255,252,13,1) 60%, rgba(110,224,200,1) 100%, rgba(169,175,14,1) 100%)"
           borderRadius={10}
           boxShadow="10px 10px 20px #ccc"
           padding={3}
           margin={"auto"}
           marginTop={3}
           display="flex"
           flexDirection={"column"}
           width={"80%"}
        >
        <Typography
           fontWeight={"bold"}
           padding={3}
           color="black"
           variant="h2"
           textAlign={"center"}
        >
        Enter Product Details 🌿
        </Typography>
        <br />
        <TextField
           id="outlined-search"
           label="Productname"
           type="search"
           name="productname"
           onChange={handleChange}
           value={inputs.productname}
           margin="auto"
           variant="outlined"
        />
        <br />
        <TextField
           id="outlined-search"
           label="Description"
           type="search"
           name="description"
           onChange={handleChange}
           value={inputs.description}
           margin="auto"
           variant="outlined"
        />
        <br />
        <TextField
           id="outlined-search"
           label="Price"
           type="search"
           name="price"
           onChange={handleChange}
           value={inputs.price}
           margin="auto"
           variant="outlined"
        />
        <br />
        <TextField
           id="outlined-search"
           label="Category"
           type="search"
           name="category"
           onChange={handleChange}
           value={inputs.category}
           margin="auto"
           variant="outlined"
        />
        <br />
        <TextField
           id="filled-number"
           name="Stocks"
           onChange={handleChange}
           value={inputs.Stocks}
           label="Stocks"
           type="number"
           InputLabelProps={{
             shrink: true,
           }}
           variant="filled"
        />
        <br />
        <TextField
           id="outlined-search"
           label="ProductImageURL"
           type="search"
           name="image"
           onChange={handleChange}
           value={inputs.image}
           margin="auto"
           variant="outlined"
        />
        <Button
           sx={{ mt: 2, borderRadius: 4 }}
           variant="contained"
           color="warning"
           type="submit"
        >
           {" "}
           🌿Add Your Product🌿
        </Button>
       </Box>
      </form>
    </div>
  );
 }else{
   return ApprovalSatt;
  }
 }

 export default AddProduct
