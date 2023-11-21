/* eslint-disable react/jsx-no-undef */
import { Link, Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Frontpage.css";
import React from "react";
function Frontpage() {
  return (
    <>
    <div className="container custom-container">
      <div className="row custom-row">
        <h1>
          <img
            src={require("../../image/qa.png")}
            className="rounded"
            alt="Logo"
          ></img>
          Real Estate Agent
        </h1>
      </div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="property">
            <img
              alt=""
              src={require("../../image/qa.png")}
              width="30"
              height="30"
              className="d-lg-grid"
            />{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="property">Property</Nav.Link>
            <Nav.Link href="seller">Sellers</Nav.Link>
            <Nav.Link href="buyer">Buyers</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div><div className="container">
        <Outlet />
      </div>
      </>
  );
}

export default Frontpage;
