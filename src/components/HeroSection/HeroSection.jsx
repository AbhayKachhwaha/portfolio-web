import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";
import Video from "../../videos/video.m4v";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/m4v" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Choose me for your business needs</HeroH1>
        <HeroP>
          I will provide solutions for your business ideas in an efficient
          manner
        </HeroP>
        <Button to="about" smooth={true} lightBg={true}>
          About Me
        </Button>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
