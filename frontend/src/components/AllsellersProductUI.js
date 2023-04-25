
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Typography,CardActionArea} from "@mui/material";
import { Button, Modal } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
//IT21013300
  //ProductUI function which shows products  of all sellers
    const SellerProductUI = ({
        productname,
        description,
        price,
        category,
        Stocks,
        id,
        image,
         user,
    }) => {
  
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Productname, setProductname] = useState("");
    const [Description, setDescription] = useState("");
    const [Category, setCategory] = useState("");
    const [stocks, setstocks] = useState("");
    const [Price, setPrice] = useState("");
    const [Image, setImage] = useState("");
    const user_id = useSelector((state) => state.user);

  //Handle Edit function
    const handleEdit = () => {
      axios.put(`http://localhost:9001/product/updateProduct/${id}`, {
        productname: Productname,
        description: Description,
        price: Price,
        category: Category,
        Stocks: stocks,
        image: Image,
        user: user,
      })
        .then((response) => {
          if (response) {
          window.location.reload(false);
        }
      });
    };
    const isSeller = useSelector((state) => state.user.isSeller);
    const thisuser = useSelector((state) => state.user._id);
  //Sending the delete request to the backend
    const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:9001/product/deleteProduct/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
      return data;
    };

  //After deleting navigate back to All  page
    const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/"));
      window.location.reload(false);
    };

    return (
   
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: ' safe center' }}>
           <br/>   <br/>
           
        <Card sx={{ maxWidth: 345, marginBottom: '3rem' }}>
          <CardActionArea>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'red' }} aria-label="">
                  {productname}
                </Avatar>
              }
            />
            <CardMedia component="img" height="140" image={image} alt="" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Product Name: {productname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Price:</b> {price} <br />
                <b>Description:</b> {description} <br />
                <b>Category:</b> {category} <br />
                <b>Stocks:</b> {Stocks} <br />
                <b>Seller:</b> {user_id.ShopName} <br />

              </Typography>
            </CardContent>
          </CardActionArea>
            </Card>
      </div>
    );
  };
export default SellerProductUI;
