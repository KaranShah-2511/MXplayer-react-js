import "./App.css";
import Header from "./component/Header";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  margin: 0 50px;
`;
