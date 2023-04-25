
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { Avatar, Card, CardContent, CardHeader, CardMedia,ButtonGroup, Typography,CardActionArea} from "@mui/material";
import { Button, Modal } from "react-bootstrap";
//It21013300

  //SellerProductUI function for one product
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
    const user_id = useSelector((state) => state.user._id);

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
                <b>Seller:</b> {user} <br />
              </Typography>
            </CardContent>
          </CardActionArea>
         
 <ButtonGroup
  disableElevation
  variant="contained"
  aria-label="Disabled elevation buttons"
>
  <Button
    className="btn btn-danger"
    onClick={() => handleDelete()}
    sx={{ marginRight: "8px" }}
  >
    Delete
  </Button>

  <Button className="btn btn-primary" onClick={handleShow}>
    Edit
  </Button>
</ButtonGroup>

   
        </Card>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
                 /*Modal for update product details*/
            placeholder="Productname"
            onChange={(e) => {
              setProductname(e.target.value);
            }}
            className="form-control"
          />
          <br></br>
          <input
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="form-control"
          />
          <br></br>
       <input
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="form-control"
          />
 		<br></br>
       <input
            placeholder="Category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="form-control"
          />
<br></br>
<br></br>
       <input
            placeholder="stocks"
            onChange={(e) => {
              setstocks(e.target.value);
            }}
            className="form-control"
          />
<br></br>
<br></br>
       <input
            placeholder="Price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            className="form-control"
          />
<br></br>
<br></br>
       <input
            placeholder="Image"
            onChange={(e) => {
              setImage(e.target.value);
            }}
            className="form-control"
          />
<br></br>
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  };
export default SellerProductUI;
