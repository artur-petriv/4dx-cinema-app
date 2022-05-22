import React from 'react';
import styled from 'styled-components';
import ArrowDropdownSvg from '../../svg/ArrowDropdownSvg';
import FilterSelectList from './FilterSelectList';

const FilterSelect = ({ items, className, setSelect }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [selected, setSelected] = React.useState('');

  React.useEffect(() => {
    //TODO: Check if need useCallback
    console.log('FilterSelect', items);
    if (items.length === 0) return;

    const { name, id } = items[0];
    setSelected(name);
    setSelect && setSelect(items[0]);
  }, [items]);

  function showFilterList() {
    setIsVisible(true);
  }

  function hideFilterList(option) {
    console.log('hideFilterList', option);
    setIsVisible(false);
    if (!option) return;
    if (option.name === selected) return;
    if (option.name) {
      setSelected(option.name);
      setSelect && setSelect(option);
    }
  }

  return (
    <FilterContainer className={className}>
      <FilterSelectWrap onClick={showFilterList}>
        {selected}
        <DropdownArrow className={`${isVisible ? 'active' : ''}`} />
      </FilterSelectWrap>

      {isVisible && (
        <FilterSelectList
          items={items}
          isVisible={isVisible}
          toggleVisibility={(option) => hideFilterList(option)}
        />
      )}
    </FilterContainer>
  );
};

// Styled Components
const FilterContainer = styled.div`
  position: relative;
`;

const FilterSelectWrap = styled.div`
  padding: 12px 20px;
  min-width: 120px;
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
  margin-left: 12px;
  width: 12px;
  height: 6px;
  transition: transform 0.25s;
  transform: rotate(0);
  &.active {
    transform: rotate(180deg);
  }
`;

export default FilterSelect;
