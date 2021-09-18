import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

// Add background-images to this
export const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  margin: 92px 0px;
  display: flex;
  align-items: center;

  @media (max-width: 1310px) {
    height: 80vh;
    margin: 122px 0px;
  }
`;

export const AboutWrapper = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-areas: 'image divide text';
  align-items: center;

  @media (max-width: 1310px) {
    grid-template-areas:
      'image'
      'divide'
      'text';
    justify-content: center;

    align-items: center;
  }
`;

export const Details = styled.div`
  grid-area: 'text';
  display: flex;
  flex-direction: column;

  p {
    font-size: 22px;
    font-weight: normal;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }
`;

export const ImageWrapper = styled.div`
  grid-area: 'image';
  width: 22vw;

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;

    ${({ theme }) =>
      theme === 'light' ? 'filter: drop-shadow(0px 4px 4px #afafaf);' : ''}
    transition: 500ms;
  }
`;
