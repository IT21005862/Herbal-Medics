import React from "react";
import { Container, Nav, Tab, Col, Row } from "react-bootstrap";
import AdminApprovalseller from "../components/AdminApprovalseller";
import Adminretofallseller from "../components/Adminretofallsellers";
//IT21013300
function AdminDash(){
    return(
        <Container>
        <Tab.Container defaultActiveKey="products">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="products">Check All Sellers</Nav.Link>
                         
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="productperseller">To Be Approved Sellers</Nav.Link>
                        </Nav.Item>
                       
                 
                  
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="products">
                        <Adminretofallseller/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="productperseller">
                          <AdminApprovalseller/>
                   </Tab.Pane>
                       
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </Container>
        
                  
     
    );
}

export default AdminDash;
