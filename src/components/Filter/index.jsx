import React from 'react';
import styled from 'styled-components';
import FilterCheckboxList from './FilterCheckboxList';
import FilterRadio from './FilterRadio';
import FilterSelect from './FilterSelect';

export default function index({ title, type, items, selectedSort }) {
  let FilterType = <FilterSelect selectedSort={selectedSort} items={items} />;

  if (type === "checkbox") FilterType = <FilterCheckboxList items={items} />;
  if (type === "radio") FilterType = <FilterRadio items={items} />;

  return (
    <Filter>
      <FilterTitle>{title}</FilterTitle>
      {FilterType}
    </Filter>
  );
}

// Styled Components
const Filter = styled.div`
  padding-bottom: 24px;
  display: grid;
  row-gap: 12px;
  border-bottom: 1px solid var(--gray-1);
  &:last-child {
    /* padding-bottom: 0; */
    border-bottom: none;
  }
`;

const FilterTitle = styled.div`
  display: inline-flex;
  color: var(--gray-5);
  font-size: var(--small-font-size);
`;
