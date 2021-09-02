import Navbar from "./components/Navbar";
import NavText from "./components/NavText";
import Container from "./components/Container";
import LeftContent from "./components/LeftGrid";
import RightGrid from "./components/RightGrid";
import Select from "./components/Select";
import { useState } from "react";

function App() {
  const [direction, setDirection] = useState("default");
  const handleSelectChange = (e) => {
    e.target.value === "reverse"
      ? setDirection("reverse")
      : setDirection("default");
  };
  return (
    <>
      <Navbar>
        <NavText />
      </Navbar>
      <Select onChange={handleSelectChange} />
      <Container>
        <LeftContent />
        <RightGrid direction={direction} />
      </Container>
    </>
  );
}

export default App;
