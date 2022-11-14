import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  padding: 50px 0;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
  @media only screen and (max-width: 991px) {
    flex: 1.5;
  }
`;
const Logo = styled.h6`
  font-size: 24px;
  font-weight: 500;
`;
const Desc = styled.p`
  margin: 20px 0;
  text-align: left;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color: #${(props) => props.color};
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 767px) {
    padding: 20px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Center = styled.div`
  flex: 1;
  @media only screen and (max-width: 767px) {
    padding: 20px;
  }
`;
const Title = styled.h6`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 400;
  text-align: left;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  margin-bottom: 10px;
  @media only screen and (max-width: 991px) {
    width: 100%;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SHOPY.</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          ducimus doloremque architecto asperiores necessitatibus similique.
          Porro adipisci perferendis, a excepturi delectus earum eaque maiores.
          Laboriosam sit repellendus perferendis a nulla!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/cart">Cart</Link>
          </ListItem>
          <ListItem>
            <Link to="/productlist">Man Fashion</Link>
          </ListItem>
          <ListItem>
            <Link to="/productlist">Woman Fashion</Link>
          </ListItem>
          <ListItem>
            <Link to="/">My Account</Link>
          </ListItem>
          <ListItem>
            <Link to="/">Order Tracking</Link>
          </ListItem>
          <ListItem>
            <Link to="/">Wishlist</Link>
          </ListItem>
          <ListItem>
            <Link to="/">Terms</Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>Lorem ipsum dolor sit amet.</ContactItem>
        <ContactItem>+9121212121</ContactItem>
        <ContactItem>abc@gmail.com</ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
