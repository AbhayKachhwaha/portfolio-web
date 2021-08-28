// import React, {useState} from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements';
import Video from '../../videos/video.mp4';
// import {Button} from '../../components/ButtonElement';

const HeroSection = () => {

    // const [hover, setHover] = useState(false);

    //  const onHover = () => {
    //     setHover(!hover);
    //  };
     
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Choose me for your business needs</HeroH1>
                <HeroP>I will provide solutions for your business ideas in an efficient manner</HeroP>
                {/* <HeroBtnWrapper>
                    <Button to='contactus' onMouseEnter={onHover} onMouseLeave={onHover}>
                        Contact Us {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper> */}
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
