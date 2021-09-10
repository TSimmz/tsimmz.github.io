import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import SocialIcons from '../SocialIcons/SocialIcons';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper theme={theme} desktop={desktop}>
      <ToggleTheme />
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/portfolio'>Portfolio</Link>
      <Link to='/contact'>Contact</Link>
      <SocialIcons />
    </Wrapper>
  );
};

export default NavbarLinks;
