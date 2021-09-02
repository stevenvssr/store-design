import styled from "styled-components";

const Float = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const SelectStyle = styled.select`
  width: 100px;
  border-radius: 30px;
  padding: 5px;
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
