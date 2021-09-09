import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, HeroWrapper, Divider, CTA } from './styles';
import { Button } from 'components/common';
import { Link } from 'react-router-dom';
import { Fade } from '@material-ui/core/';

export const Home = ({ timeout }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Fade
      timeout={{ enter: timeout, exit: timeout }}
      in={true}
      mountOnEnter
      unmountOnExit>
      <Wrapper theme={theme}>
        <HeroWrapper id='home' theme={theme}>
          <h1>Tyler Simoni</h1>
          <Divider theme={theme} />
          <h4>
            I'm a frontend developer and designer based in the Tampa Bay area.
          </h4>
          <Button as={CTA} theme={theme}>
            <Link to='/about'>Know more</Link>
          </Button>
        </HeroWrapper>
      </Wrapper>
    </Fade>
  );
};
