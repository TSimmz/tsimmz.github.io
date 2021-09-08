import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

// Add background-images to this
export const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
`;

export const HeroWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
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
    transition: 500ms;
  }

  .inProgress {
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.accent : darkTheme.accent};
    transition: 500ms;
  }

`;

export const Divider = styled.div`
  width: 100%;
  border: 3px solid
    ${({ theme }) => (theme === 'light' ? lightTheme.accent : darkTheme.accent)};
  border-radius: 5px;
  transition: 500ms;
`;

export const CTA = styled.button`
  margin-top: 150px;
  width: 240px;
  height: 65px;
  font-size: 30px;

  > a {
    display: block;
    height: 100%;
    width: 100%;
    transform: translateY(20%);
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.lightColor};
    transition: 500ms;
    &:hover {
      color: #fff;
    }
  }
`;
