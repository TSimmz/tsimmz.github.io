import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, ResumeWrapper, Divider } from './styles';
import { Fade } from '@material-ui/core';

export const Resume = ({ timeout }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Fade
      timeout={{ enter: timeout, exit: timeout }}
      in={true}
      mountOnEnter
      unmountOnExit>
      <Wrapper theme={theme}>
        <ResumeWrapper id='resume' theme={theme}>
          <h1>Resume</h1>
          <Divider theme={theme} />
          <h4 className='inProgress'>{'[ Design in progress ]'}</h4>
        </ResumeWrapper>
      </Wrapper>
    </Fade>
  );
};
