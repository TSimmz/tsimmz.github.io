import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import {
  Wrapper,
  AboutWrapper,
  Divider,
  CarouselWrapper,
  Details,
} from './styles';
import { Fade } from '@material-ui/core';
import Carousel from './Carousel/Carousel';

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
          <CarouselWrapper>
            <Carousel />
          </CarouselWrapper>
          <Divider theme={theme} />
          <Details>
            <h1>About</h1>
            <p>
              Originally from the Pittsburgh area, I moved to Tampa Bay in 2012
              to begin university and assist my grandparents.
            </p>
            <p>
              I graduated from the University of South Florida in December 2017
              with a B.S. in Computer Engineering. In college, I spent alot of
              my free time programming small robotics and microcontrollers.
            </p>
            <p>
              I started my professional career as an Integration Engineer,
              before moving to program Avionics systems for CAE USA Tampa.
            </p>
            <p>
              During the Covid lockdown of 2020, I wanted a new challenge and so
              began the journey into web development, spending many nights and
              weekends immersing myself into this new world.
            </p>
            <p>
              In my free time, I love to travel, work on my photography and
              videography, fly my drone, and just relax with my girlfriend, dog,
              and two rabbits.
            </p>
          </Details>
          {/*<h4 className='inProgress'>{'[ Design in progress ]'}</h4>*/}
        </AboutWrapper>
      </Wrapper>
    </Fade>
  );
};
