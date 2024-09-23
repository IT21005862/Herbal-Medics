import React, { useEffect, useState } from 'react'
import { Badge, Button, ButtonGroup, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

//IT21013300

function Oneproductview  (props)  {
    const { id } = useParams(props);
    const [product, setProduct] = useState({});
    const user = useSelector((state) => state.user);

    const fetchDetails = async () => {
        const res = await axios
          .get(`http://localhost:9001/product/getProductid/${id}`)
          .catch((err) => console.log(err));
        const data = await res.data;
        console.log("tour2",data);
        return data;
        
      };

    
      useEffect(() => {
        fetchDetails().then((data) => setProduct(data.product));
      }, []);
     console.log("T", product);
    
      

  return (
    <Container className="pt-4" style={{ position: "relative" }}>
    <Row>
        <Col lg={6}>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: "550px" }}
          src={product.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>HERBAL MEDICS🌿🌿</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className="d-block w-100"
           style={{ maxHeight: "550px" }}
          src={product.image}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>HERBAL MEDICS🌿🌿</h3>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
        </Col>
        <Col lg={6}>
            <h3>{product.productname}</h3>
            <p>Description:{product.description}</p>
            <p>Price Rs. {product.price}</p>
            <p>Category : {product.category}</p>
            <p>No. of Stocks Available: {product.Stocks}</p>
            <h3>Contact US on</h3>
            <p>Email  📧 :{user.email}</p>
            <p>Posted by 🤵 :{user.name}</p>
            <br />
            <br />
            <LinkContainer to={'/cart/'}>
                <Button variant="dark">Add to Cart</Button>
            </LinkContainer>
        </Col>
    </Row>
</Container>

  )
}

export default Oneproductview