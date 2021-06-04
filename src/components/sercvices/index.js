import React from 'react';
import Icon1 from "../../images/img1.svg";
import Icon2 from "../../images/img2.svg";
import Icon3 from "../../images/img3.svg";
import Icon4 from "../../images/img4.svg";
import { ServicesContainer, 
    ServicesWrapper, 
    ServicesCard,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP } from "./ServicesElements";

const Services = () => {
    return (
        <div>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access our platfom online anywhere in the world.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Premium Benefit</ServicesH2>
                <ServicesP>Unlock your special membership card that returns 5% cash back.</ServicesP>
                </ServicesCard>
                
                <ServicesCard>
                <ServicesIcon src={Icon4}/>
                <ServicesH2>Data Accessing</ServicesH2>
                <ServicesP>Unlock your special membership card that returns 5% cash back.</ServicesP>
                </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </div>
    )
}

export default Services;
