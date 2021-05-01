import React from "react";
import styled from "styled-components";
import "./Hearder_function.css";

function Hearder_function({ Icon, title }) {
  return (
    <Container>
      <div className="nav">
        <Icon className="icon" />
        <p className="title">{title}</p>
      </div>
    </Container>
  );
}

export default Hearder_function;

const Container = styled.div``;
