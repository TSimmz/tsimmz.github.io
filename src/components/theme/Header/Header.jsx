import React, { useContext, useState } from 'react';
import Navbar from './Navbar/Navbar';
import Hamburger from './Hamburger/Hamburger';
import Sidebar from './Sidebar/Sidebar';
import { Wrapper, Overlay } from './styles';
import { ThemeContext } from 'providers/ThemeProvider';

export const Header = ({ timeout }) => {
  const [activePage, setActivePage] = useState();
  const [sidebar, toggle] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper theme={theme}>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar
        timeout={timeout}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar
        sidebar={sidebar}
        toggle={toggle}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </Wrapper>
  );
};
