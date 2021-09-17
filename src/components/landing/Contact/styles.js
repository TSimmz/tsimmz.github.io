import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

// Add background-images to this
export const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  margin-top: 72px;
  display: flex;
  align-items: center;
`;

export const ContactWrapper = styled.section`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;

  @media (max-width: 1310px) {
    flex-direction: column;
  }

  h1 {
    font-size: 96px;
    letter-spacing: 1.5rem;
    margin-bottom: 2rem;
    align-self: center;

    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
    flex: 1;
  }
`;

export const FormWrapper = styled.div`
  display: flex;

  @media (max-width: 1310px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  form {
    margin: 0;
    width: 20vw;

    @media (max-width: 1310px) {
      width: 40vw;
    }
  }
`;

export const Divider = styled.div`
  height: inherit;
  margin: 0 50px;
  border: 3px solid
    ${({ theme }) => (theme === 'light' ? lightTheme.accent : darkTheme.accent)};
  border-radius: 5px;
  transition: 500ms;

  @media (max-width: 1310px) {
    height: 0;
    width: 100%;
    margin-bottom: 40px;
  }
`;
