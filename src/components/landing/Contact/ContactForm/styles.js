import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Error = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? lightTheme.accent : darkTheme.accent};
`;

export const InputField = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: 650px;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) =>
    theme === 'light' ? lightTheme.navbarColor : darkTheme.navbarColor};
  border: 2px solid
    ${({ theme }) =>
      theme === 'light' ? lightTheme.lightColor : darkTheme.lightColor};
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  transition: 0.3s;

  &:focus {
    border-color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor}; 
  }

  ${({ error, theme }) =>
    error && theme === 'light' &&
    `
		border-color: ${lightTheme.accent};
	`}

${({ error, theme }) =>
    error && theme !== 'light' &&
    `
		border-color: ${darkTheme.accent};
	`}

  &::placeholder {
    color: ${lightTheme.lightColor};
  }
`;

export const Submit = styled.button`
  width: 175px;
  height: 50px;
  font-size: 24px;
  margin-top: 16px;

  color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor}; 
  background-color: ${({ theme }) =>
      theme === 'light' ? lightTheme.navbarColor : darkTheme.navbarColor};
`;
