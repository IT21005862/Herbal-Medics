import React, { useRef, useState } from "react";
import axios from "axios";
import { Navbar, Button, Nav, NavDropdown, Container } from "react-bootstrap";
import "../CSS/Navigation.css";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout} from "../features/userSlice";
import logo from "../resources/Logo.jpg";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const history = useNavigate();
  const user = useSelector((state) => state.user);


  const dispatch = useDispatch();

  function handleLogout() {
    history("/login");
    dispatch(logout());
  }
  const unreadNotifications = user?.notifications?.reduce((acc, current) => {
    if (current.status == "unread") return acc + 1;
    return acc;
}, 0);



  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <img src={logo} alt="Logo" width={110} height={110} />
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* if no user*/}

            {!user && (
              <LinkContainer to="/Signin">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
               
            {user && !user.isAdmin && (
  <></>
            )}

            {/* if user*/}
            {user && (
              <>
             
              <NavDropdown title={`${user.email}`} id="basic-nav-dropdown">
                {user.isAdmin ? (
                  <>
                    <LinkContainer to="/admin">
                      <NavDropdown.Item>Dashboard</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/feedbacks">
                      <NavDropdown.Item>Feedbacks</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/new-product">
                      <NavDropdown.Item>Create Product</NavDropdown.Item>
                    </LinkContainer>
                  </>
                ) : (
                  <>
                    <LinkContainer to="/user">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orders">
                      <NavDropdown.Item>My orders</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/feedbacks">
                      <NavDropdown.Item>Feedbacks</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={`/contactus`}>
                      <NavDropdown.Item>ContactUs</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/feedbacks/add">
                      <NavDropdown.Item>PostFeedback</NavDropdown.Item>
                    </LinkContainer>


                    
                  </>
                )}

                {/* {!user.isAdmin && (
                 
                )} */}

                <NavDropdown.Divider />
                <Button
                  variant="danger"
                  onClick={handleLogout}
                  className="logout-btn"
                >
                  Logout
                </Button>
              </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
        </Navbar>
  );
}

export default Navigation;
