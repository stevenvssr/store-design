import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
  height: auto;
  width: 100vw;

  @media (min-width: 1450px) {
    height: 50vh;
  }

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export default Container;
