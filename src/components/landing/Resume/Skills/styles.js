import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-bottom: 20px;
  padding: 0px 40px;
  background-color: ${({ theme }) =>
    theme === 'light' ? lightTheme.navbarColor : darkTheme.navbarColor};
  ${({ theme }) =>
    theme === 'light' ? 'filter: drop-shadow(0px 4px 4px #dfdfdf);' : ''}
  border: 0px solid
      ${({ theme }) =>
    theme === 'light' ? lightTheme.accent : darkTheme.accent};
  transition: 100ms ease-in-out;
  &:hover {
    border: 2px solid
      ${({ theme }) =>
        theme === 'light' ? lightTheme.accent : darkTheme.accent};
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  align-self: center;
  padding: 16px 32px;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80px;
  height: 80px;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme === 'light' ? '#afafaf' : darkTheme.background};

  transition: 500ms;
  &:hover {
    transform: scale(1.1);
  }

  img {
    object-fit: contain;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
