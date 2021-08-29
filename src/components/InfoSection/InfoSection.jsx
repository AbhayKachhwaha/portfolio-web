import React from "react";
import { Button, ButtonLink } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ButtonWrap,
} from "./InfoElements";
import Card from "../Cards/Card";

const InfoSection = ({
  lightBg,
  id,
  topline,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  redirect,
  smooth,
  btnLink,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
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
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
