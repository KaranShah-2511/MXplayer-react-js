import React from "react";
import styled from "styled-components";
import Imageslider from "./Imageslider";

function Home() {
  return (
    <Container>
      <Imageslider />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  min-height: calc(100%-60px);
`;
