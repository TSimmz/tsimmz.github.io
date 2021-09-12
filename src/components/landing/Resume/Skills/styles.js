import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin_bottom: 40px;

  h4 {
    font-weight: bold;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  align-self: center;
  width: 80%;
  border: 2px solid black;
  border-radius: 4px;
  padding: 16px 32px;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8px;
  width: 80px;
  padding: 10px;

  img {
    width: 60px;
    object-fit: cover;
    margin: 0;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    margin: 0;
    padding: 4px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
