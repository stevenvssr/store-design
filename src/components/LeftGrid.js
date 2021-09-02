import styled from "styled-components";
import SizeBall from "./SizeBall";
import ColorList from "./ColorList";

const LeftGrid = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  float: left;
  align-items: left;
  width: 100%;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const handleButtonClick = (e) => {
  e.target.classList.toggle("active");
  const content = e.target.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
};

const LeftContent = () => {
  return (
    <LeftGrid>
      <button onClick={handleButtonClick} type="button" className="collapsible">
        Categorie
      </button>
      <div className="content">
        <ul
          style={{
            display: "grid",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: "10px",
          }}
        >
          <li>Damesmode</li>
          <li>Nieuwe collectie</li>
          <li>Sale</li>
        </ul>
      </div>
      <button onClick={handleButtonClick} type="button" className="collapsible">
        Maat
      </button>
      <div className="content">
        <div style={{ display: "flex" }}>
          <SizeBall size="S" />
          <SizeBall size="M" />
          <SizeBall size="L" />
          <SizeBall size="XL" />
          <SizeBall size="XXL" />
          <SizeBall size="3XL" />
        </div>
      </div>
      <button onClick={handleButtonClick} type="button" className="collapsible">
        Kleur
      </button>
      <div className="content">
        <ColorList />
      </div>
    </LeftGrid>
  );
};

export default LeftContent;
