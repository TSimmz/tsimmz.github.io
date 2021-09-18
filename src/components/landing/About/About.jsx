import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import {
  Wrapper,
  AboutWrapper,
  Details,
  ImageWrapper,
  AboutDivider,
} from './styles';
import { Divider, PageTitle } from 'components/common';
import about from './about.json';
import nyc from 'assets/images/nyc.jpg';
import { Fade } from '@material-ui/core';

export const About = ({ timeout }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Fade
      timeout={{ enter: timeout, exit: timeout }}
      in={true}
      mountOnEnter
      unmountOnExit>
      <Wrapper theme={theme}>
        <AboutWrapper id='about' theme={theme}>
          <ImageWrapper theme={theme}>
            <img src={nyc} alt='times square' />
          </ImageWrapper>
          <Divider as={AboutDivider} vertical theme={theme} />
          <Details theme={theme}>
            <PageTitle theme={theme} className='margin-bottom'>
              About
            </PageTitle>
            {about.details.map((paragraph) => (
              <p key={paragraph.slice(0, 10)}>{paragraph}</p>
            ))}
          </Details>
        </AboutWrapper>
      </Wrapper>
    </Fade>
  );
};
