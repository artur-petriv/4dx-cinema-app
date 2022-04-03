import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { Context } from '../..';

const FilterSelectList = observer(({ items, isVisible, toggleVisibility }) => {
  const listRef = React.useRef();
  const { films } = React.useContext(Context);

  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);

    function handleClick(e) {
      if (listRef && listRef.current) {
        const ref = listRef.current;
        if (!ref.contains(e.target)) {
          toggleVisibility();
        }
      }
    }
  }, []);

  function handleOptionClick(option, e) {
    e.stopPropagation();
    const { name, value } = option;

    films.setSortSelected(value);
    toggleVisibility(name);
  }

  return (
    <List ref={listRef} className={`${isVisible ? 'visible' : ''}`}>
      {items.map((option) => (
        <Option onClick={(e) => handleOptionClick(option, e)} key={option.value}>
          {option.name}
        </Option>
      ))}
    </List>
  );
});

// Styled Components

const List = styled.div`
  margin-top: 8px;
  padding: 8px;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--box-shadow-overflow);
  z-index: var(--z-index-first);
  display: none;
  &.visible {
    display: block;
  }
`;

const Option = styled.div`
  padding: 12px 16px;
  border-radius: var(--border-radius-medium);
  transition: background-color 0.25s;
  cursor: pointer;
  font-weight: 600;
  font-size: var(--text-font-size);
  color: var(--gray-8);
  user-select: none;
  &:hover {
    background-color: var(--gray-1);
  }
  &:active {
    background-color: var(--gray-2);
  }
`;

export default FilterSelectList;