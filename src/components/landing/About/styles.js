import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

// Add background-images to this
export const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  margin: 40px 0px;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1310px) {
    height: 80vh;
    margin: 80px 0px;
  }
`;

export const AboutWrapper = styled.section`
  max-width: 1920px;
  height: 55vh;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1310px) {
    flex-direction: column;
  }

  h1 {
    font-size: 144px;
    letter-spacing: 1.5rem;
    margin:bottom: 2rem;

    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;

    @media (max-width: 1500px) {
      font-size: 124px;
    }

    @media (max-width: 1310px) {
      font-size: 100px;
      letter-spacing: 1.3rem;
      align-self: center;
    }
  }

  p {
    font-size: 22px;
    font-weight: normal;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;

    @media (max-width: 1500px) {
      font-size: 20px;
    }
  }
`;

export const CarouselWrapper = styled.div`
  width: 650px;
  transform: translateX(125px);
`;

export const Details = styled.div`
  flex-shrink: 1;
  max-width: 660px;
  display: flex;
  flex-direction: column;
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
  }
`;

export const ImageWrapper = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1310px) {
    height: 30vh;
    margin-bottom: 40px;
  }

  img {
    height: inherit;
    margin: 0 auto;
    object-fit: cover;

    ${({ theme }) =>
      theme === 'light' ? 'filter: drop-shadow(0px 4px 4px #afafaf);' : ''}
  }
`;
