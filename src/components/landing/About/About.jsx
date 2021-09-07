import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, AboutWrapper, Divider } from './styles';
import Slide from '@material-ui/core/Slide';

export const About = ({ timeout }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Slide
      direction='left'
      timeout={timeout}
      in={true}
      mountOnEnter
      unmountOnExit>
      <Wrapper theme={theme}>
        <AboutWrapper id='about' theme={theme}>
          <h1>About</h1>
          <Divider theme={theme} />
          <h4 className='inProgress'>{'[ Design in progress ]'}</h4>
        </AboutWrapper>
      </Wrapper>
    </Slide>
  );
};
