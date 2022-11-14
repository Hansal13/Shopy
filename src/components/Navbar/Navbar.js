import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px",
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  :focus {
    border: none;
    outline: none;
  }
`;

const Center = styled.div`
  flex: 1;
  @media only screen and (max-width: 767px) {
    flex: 0 0 auto;
  }
`;

const Logo = styled.h6`
  font-size: 22px;
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            En
            <SearchContainer>
              <Input />
              <SearchIcon style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Language>
        </Left>
        <Center>
          <Logo>SHOPY.</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/register">Register</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">Log In</Link>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
