//import '../../style.css';
import React from 'react';
import { Container } from 'components/common';
import { Wrapper } from './styles';
import NavbarLinks from '../NavbarLinks/NavbarLinks';

const Navbar = () => {
  return (
    <Wrapper as={Container}>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
