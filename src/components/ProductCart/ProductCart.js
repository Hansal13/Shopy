import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 52px;
`;

const Top = styled.div`
  display: flex;
  margin: 20px 0;
  align-items: center;
  justify-content: space-between;
`;

const TopButton = styled.button`
  padding: 15px;
  border: 1px solid lightgray;
  background: white;
  font-size: 24px;
  cursor: pointer;
  @media only screen and (max-width: 1080px) {
    font-size: 20px;
    padding: 10px 15px;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1080px) {
    flex-direction: column-reverse;
  }
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const ProductName = styled.p`
  font-size: 24px;
`;

const ProductColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: 20px 0;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.p`
  text-align: left;
  font-size: 24px;
`;

const PriceDetails = styled.p`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 400;
`;

const Image = styled.img`
  width: 350px;
`;

const Details = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  flex-direction: column;
`;

const Hr = styled.hr`
  border: none;
  background-color: gray;
  height: 1px;
  opacity: 0.2;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  margin-left: 20px;
  height: fit-content;
`;

const SummaryTitle = styled.h2`
  font-size: 32px;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;
const SummaryItemText = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
const SummaryItemPrice = styled.p`
  font-size: 22px;
  font-weight: 400;
`;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-size: 24px;
`;

const ProductCart = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopButton>Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://images.unsplash.com/photo-1666059369046-e505b8892f5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
                <Details>
                  <ProductName>
                    <strong>Product:</strong> Shoe
                  </ProductName>
                  <ProductColor color="black" />
                  <ProductSize>
                    <strong>Size:</strong> 9
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <AmountContainer>
                  <ProductAmount>Item: 2</ProductAmount>
                </AmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://images.unsplash.com/photo-1666059369046-e505b8892f5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
                <Details>
                  <ProductName>
                    <strong>Product:</strong> Shirt
                  </ProductName>
                  <ProductColor color="blue" />
                  <ProductSize>
                    <strong>Size:</strong> M
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <AmountContainer>
                  <ProductAmount>Item: 2</ProductAmount>
                </AmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 20</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 14.10</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>Checkout</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default ProductCart;
