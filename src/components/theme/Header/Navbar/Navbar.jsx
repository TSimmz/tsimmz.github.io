//import '../../style.css';
import React, { useContext } from 'react';
import { Container } from 'components/common';
import { Wrapper } from './styles';
import NavbarLinks from '../NavbarLinks/NavbarLinks';
import { ThemeContext } from 'providers/ThemeProvider';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} theme={theme}>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
