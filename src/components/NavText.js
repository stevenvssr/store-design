import styled from "styled-components";

const NavTextStyle = styled.div`
  width: 50vw;
  display: flex;
  justify-content: space-around;
  text-align: center;

  @media (max-width: 1600px) {
    width: 70vw;
  }

  @media (max-width: 1000px) {
    justify-content: center;
  }

  @media (max-width: 465px) {
    width: 100vw;
  }
`;

const NavText = () => {
  return (
    <NavTextStyle>
      <p>
        Gratis retourneren <strong>in de winkel</strong>
      </p>
      <p className="hide">
        Maten <strong>40</strong> - <strong>54</strong>
      </p>
      <p className="hide">
        Voor 19.30 besteld, <strong>morgen in huis*</strong>
      </p>
    </NavTextStyle>
  );
};

export default NavText;
