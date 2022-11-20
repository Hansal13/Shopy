import React from "react";
import { popularProducts } from "../../data";
import styled from "styled-components";
import Product from "./Product";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  flex: 1 1 calc(25% - 10px);
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Wrapper>
          <Link to="/product" style={{ width: "100%" }}>
            <Product item={item} key={item.id} />
          </Link>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Products;
