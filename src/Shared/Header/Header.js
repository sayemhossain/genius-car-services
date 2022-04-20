import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../Img/logo/logo.png";
const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" sticky="top" expand="md">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          <img className="w-50" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
