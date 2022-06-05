import React from "react";
import styled from "styled-components";
import logo from "../img/logo.jpeg";
function Logo() {
  return (
    <Container>
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
      />
    </Container>
  );
}

export default Logo;
const Container = styled.div`
  width: 50px;
  height: 50px;
  padding: 10px;
  postion: sticky;
`;
