import styled from "styled-components";
import SizeBall from "./SizeBall";
import ColorList from "./ColorList";

const LeftGrid = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  min-width: 390px;

  @media (min-width: 410px) and (max-width: 1024px) {
    width: 100%;
    padding-left: 10px;
    margin-right: 25px;
  }

  @media (max-width: 424px) {
    padding-left: 20px;
  }

  @media (max-width: 325px) {
    padding-left: 70px;
  }
`;

const SizeList = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 1500px) {
    justify-content: flex-start;
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
        <ul className="category-list">
          <li>Damesmode</li>
          <li>Nieuwe collectie</li>
          <li>Sale</li>
        </ul>
      </div>
      <button onClick={handleButtonClick} type="button" className="collapsible">
        Maat
      </button>
      <div className="content">
        <SizeList>
          <SizeBall size="S" />
          <SizeBall size="M" />
          <SizeBall size="L" />
          <SizeBall size="XL" />
          <SizeBall size="XXL" />
          <SizeBall size="3XL" />
        </SizeList>
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
