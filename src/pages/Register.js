import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleInput}
            name="name"
          />
          <Input
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleInput}
            name="username"
          />
          <Input
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleInput}
            name="email"
          />
          <Input
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleInput}
            name="password"
          />
          <Input
            placeholder="Enter Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInput}
            name="confirmPassword"
          />
          <Button>Create Account</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
