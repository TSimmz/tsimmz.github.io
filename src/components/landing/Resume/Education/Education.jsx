import React from 'react';
import { Wrapper, Details, Row } from './styles';

export const Education = ({ education }) => {
  return (
    <Wrapper>
      <h4>Education</h4>
      <Details>
        <Row>
          <p>{education.school}</p>
          <p>{education.location}</p>
        </Row>
        <Row>
          <p>{education.degree}</p>
          <p>{education.graduation}</p>
        </Row>
      </Details>
    </Wrapper>
  );
};
