import React from "react";
import { Container, Nav, Tab, Col, Row } from "react-bootstrap";
import SellerDasboardcss from "../CSS/Sellerdashboard.css";
import AddProduct from "../components/AddProduct";
import Productperseller from "../components/Productsperseller";
import AllProducts from "../components/AllProducts";

//Seller Dashboard
//IT21013300
function SellerDasboard(){
    return(
        <Container>
        <Tab.Container defaultActiveKey="products">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="products">Add Products</Nav.Link>
                         
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="productperseller">My Products</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="allproducts">All Products</Nav.Link>
                        </Nav.Item>
                 
                  
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="products">
                     <AddProduct/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="productperseller">
                            <Productperseller/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="allproducts">
                            <AllProducts/>
                        </Tab.Pane>
                       
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </Container>
        
                  
     
    );
}

export default SellerDasboard;
