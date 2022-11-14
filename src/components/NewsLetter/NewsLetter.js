import React from "react";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";

const Container = styled.div`
  padding: 100px 0;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 767px) {
    padding: 50px 0;
  }
`;
const Title = styled.h6`
  font-size: 70px;
  margin: 20px 0;
  @media only screen and (max-width: 767px) {
    font-size: 52px;
  }
`;
const Description = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin: 20px 0;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgray;
  @media only screen and (max-width: 575px) {
    width: 80%;
  }
`;
const Input = styled.input`
  border: none;
  flex: 8;
  height: 100%;
  padding: 0 0 0 20px;
  font-family: "Urbanist", sans-serif;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  flex: 0 0 45px;
  height: 100%;
  border: none;
  background-color: teal;
  color: white;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>News Letter</Title>
      <Description>Get Timely updates form your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
