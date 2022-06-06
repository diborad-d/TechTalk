import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../img/logo.jpeg";

export default function Menu() {
  return (
    <Container
      fluid
      style={{
        margin: "auto",
        background: "orange",
        boxShadow: "0 0 10px 0 grey",
        borderRadius: "5px",
      }}
    >
      <Navbar variant="primary">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="logo"
            style={{
              width: "auto",
              height: "80px",
              padding: "10px",
              postion: "sticky",
            }}
          />{" "}
          Tech-Talk
        </Navbar.Brand>
        <Nav className="justify-content-center flex-grow-1 pe-3">
          <Nav.Link href="dashboard">Dashboard</Nav.Link>
          <Nav.Link href="Users">Users</Nav.Link>
          <Nav.Link href="Account">Account</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}
// add nav collapse
{
  /* <Form className="d-flex">
<FormControl
  type="search"
  placeholder="Search"
  className="me-2"
  aria-label="Search"
/>
<Button style={{marginright: "10px"}} variant="outline-primary">
  Search
</Button>
</Form> */
}
