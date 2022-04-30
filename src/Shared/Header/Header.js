import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../Img/logo/logo.png";
const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="primary"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} height={30} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            {user && (
              <>
                <Nav.Link as={Link} to="/addservice">
                  Add Services
                </Nav.Link>
                <Nav.Link as={Link} to="/manage">
                  Manage Serrvices
                </Nav.Link>
                <Nav.Link as={Link} to="/orders">
                  orders
                </Nav.Link>
              </>
            )}
            {user ? (
              <Nav.Link onClick={handleLogout}>LogOut</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
