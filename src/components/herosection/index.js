import React, {useState} from 'react';
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";
import {HeroContainer,
        HeroBg,
        VideoBg,
        HeroContent,
        HeroH1,
        HeroP,
        HeroBtnWrapper,
        ArrowForward, ArrowRight}
        from "./HeroElements";

const Hero = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <div>
           <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>

            <HeroContent>
                <HeroH1>
                    Virtual Banking Made Easy
                </HeroH1>
                <HeroP>
                    Sign Up For a New Account today and Receive $100 in Credit Towards Your
                    Next Payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to="signup" onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true" 
                    dark="true">
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>

           </HeroContainer> 
        </div>
    )
}

export default Hero;
