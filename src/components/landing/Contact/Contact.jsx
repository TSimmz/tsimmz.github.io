import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, ContactWrapper, FormWrapper } from './styles';
import { Divider } from 'components/common';
import { Fade } from '@material-ui/core';
import ContactForm from './ContactForm/ContactForm';

export const Contact = ({ timeout }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Fade
      timeout={{ enter: timeout, exit: timeout }}
      in={true}
      mountOnEnter
      unmountOnExit>
      <Wrapper theme={theme}>
        <ContactWrapper id='contact' theme={theme}>
          <h1>Contact</h1>
          <FormWrapper>
            <Divider vertical theme={theme} />
            <ContactForm />
          </FormWrapper>
        </ContactWrapper>
      </Wrapper>
    </Fade>
  );
};
