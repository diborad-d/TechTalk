import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../img/logo.jpeg";

export default function Menu() {
  return (
    <Container className="row" style={{ margin: "auto", marginTop: "5px" }}>
      <div className="col-md-12">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="logo"
              className="logo"
              alt="logo"
              style={{
                width: "auto",
                height: "100px",
                padding: "10px",
                postion: "sticky",
              }}
            />{" "}
            Tech-Talk
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="dashboard">Dashboard</Nav.Link>
            <Nav.Link href="Users">Users</Nav.Link>
            <Nav.Link href="Account">Account</Nav.Link>
          </Nav>
        </Navbar>
      </div>
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
