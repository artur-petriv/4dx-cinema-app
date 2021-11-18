import React from 'react';
import styled from 'styled-components';
import FilterCheckboxList from '../Filter/FilterCheckboxList';
import FilterSelect from '../Filter/FilterSelect';
import Filter from './../Filter';

const HomeSidebar = styled.div`
  padding: 20px;
  display: grid;
  row-gap: 24px;
  grid-area: sidebar;
  background-color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--box-shadow);
`;

export default function index() {
  return (
    <HomeSidebar>
      <Filter title="Сортировка">
        <FilterSelect />
      </Filter>
      <Filter title="Формат">
        <FilterCheckboxList />
      </Filter>
    </HomeSidebar>
  );
}
