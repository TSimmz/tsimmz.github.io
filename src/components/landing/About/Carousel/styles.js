import styled from 'styled-components';

export const ImageWrapper = styled.div`
  height: 55vh;

  @media (max-width: 1000px) {
    height: 45vh;
    transition: 500ms;
  }

  img {
    height: 100%;
    width: 80%;
    object-fit: cover;
    padding: 10px;

    ${({ theme }) =>
      theme === 'light' ? 'filter: drop-shadow(0px 4px 4px #afafaf);' : ''}
  }
`;
