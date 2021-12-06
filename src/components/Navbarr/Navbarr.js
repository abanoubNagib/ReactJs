import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function Navb() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container id="co">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            
            <Link to="/login" className="text-decoration-none">Login &nbsp;|&nbsp; </Link>
            
            <Link to="/register" className="text-decoration-none">Register &nbsp;|&nbsp;</Link>
            
            <Link to="/Todo" className="text-decoration-none">TodoList &nbsp;|&nbsp;</Link>
           
            <Link to="/movies" className="text-decoration-none">Movies &nbsp;|&nbsp;</Link>
            
            <Link to="/favourite" className="text-decoration-none">Favourite &nbsp;|&nbsp;</Link>

            <Link to="/Contact-us" className="text-decoration-none">Contact-Us &nbsp;</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
