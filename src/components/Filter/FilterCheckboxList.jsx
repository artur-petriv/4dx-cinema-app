import React from 'react';
import CheckedSvg from './../../svg/CheckedSvg';
import styled from 'styled-components';
import FilterContainer from './FilterContainer';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const FilterCheckboxList = ({ items }) => {
  const { films } = React.useContext(Context);

  React.useEffect(() => {
    if (films.formatsSelected && Object.keys(films.formatsSelected).length === 0 && films.formatsSelected.constructor === Object
    ) films.setFormatsSelected(
      items.reduce((acc, cur) => ({ [cur.value]: false })),
      {}
    );
  }, []);

  function handleCheckboxClick(value) {
    films.setFormatsSelected({ ...films.formatsSelected, [value]: !films.formatsSelected[value] });
  }

  return (
    <FilterContainer>
      {items.map((checkbox) => (
        <FilterCheckboxItem
          key={checkbox.value}
          onClick={() => handleCheckboxClick(checkbox.value)}>
          <FilterCheckbox className={films.formatsSelected[checkbox.value] ? 'selected' : ''}>
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
  width: 14px;
  height: 10px;
  fill: var(--gray-0);
`;

const FilterCheckboxName = styled.span`
  padding-left: 8px;
  font-weight: 600;
  user-select: none;
  color: var(--gray-8);
`;


export default observer(FilterCheckboxList);