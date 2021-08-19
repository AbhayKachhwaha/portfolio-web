import React from "react";
import { Button, ButtonLink } from "../ButtonElement";
// import Banner from "../Banner/Banner";
import {
  InfoContainer,
  InfoWrapper,
  // InfoRow,
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
import Card from "../Cards/Card";
// import styles from "./InfoSection.css";

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
  image,
  card,
  btnLink,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          {/* <InfoRow imgStart={false}> */}
          {/* <Column1> */}
          <TextWrapper card={true}>
            <TopLine>{topline}</TopLine>
            <Heading lightText={lightText}>{headline}</Heading>
            {id === "portfolio" && <Card />}
            {description && (
              <Subtitle darkText={darkText}>{description}</Subtitle>
            )}
            <ButtonWrap>
              {!btnLink && (
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
              )}

              {btnLink && (
                <ButtonLink
                  to={redirect}
                  spy={true}
                  smooth={smooth}
                  offset={-80}
                  duration={500}
                  lightBg={lightBg}
                >
                  {buttonLabel}
                </ButtonLink>
              )}
            </ButtonWrap>
          </TextWrapper>
          {/* </Column1> */}
          {/* <Column2>
              <ImgWrap>
                <Img src={image} alt='aboutme'/>
              </ImgWrap>
            </Column2> */}
          {/* </InfoRow> */}
          {/* {marquee && <Banner className={styles.marquee} />} */}
        </InfoWrapper>
        {/* {marquee && <Banner />} */}
      </InfoContainer>
    </>
  );
};

export default InfoSection;
