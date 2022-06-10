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
    <Container bg="dark" style={{ color: "white" }}>
      <Navbar />
      <Row>
        <Col
          style={{
            height: "100vh",
            background: "	#1d1d1d",
            margin: " 0.01emem 0.01emem 0 0.01emem",
            boxShadow: "0 0 10px 0 grey",
          }}
        >
          Users
        </Col>
        <Col
          xs={6}
          style={{
            height: "100vh",
            background: "#111118",
            margin: " 0.01emem 0.01emem 0 0.01emem",
            boxShadow: "0 0 10px 0 grey",
          }}
        >
          <Row fluid="md">
            <Form
              className="d-flex justify-content-end flex-grow-1 pe-3"
              style={{ margin: "10px 10px 0 0 " }}
            >
              <FormControl
                type="search"
                placeholder="Search Chat"
                className="me-2"
                aria-label="Search"
              />
              <Button style={{ marginright: "10px" }} variant="outline-primary">
                Search
              </Button>
            </Form>{" "}
          </Row>
        </Col>
        <Col
          style={{
            height: "100vh",
            background: "	#1d1d1d",
            margin: " 0.01emem 0.01emem 0 0.01emem",
            boxShadow: "0 0 10px 0 grey",
          }}
        >
          User Profile
        </Col>
      </Row>
      {/* </Container> */}
    </Container>
  );
}
// add breakpoint
// sm - md screen: add dropdow/burget munu and for sections: add offcanvas
