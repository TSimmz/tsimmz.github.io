import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const PageTitle = styled.h1`
  font-size: 9rem;
  letter-spacing: 1.1vw;
  margin: 0;

  color: ${({ theme }) =>
    theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
  transition: 500ms;

  &.center {
    align-self: center;
  }

  &.left {
    align-self: flex-start;
  }

  &.right {
    align-self: flex-end;
  }
`;
