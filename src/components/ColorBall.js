import styled from "styled-components";

const ColorBall = styled.div`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  margin: 5px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid black;
`;

export default ColorBall;
