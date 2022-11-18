import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  IconsWrapper,
} from "./HeroElements";
import Video from "../../videos/video.m4v";
import { Button } from "../ButtonElement";
import { SocialIcon } from "react-social-icons";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/m4v" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to my Portfolio Website</HeroH1>
        <IconsWrapper>
          <SocialIcon
            style={{ margin: 10 }}
            network="github"
            bgColor="#DEDEDE"
            url="https://github.com/AbhayKachhwaha"
          />
          <SocialIcon
            onFocus={{ CSS }}
            style={{ margin: 10 }}
            network="linkedin"
            url="https://www.linkedin.com/in/abhaykachhwaha/"
          />
        </IconsWrapper>
        <HeroP>
          I provide online business solutions and implement ideas in an
          efficient manner
        </HeroP>
        <HeroBtnWrapper>
          <Button to="about" smooth={true} lightBg={true}>
            About Me
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
