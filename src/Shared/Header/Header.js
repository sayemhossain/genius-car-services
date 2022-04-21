import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../Img/logo/logo.png";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(user);
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
            <Nav.Link href="home#services">services</Nav.Link>
            <Nav.Link href="home#experts">Experts</Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            {user ? (
              <Nav.Link onClick={() => logout}>LogOut</Nav.Link>
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
