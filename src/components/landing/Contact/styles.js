import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

// Add background-images to this
export const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
`;

export const ContactWrapper = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;

  h1 {
    font-size: 144px;
    letter-spacing: 1.5rem;
    margin-bottom: 2rem;

    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
`;

export const Divider = styled.div`
  height: inherit;
  margin: 0 50px;
  border: 3px solid
    ${({ theme }) => (theme === 'light' ? lightTheme.accent : darkTheme.accent)};
  border-radius: 5px;
  transition: 500ms;
`;
