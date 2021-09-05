import styled from 'styled-components';

export const Wrapper = styled.div`
  > a {
    color: #c7c7c7;
    text-decoration: none;

    @media (max-width: 960px) {
      color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    }
  }

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;
			font-family: 'Bitter', serif;
			font-size: 1.2em;

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
