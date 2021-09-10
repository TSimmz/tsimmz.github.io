import styled from 'styled-components';
import { lightTheme, darkTheme } from '../../../../providers/ThemeProvider';

export const Wrapper = styled.div`
  width: 100%;

  > a {
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.lightColor : darkTheme.lightColor};
    transition: 500ms;
    text-decoration: none;

    @media (max-width: 960px) {
      color: ${({ theme }) =>
        theme === 'light' ? lightTheme.lightColor : darkTheme.lightColor};
    }

    &:hover {
      color: ${({ theme }) =>
        theme === 'light' ? lightTheme.darkColor : darkTheme.hover};
      transform: scale(1.1);
    }
  }

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;
			font-family: 'Bitter', serif;
			font-size: 1.2em;

			
			> button {
				margin-right: auto;
			}

			@media (max-width: 960px) {
					display: none;
			}

			> a {
				margin: 0 2em;

				
				&:last-child {
						margin-right: unset;
				}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			> a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
