import styled from 'styled-components';
import { lightTheme, darkTheme } from '../../../providers/ThemeProvider';

export const Wrapper = styled.div`
  background: transparent;
  width: 100%;
  background-color: ${({ theme }) =>
    theme === 'light' ? lightTheme.navbarColor : darkTheme.navbarColor};
  transition: 500ms;
`;

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;	
	`}
`;
