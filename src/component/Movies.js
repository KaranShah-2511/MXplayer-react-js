import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <Title>
        <h2>Trending Shows on MX</h2>
        <h5>More videos</h5>
      </Title>

      <Content>
        <Wrap>
          <img src="./image/1.jpg" />
        </Wrap>

        <Wrap>
          <img src="./image/2.jpg" />
        </Wrap>
        <Wrap>
          <img src="./image/3.jpg" />
        </Wrap>
        <Wrap>
          <img src="./image/4.jpg" />
        </Wrap>
        <Wrap>
          <img src="./image/5.jpg" />
        </Wrap>
        <Wrap>
          <img src="./image/5.jpg" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(6, minmax(0, 1fr));
`;

const Wrap = styled.div`
  height: 400px;
  img {
    border-radius: 10px;
    width: 100%;
    height: auto;
  }

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const Title = styled.div`
  display: flex;
  h2 {
    flex: 1;
  }
  h5 {
    color: #3c8cf0;
  }
`;
