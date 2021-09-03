import styled from "styled-components";

const Float = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
  align-items: center;
  min-width: 400px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const SelectStyle = styled.select`
  width: 115px;
  border-radius: 30px;
  padding: 5px;
  background: white;
  outline: none;
  margin-right: 5px;

  @media (min-width: 1450px) {
    margin-right: 30px;
  }

  @media (max-width: 1023px) {
    margin-right: 2px;
  }

  @media (max-width: 375px) {
    margin-right: 15px;
  }
`;

const Select = (props) => {
  return (
    <Float>
      <Label htmlFor="sort" className="hide">
        Sorteren op
      </Label>
      <SelectStyle id="sort" onChange={props.onChange}>
        <option value="regular">Regular</option>
        <option value="reverse">Reverse</option>
      </SelectStyle>
    </Float>
  );
};

export default Select;
