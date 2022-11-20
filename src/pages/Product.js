import React from "react";
import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    padding: 25px 20px;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
  @media only screen and (max-width: 767px) {
    margin: 0 auto 0 0;
  }
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  @media only screen and (max-width: 767px) {
    width: 250px;
  }
  @media only screen and (max-width: 475px) {
    width: 100%;
  }
`;
const Price = styled.p`
  font-weight: 400;
  font-size: 24px;
  text-align: left;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 0 0 30px;
  @media only screen and (max-width: 767px) {
    padding: 0;
  }
`;
const Title = styled.h6`
  font-weight: 400;
  font-size: 40px;
  text-align: left;
`;
const Desc = styled.p`
  font-weight: 300;
  font-size: 22px;
  text-align: left;
  margin: 20px 0;
`;
const FilterContainer = styled.div`
  display: flex;
`;
const Filter = styled.div`
  margin: 20px 0;
`;
const Select = styled.select`
  padding: 10px;
  margin: 0 20px 0 0;
  &:focus {
    outline: none;
  }
`;
const Option = styled.option`
  padding: 10px;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 700;
`;
const Amount = styled.p`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.div`
  font-size: 20px;
  margin: 0 0 0 20px;
  border: 2px solid teal;
  padding: 10px 15px;
  cursor: pointer;
  background-color: white;
  font-weight: 500;
`;
const Product = () => {
  const [qantity, setQantity] = useState(1);
  const [disabled, setDisable] = useState(false);
  return (
    <>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1666059369046-e505b8892f5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
        </ImgContainer>
        <InfoContainer>
          <Title>Dress</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            eveniet, natus quod possimus, dolorum eligendi omnis molestiae
            suscipit, voluptates quo alias recusandae vitae aperiam quas
            repellat non sed veniam soluta?
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <Select>
                <Option disabled selected>
                  Color
                </Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
              </Select>
              <Select>
                <Option disabled selected>
                  Size
                </Option>
                <Option>XS</Option>
                <Option>s</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <button
                onClick={() => {
                  qantity <= 1 ? setDisable(true) : setDisable(false),
                    setQantity(qantity - 1);
                }}
                disabled={disabled}
              >
                <Remove />
              </button>
              <Amount>{qantity}</Amount>
              <button
                onClick={() => {
                  setQantity(qantity + 1), setDisable(false);
                }}
              >
                <Add />
              </button>
            </AmountContainer>
            <Button>
              <Link to="/cart">Add To Cart</Link>
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Product;
