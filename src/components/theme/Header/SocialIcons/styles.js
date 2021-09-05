import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin: 0 0.5rem;
    width: 24px;
    height: 24px;
    transition: filter 400ms;

    svg {
      margin: 0;
      fill: #c7c7c7;
      transition: fill 500ms;

      &:hover {
        fill: #494949;
      }
    }
  }
`;
