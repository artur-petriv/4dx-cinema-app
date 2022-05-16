import React from 'react';
import styled from 'styled-components';

export default function FilmTitle({ name }) {
  return <Title>{name}</Title>;
}

const Title = styled.h3`
  margin-bottom: 16px;
  color: var(--gray-8);
  font-size: var(--h5-font-size);
  line-height: var(--line-normal);
`;
