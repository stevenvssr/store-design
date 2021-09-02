import styled from "styled-components";
import ColorBall from "./ColorBall";

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 90%;
  }

  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const ColorList = () => {
  return (
    <List>
      <ListItem>
        <ColorBall color="black" size="20" /> <span>Zwart</span>
      </ListItem>
      <ListItem>
        <ColorBall color="white" size="20" /> <span>Wit</span>
      </ListItem>
      <ListItem>
        <ColorBall color="#FEC260" size="20" /> <span>Geel</span>
      </ListItem>
      <ListItem>
        <ColorBall color="#7D1935" size="20" /> <span>Rood</span>
      </ListItem>
      <ListItem>
        <ColorBall color="green" size="20" /> <span>Groen</span>
      </ListItem>
      <ListItem>
        <ColorBall color="#0F52BA" size="20" /> <span>Blauw</span>
      </ListItem>
    </List>
  );
};

export default ColorList;
