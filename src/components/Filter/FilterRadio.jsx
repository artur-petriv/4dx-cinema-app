import React from 'react';
import styled from 'styled-components';
import FilterContainer from './FilterContainer';

export default function FilterRadio({ items }) {
  const [radioButton, setRadioButton] = React.useState('all');

  function handleRadioClick(value) {
    if (radioButton === value) return;
    setRadioButton(value);
  }

  return (
    <FilterContainer>
      <FilterRadioItem onClick={() => handleRadioClick('all')}>
        <FilterRadioButton className={radioButton === 'all' ? 'selected' : ''}></FilterRadioButton>
        <FilterRadioName>Все</FilterRadioName>
      </FilterRadioItem>
      {items.map((radio) => (
        <FilterRadioItem onClick={() => handleRadioClick(radio.value)} key={radio.value}>
          <FilterRadioButton
            className={radioButton === radio.value ? 'selected' : ''}></FilterRadioButton>
          <FilterRadioName>{radio.name}</FilterRadioName>
        </FilterRadioItem>
      ))}
    </FilterContainer>
  );
}

// Styled Components
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
