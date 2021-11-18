import React from 'react';
import styled from 'styled-components';

const Filter = styled.div`
  padding-bottom: 24px;
  display: grid;
  row-gap: 12px;
  border-bottom: 1px solid var(--gray-1);
  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const FilterTitle = styled.div`
  display: inline-flex;
  color: var(--gray-5);
  font-size: var(--small-font-size);
`;

export default function index({ title, children }) {
  return (
    <Filter>
      <FilterTitle>{title}</FilterTitle>
      {children}
    </Filter>
  );
}
