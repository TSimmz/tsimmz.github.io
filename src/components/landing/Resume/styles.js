import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

// Add background-images to this
export const Wrapper = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ResumeWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 144px;
    letter-spacing: 1.5rem;
    margin:bottom: 2rem;

    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }

  h4 {
    font-size: 2rem; 
    font-weight: normal;
    letter-spacing: 1px;
    margin-top: 28px;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
  }

  p {
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
  }

  li {
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
  }

`;

export const Divider = styled.div`
  width: 100%;
  border: 3px solid
    ${({ theme }) => (theme === 'light' ? lightTheme.accent : darkTheme.accent)};
  border-radius: 5px;
  margin-bottom: 40px;
`;
