import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SocialIcons from '../SocialIcons/SocialIcons';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  return (
    <Wrapper desktop={desktop}>
      <AnchorLink href=''>Home</AnchorLink>
      <AnchorLink href='#about'>About</AnchorLink>
      <AnchorLink href='#portfolio'>Portfolio</AnchorLink>
      <AnchorLink href='#contact'>Contact</AnchorLink>
      <SocialIcons />
    </Wrapper>
  );
};

export default NavbarLinks;
