import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { Context } from '../..';

const FilterSelectList = observer(({ items, isVisible, toggleVisibility }) => {
  const listRef = React.useRef();
  const { films } = React.useContext(Context);

  React.useEffect(() => {
    document.addEventListener('click', handleClick);

    function handleClick(e) {
      if (listRef && listRef.current) {
        const ref = listRef.current;
        if (!ref.contains(e.target)) {
          toggleVisibility();
        }
      }
    }

    return () => document.removeEventListener('click', handleClick);
  }, []);

  function handleOptionClick(option, e) {
    console.log('option', option);
    e.stopPropagation();
    const { id } = option;
    films.setSortSelected(id);
    toggleVisibility(option);
  }

  return (
    <List ref={listRef} className={`${isVisible ? 'visible' : ''}`}>
      {items?.map((option) => (
        <Option key={option.id} onClick={(e) => handleOptionClick(option, e)}>
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
  background-color: var(--gray-1);
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
    background-color: var(--gray-2);
  }
  &:active {
    background-color: var(--gray-3);
  }
`;

export default FilterSelectList;
