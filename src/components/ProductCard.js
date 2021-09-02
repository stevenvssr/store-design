import styled from "styled-components";
import ColorBall from "./ColorBall";

const ProductCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

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
`;

const ClothesColor = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 5px;
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
const Card = (props) => {
  return (
    <ProductCard>
      <Image src={props.img} alt="product" />
      <div style={{ height: "0" }}>
        {props.sale && <SaleLabel>Sale - ${props.saleAmount}%</SaleLabel>}
      </div>
      <TextPrice>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <p>{props.text}</p>
        </div>
        <div>
          <p>
            <strong
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <span>{props.normalPrice}</span>
              <span className="old-price" style={{ marginRight: "4px" }}>
                {props.oldPrice}{" "}
              </span>
              <span className="discount-price">{props.discountPrice}</span>
            </strong>
          </p>
        </div>
      </TextPrice>
      <ClothesColor>
        <ColorBall color={props.color} size="10" />
      </ClothesColor>
    </ProductCard>
  );
};

export default Card;
