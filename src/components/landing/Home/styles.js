import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

// Add background-images to this
export const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  margin-top: 72px;
`;

export const HeroWrapper = styled.section`
  max-width: 50vw;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 144px;
    letter-spacing: 1.5rem;
    margin-bottom: 2rem;
    width: 50vw;

    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;

    @media (max-width: 2360px) {
      font-size: 124px;
      letter-spacing: 1.3rem;
    }

    @media (max-width: 2035px) {
      font-size: 104px;
      letter-spacing: 1.1rem;
    }

    @media (max-width: 1710) {
    }
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
