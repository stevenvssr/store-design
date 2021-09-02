import styled from "styled-components";
import Card from "./ProductCard";
import products from "../Data/data";

const RightGridStyle = styled.section`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  margin-top: 20px;
  width: 100%;
  height: auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const RightGrid = ({ direction }) => {
  const way = direction === "default" ? products : [...products].reverse();

  return (
    <RightGridStyle>
      {way.map((product) => {
        return (
          <Card
            key={product.id}
            color={product.color}
            text={product.text}
            oldPrice={product.oldPrice}
            discountPrice={product.discountPrice}
            sale={product.sale}
            saleAmount={product.saleAmount}
            normalPrice={product.normalPrice}
            img={product.img}
          />
        );
      })}
    </RightGridStyle>
  );
};

export default RightGrid;
