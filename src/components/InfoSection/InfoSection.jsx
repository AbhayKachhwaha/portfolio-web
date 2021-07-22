import React from "react";
import { Button } from "../ButtonElement";
import Banner from "../Banner/Banner";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  // Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  // Column2,
  // ImgWrap,
  // Img,
  ButtonWrap,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  topline,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  marquee,
  dark,
  redirect,
  smooth,
  image
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart= {false}>
            {/* <Column1> */}
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <ButtonWrap>
                  <Button
                    to={redirect}
                    spy={true}
                    smooth={smooth}
                    offset={-80}
                    duration={500}
                    lightBg={lightBg}
                  >
                    {buttonLabel}
                  </Button>
                </ButtonWrap>
              </TextWrapper>
            {/* </Column1> */}
            {/* <Column2>
              <ImgWrap>
                <Img src={image} alt='aboutme'/>
              </ImgWrap>
            </Column2> */}
          </InfoRow>
        </InfoWrapper>
        {marquee && <Banner />}
      </InfoContainer>
    </>
  );
};

export default InfoSection;
