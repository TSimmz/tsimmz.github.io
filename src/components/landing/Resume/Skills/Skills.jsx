import React from 'react';
import { Skill, SkillsContainer, Wrapper } from './styles';

export const Skills = ({ skills }) => {
  const getImage = (path) => {
    return `${process.env.PUBLIC_URL}/` + path;
  };

  return (
    <Wrapper>
      <h4>Skills</h4>
      <SkillsContainer>
        {skills.map(({ name, icon }) => (
          <Skill>
            <img src={getImage(icon)} alt={name} />
            <p>{name}</p>
          </Skill>
        ))}
      </SkillsContainer>
    </Wrapper>
  );
};
