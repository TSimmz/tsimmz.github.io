import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-bottom: 20px;
  padding: 0px 20px;
  background-color: ${({ theme }) =>
    theme === 'light' ? lightTheme.navbarColor : darkTheme.navbarColor};
  ${({ theme }) =>
    theme === 'light' ? 'filter: drop-shadow(0px 4px 4px #dfdfdf);' : ''}

  &:hover {
    border: 2px solid
      ${({ theme }) =>
        theme === 'light' ? lightTheme.accent : darkTheme.accent};
  }
`;

export const Job = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
