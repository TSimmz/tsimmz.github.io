import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, ResumeWrapper } from './styles';
import { Divider } from 'components/common';
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
          <Divider horizontal theme={theme} />
          <Education education={resume.education} theme={theme} />
          <Experience experience={resume.workExperience} theme={theme} />
          <Skills skills={resume.skills} theme={theme} />
        </ResumeWrapper>
      </Wrapper>
    </Fade>
  );
};
