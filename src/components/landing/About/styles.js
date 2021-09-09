import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

// Add background-images to this
export const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
`;

export const AboutWrapper = styled.section`
  max-width: 1920px;
  height: 55vh;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
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

  .inProgress {
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.accent : darkTheme.accent};
  }


  p {
    font-size: 24px;
    font-weight: normal;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }
`;

export const CarouselWrapper = styled.div`
  max-width: 650px;
  transform: translateX(125px);
`;

export const Details = styled.div`
  max-width: 660px;
`;

export const Divider = styled.div`
  margin: 0 50px;
  border: 3px solid
    ${({ theme }) => (theme === 'light' ? lightTheme.accent : darkTheme.accent)};
  border-radius: 5px;
  transition: 500ms;
`;
