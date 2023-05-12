import { Badge, Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//IT21013300
function ProductPreview({ _id, productname, description, price, category, Stocks, image, user, date }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDetails = async () => {
          try {
            setLoading(true);
            const { data } = await axios.get("http://localhost:9001/user/" + user);
            setUsers(data.ShopName);
            console.log("use", data.ShopName);
            setLoading(false);
          } catch (error) {
            console.log(error);
            setLoading(false);
          }
        };
        fetchDetails();
      }, []);

      const handleclick 

      = () => {
       navigate('/viewproduct/' + _id)
      }


    return (
        <LinkContainer to={`/viewproduct/${_id}`} style={{ cursor: "pointer", width: "20rem", margin: "20px" }}>
            <Card style={{ width: "50rem", margin: "50px" }}>
                <Card.Img variant="top" className="product-preview-img" src={image} style={{ height: "150px", objectFit: "cover" }} />
                <Card.Body>
                    <Card.Title>{productname}</Card.Title>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Card.Text>Category: {category}</Card.Text>
                    <Card.Text>Date: {date}</Card.Text> 
                    <Badge bg="warning" text="dark">
                        {users}
                    </Badge>
                  </Card.Body>
                  <div>
                  <Button 
                    variant="primary"   
                    style={{ width: "100%", marginTop: "10px" }}
                   
                    >
                  View
                </Button>
                </div>
            </Card>
            
        </LinkContainer>
    );
}

export default ProductPreview;
