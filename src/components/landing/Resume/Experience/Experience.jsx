import React from 'react';
import { Wrapper, Job, Row } from './styles';

export const Experience = ({ experience }) => {
  return (
    <Wrapper>
      <h4>Experience</h4>
      {experience.map(
        ({ company, location, start, end, position, responsibilities }) => (
          <Job>
            <Row>
              <p>{company}</p>
              <p>{location}</p>
            </Row>
            <Row>
              <p>{position}</p>
              <p>
                {start} - {end}
              </p>
            </Row>
            <ul>
              {responsibilities.map((task) => (
                <li>{task}</li>
              ))}
            </ul>
          </Job>
        )
      )}
    </Wrapper>
  );
};
