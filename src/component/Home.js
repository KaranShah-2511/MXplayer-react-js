import React from "react";
import styled from "styled-components";
import Movies from "./Movies";
import Imageslider from "./Imageslider";

function Home() {
  return (
    <Container>
      <Imageslider />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  min-height: calc(100%-60px);
`;
