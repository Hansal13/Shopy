import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 25px;
  width: 40%;
  background-color: #ffffff;
  @media only screen and (max-width: 991px) {
    width: 70%;
  }
  @media only screen and (max-width: 767px) {
    width: 90%;
  }
`;
const Title = styled.div`
  font-size: 35px;
  text-transform: uppercase;
  font-weight: 400;
  @media only screen and (max-width: 767px) {
    font-size: 24px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  width: 100%;
  flex: 1 1 100%;
  margin: 12px 0;
  padding: 10px 20px;
  font-family: "Urbanist", sans-serif;
  font-size: 20px;
  @media only screen and (max-width: 767px) {
    font-size: 16px;
    padding: 7px 15px;
  }
`;
const Button = styled.button`
  border: none;
  width: 50%;
  margin: 0 auto;
  padding: 15px;
  font-size: 20px;
  color: white;
  background-color: teal;
  @media only screen and (max-width: 767px) {
    width: 100%;
    font-size: 18px;
    padding: 10px;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder="Enter Your Name" />
          <Input placeholder="Enter Username" />
          <Input placeholder="Enter Email" />
          <Input placeholder="Enter Password" />
          <Input placeholder="Enter Confirm Password" />
          <Button>Create Account</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
