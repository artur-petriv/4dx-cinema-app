import React from 'react';
import styled from 'styled-components';
import FilterContainer from './FilterContainer';

function FilterRadio({ title, items, selected, changeRadioSelected }) {
  return (
    <Filter>
      <FilterTitle>{title}</FilterTitle>
      <FilterContainer>
        {items?.map((radio) => (
          <FilterRadioItem key={radio.id} onClick={() => changeRadioSelected({ ...radio })}>
            <FilterRadioButton
              className={selected.value === radio.value ? 'selected' : ''}></FilterRadioButton>
            <FilterRadioName>{radio.name}</FilterRadioName>
          </FilterRadioItem>
        ))}
      </FilterContainer>
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

const FilterRadioButton = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid var(--gray-4);
  border-radius: 50%;
  position: relative;
  transition: 0.25s;
  &.selected {
    border-color: var(--brand-color);
    // border-width: 2px;
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      height: 12px;
      width: 12px;
      background-color: var(--brand-color);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const FilterRadioItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &:hover > ${FilterRadioButton} {
    border-color: var(--brand-color);
  }
`;

const FilterRadioName = styled.span`
  padding-left: 8px;
  font-weight: 600;
  color: var(--gray-8);
`;

export default FilterRadio;
