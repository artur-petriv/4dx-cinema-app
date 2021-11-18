import React from 'react';
import styled from 'styled-components';
import ArrowDropdownSvg from '../../svg/ArrowDropdownSvg';
import FilterSelectList from './FilterSelectList';

const sortData = [
  { name: 'По рейтингу', value: 'rating' },
  { name: 'По новизне', value: 'new' },
  { name: 'По длительности', value: 'duration' },
];

const FilterContainer = styled.div`
  position: relative;
`;

const FilterSelectWrap = styled.div`
  padding: 12px 20px;
  background-color: var(--gray-1);
  border-radius: var(--border-radius-medium);
  color: var(--gray-8);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  user-select: none;
  transition: background-color 0.25s;
  &:hover {
    background-color: var(--gray-2);
  }
  &:active {
    background-color: var(--gray-1);
  }
`;

const DropdownArrow = styled(ArrowDropdownSvg)`
  width: 12px;
  height: 6px;
  transition: transform 0.25s;
  transform: rotate(0);
  &.active {
    transform: rotate(180deg);
  }
`;

export default function FilterSelect() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [selected, setSelected] = React.useState('');

  React.useEffect(() => {
    setSelected(sortData[0].name);
  }, []);

  function showFilterList() {
    setIsVisible(true);
  }

  function hideFilterList(sortName) {
    setIsVisible(false);
    if (sortName === selected) return;
    if (sortName) setSelected(sortName);
  }

  return (
    <FilterContainer>
      <FilterSelectWrap onClick={showFilterList}>
        {selected}
        <DropdownArrow className={`${isVisible ? 'active' : ''}`} />
      </FilterSelectWrap>

      {isVisible && (
        <FilterSelectList
          sortData={sortData}
          isVisible={isVisible}
          toggleVisibility={(sortName) => hideFilterList(sortName)}
        />
      )}
    </FilterContainer>
  );
}
