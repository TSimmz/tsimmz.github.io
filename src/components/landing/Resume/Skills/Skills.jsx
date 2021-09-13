import React from 'react';
import { Skill, SkillsContainer, Wrapper } from './styles';
import { Tooltip } from '@material-ui/core';

export const Skills = ({ skills, theme }) => {
  const getImage = (path) => {
    return `${process.env.PUBLIC_URL}/` + path;
  };

  return (
    <Wrapper theme={theme}>
      <h4>Skills</h4>
      <SkillsContainer>
        {skills.map(({ name, icon }) => (
          <Skill theme={theme}>
            <Tooltip title={name} aria-label={name}>
              <img src={getImage(icon)} alt={name} />
            </Tooltip>
          </Skill>
        ))}
      </SkillsContainer>
    </Wrapper>
  );
};
