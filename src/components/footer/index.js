import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { FooterContainer,
        FooterWrap,
        FooterLinksContainer,
        FooterLinksWrapper,
        FooterLinksItems,
        FooterLinksTitle,
        FooterLink,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        SocialIcons,
        SocialIconLink,
        WebsiteRights } from "./FooterElements";

const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>

                            <FooterLinksItems>
                                <FooterLinksTitle> About Us</FooterLinksTitle>
                                    <FooterLink to="/">How it Works</FooterLink>
                                    <FooterLink to="/">Testimonials</FooterLink>
                                    <FooterLink to="/">Careers</FooterLink>
                                    <FooterLink to="/">Terms of Service</FooterLink>
                            </FooterLinksItems>

                            <FooterLinksItems>
                            <FooterLinksTitle> Contact Us</FooterLinksTitle>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Destinations</FooterLink>
                                <FooterLink to="/">Sponsorship</FooterLink>
                        </FooterLinksItems>

                        </FooterLinksWrapper>

                        <FooterLinksWrapper>

                        <FooterLinksItems>
                            <FooterLinksTitle>Videos</FooterLinksTitle>
                                <FooterLink to="/">Submit Video</FooterLink>
                                <FooterLink to="/">Ambassador</FooterLink>
                                <FooterLink to="/">Agency</FooterLink>
                                <FooterLink to="/">Influencer</FooterLink>
                        </FooterLinksItems>

                        <FooterLinksItems>
                        <FooterLinksTitle>Social Media</FooterLinksTitle>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Youtube</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>
                    </FooterLinksItems>

                    </FooterLinksWrapper>
                    </FooterLinksContainer>

                    <SocialMedia>
                        <SocialMediaWrap>
                            
                            <SocialLogo to="/">
                                PAYDASH
                            </SocialLogo>
                            
                            <WebsiteRights>
                                @danu_p313 - {new Date().getFullYear()} All rights reserved.
                            </WebsiteRights>

                            <SocialIcons>
                                <SocialIconLink href="//www.facebook.com/danunakchosambiie/" target="_blank" arial-label="Facebook">
                                <FaFacebook />
                                </SocialIconLink>

                                <SocialIconLink href="//www.instagram.com/danu_p313/" target="_blank" arial-label="Instagram">
                                <FaInstagram />
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank" arial-label="Youtube">
                                <FaYoutube />
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                                <FaTwitter />
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank" arial-label="Linkedin">
                                <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>

                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </div>
    )
}

export default Footer;
