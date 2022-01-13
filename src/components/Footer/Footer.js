import React from 'react';
import { AiFillBook, AiFillCode, AiFillFile, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
   <LinkList>
     <LinkColumn>
       <LinkTitle>Email</LinkTitle>
       <LinkItem href = "mailto:arriagabryan@gmail.com">Click Me to Email !</LinkItem>
     </LinkColumn>
 
  
     <LinkColumn>
       <LinkTitle>Resume</LinkTitle>
       <LinkItem><a href = "public/images/1.png" >View Resume PDF</a></LinkItem>
     </LinkColumn>
   </LinkList>
   <SocialIconsContainer>
     <SocialIcons href="https://github.com/aHumptyDumpty">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="">
        add resume <AiFillFile size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/bryan-arriaga/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
   </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
