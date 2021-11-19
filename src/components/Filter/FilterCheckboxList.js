import React from 'react';
import CheckedSvg from './../../svg/CheckedSvg';
import styled from 'styled-components';
import FilterContainer from './FilterContainer';

export default function FilterCheckboxList({ items }) {
  const [checkboxes, setCheckboxes] = React.useState({});

  React.useEffect(() => {
    setCheckboxes(
      items.reduce((acc, cur) => ({ [cur.value]: false })),
      {},
    );
  }, [items]);

  function handleCheckboxClick(value) {
    setCheckboxes({ ...checkboxes, [value]: !checkboxes[value] });
  }

  return (
    <FilterContainer>
      {items.map((checkbox) => (
        <FilterCheckboxItem
          key={checkbox.value}
          onClick={() => handleCheckboxClick(checkbox.value)}>
          <FilterCheckbox className={checkboxes[checkbox.value] ? 'selected' : ''}>
            <FilterCheckboxIcon />
          </FilterCheckbox>
          <FilterCheckboxName>{checkbox.name}</FilterCheckboxName>
        </FilterCheckboxItem>
      ))}
    </FilterContainer>
  );
}

// Styled Components
const FilterCheckbox = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid var(--gray-4);
  border-radius: var(--border-radius-small);
  transition: background-color 0.25s, border-color 0.25s;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  &.selected {
    background-color: var(--brand-color);
    border-color: var(--brand-color);
  }
`;

const FilterCheckboxItem = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  &:hover > ${FilterCheckbox} {
    border-color: var(--brand-color);
  }
`;

const FilterCheckboxIcon = styled(CheckedSvg)`
  width: 13px;
  height: 10px;
  fill: var(--gray-0);
`;

const FilterCheckboxName = styled.span`
  padding-left: 8px;
  font-weight: 600;
  user-select: none;
`;
