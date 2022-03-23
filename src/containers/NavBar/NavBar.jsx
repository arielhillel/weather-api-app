import "./NavBar.css";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Weather-API</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/home" className="link-navBar">
              Home
            </Link>
            <Link to="/history" className="link-navBar">
              History
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
