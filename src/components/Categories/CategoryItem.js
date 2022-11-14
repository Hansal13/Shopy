import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media only screen and (max-width: 575px) {
    aspect-ratio: 16/9;
  }
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h6`
  color: white;
  margin-bottom: 20px;
  font-size: 45px;
  @media only screen and (max-width: 767px) {
    font-size: 24px;
  }
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 500;
  font-size: 24px;
  text-transform: uppercase;
  @media only screen and (max-width: 767px) {
    font-size: 16px;
    padding: 5px 10px;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
