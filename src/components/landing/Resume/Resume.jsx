import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, ResumeWrapper, Divider } from './styles';
import { Fade } from '@material-ui/core';
import resume from './resume.json';
import { Education } from './Education/Education';
import { Experience } from './Experience/Experience';
import { Skills } from './Skills/Skills';

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
          <Education education={resume.education} />
          <Experience experience={resume.workExperience} />
          <Skills skills={resume.skills} />
        </ResumeWrapper>
      </Wrapper>
    </Fade>
  );
};
