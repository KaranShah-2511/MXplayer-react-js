import "./App.css";
import Header from "./component/Header";
import styled from "styled-components";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Home />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  margin: 0 50px;
`;
