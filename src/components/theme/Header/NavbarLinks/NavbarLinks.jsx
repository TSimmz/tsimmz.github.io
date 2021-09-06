import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from '../SocialIcons/SocialIcons';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  return (
    <Wrapper desktop={desktop}>
      <ToggleTheme />
      <Link to='/'>Home</Link>
      <Link to='/portfolio'>Portfolio</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <SocialIcons />
    </Wrapper>
  );
};

export default NavbarLinks;
