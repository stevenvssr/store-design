import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
  height: auto;
  width: 100vw;

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export default Container;
