import styled from "styled-components";

const Size = styled.div`
  width: 50px;
  height: 40px;
  border: 1px solid #c9ccd5;
  border-radius: 50%;
  margin: 8px;
  padding-bottom: 5px;
  align-items: center;
  text-align: center;
`;

const SizeBall = (props) => {
  return (
    <Size>
      <p>{props.size}</p>
    </Size>
  );
};

export default SizeBall;
