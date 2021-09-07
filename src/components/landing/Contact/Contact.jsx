import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, ContactWrapper, Divider } from './styles';
import Slide from '@material-ui/core/Slide';

export const Contact = ({ timeout }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Slide
      direction='left'
      timeout={timeout}
      in={true}
      mountOnEnter
      unmountOnExit>
      <Wrapper theme={theme}>
        <ContactWrapper id='contact' theme={theme}>
          <h1>Contact</h1>
          <Divider theme={theme} />
          <h4 className='inProgress'>{'[ Design in progress ]'}</h4>
        </ContactWrapper>
      </Wrapper>
    </Slide>
  );
};
