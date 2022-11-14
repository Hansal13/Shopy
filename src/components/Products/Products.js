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

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Link to="/product">
          <Product item={item} key={item.id} />
        </Link>
      ))}
    </Container>
  );
};

export default Products;
