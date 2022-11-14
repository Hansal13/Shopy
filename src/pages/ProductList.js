import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Products from "../components/Products/Products";

const Title = styled.h2``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

const Select = styled.select`
  padding: 10px;
  margin: 0 10px;
  &:focus {
    outline: none;
  }
`;

const Option = styled.option`
  padding: 10px;
`;

const ProductList = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Title>Dress</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
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
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default ProductList;
