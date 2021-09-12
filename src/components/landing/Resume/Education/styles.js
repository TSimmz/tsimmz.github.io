import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h4 {
    font-weight: bold;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 24px;
  }
`;
