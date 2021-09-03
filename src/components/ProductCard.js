import styled from "styled-components";
import ColorBall from "./ColorBall";

const ProductCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    margin-right: 3px;
  }
`;

const TextPrice = styled.div`
  display: flex;
  font-size: 0.6em;
  justify-content: space-between;
  text-align: center;
  align-items: center;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: start;
  }
`;

const ClothesColor = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 5px;
  position: relative;
  bottom: 10px;
  right: 10px;

  @media (max-width: 1023px) {
    bottom: 20px;
  }
`;

const SaleLabel = styled.div`
  background-color: #b61919;
  color: white;
  width: 80px;
  position: relative;
  bottom: 275px;
  font-size: 12px;
  padding: 2px;

  @media (max-width: 768px) {
    bottom: 45px;
  }
`;

const Image = styled.img`
  width: 200px;
  heigth: 300px;
`;

const Bold = styled.strong`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1020px) {
    position: relative;
    bottom: 12px;
  }
`;
const Card = (props) => {
  return (
    <ProductCard>
      <Image src={props.img} alt="product" />
      <div style={{ height: "0" }}>
        {props.sale && <SaleLabel>Sale - {props.saleAmount}%</SaleLabel>}
      </div>
      <TextPrice>
        <p>{props.text}</p>
        <Bold>
          {props.normalPrice && <p>{props.normalPrice}</p>}
          <p className="old-price" style={{ marginRight: "4px" }}>
            {props.oldPrice}{" "}
          </p>
          <p className="discount-price">{props.discountPrice}</p>
        </Bold>
      </TextPrice>
      <ClothesColor>
        <ColorBall color={props.color} size="10" />
      </ClothesColor>
    </ProductCard>
  );
};

export default Card;
