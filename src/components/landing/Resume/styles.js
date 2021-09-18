import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

// Add background-images to this
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 112px;
`;

export const ResumeWrapper = styled.section`
  max-width: 1200px;
  margin: 20px auto;
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    margin: 20px auto 30px;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 1px;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
  }

  p {
    font-size: 22px;
    margin-bottom: 0.5rem;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
  }

  li {
    list-style: square;
    margin-left: 50px;
    margin-bottom: 20px;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
  }
`;

export const ResumeBody = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1310px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  flex: 1;
  margin: 0px 30px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.7rem;
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
`;
