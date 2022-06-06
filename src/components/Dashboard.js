import React from "react";
import Navbar from "./Navbar";
import {
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
export default function Dashboard() {
  return (
    <Container fluid="md">
      <div>
        <Navbar />
      </div>

      <Row>
        <Form
          className="d-flex justify-content-end flex-grow-1 pe-3"
          style={{ width: "30%", margin: "10px" }}
        >
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button style={{ marginright: "10px" }} variant="outline-primary">
            Search
          </Button>
        </Form>{" "}
      </Row>
      <Row>
        <Col
          style={{
            height: "500px",
            background: "#787878",
            opacity: ".9",
            margin: " 0.01emem 0.01emem 0 0.01emem",
            boxShadow: "0 0 10px 0 grey",
            borderRadius: "25px",
          }}
        >
          Users
        </Col>
        <Col
          style={{
            height: "500px",
            background: "#ad88ea",
            opacity: ".9",
            margin: " 0.01emem 0.01emem 0 0.01emem",
            boxShadow: "0 0 10px 0 grey",
            borderRadius: "25px",
          }}
        >
          Chat Box
        </Col>
        <Col
          style={{
            height: "500px",
            background: "#65cdec",
            opacity: ".9",
            margin: " 0.01emem 0.01emem 0 0.01emem",
            boxShadow: "0 0 10px 0 grey",
            borderRadius: "25px",
          }}
        >
          User Profile
        </Col>
      </Row>
    </Container>
  );
}
// add breakpoint
