import React, { useState } from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import styled from "styled-components";
import { slideItems } from "../../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items:center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5; 
  z-index: 2
`;

const Wrapper = styled.div`
width: 100%
  height: 100%;
  display: flex;
  transition: all 1s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h2`
  font-size: 70px;
  @media only screen and (max-width: 767px) {
    font-size: 52px;
  }
`;
const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  @media only screen and (max-width: 767px) {
    font-size: 18px;
    margin: 20px 0;
  }
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  @media only screen and (max-width: 767px) {
    font-size: 18px;
    padding: 5px 10px;
  }
`;

const HomeSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slideItems.length - 1);
    }
    if (direction === "right") {
      setSlideIndex(slideIndex < slideItems.length - 1 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideItems.map((slide) => (
          <Slide bg={slide.bg}>
            <ImgContainer>
              <Image src={slide.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{slide.title}</Title>
              <Description>{slide.description}</Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default HomeSlider;
