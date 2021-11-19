import React from 'react';
import SearchSvg from '../../svg/SearchSvg';
import styled from 'styled-components';

export default function index() {
  return (
    <Search>
      <SearchIcon />
      <SearchInput />
    </Search>
  );
}

// Styled Components
const SearchIcon = styled(SearchSvg)`
  width: 15px;
  height: 16px;
  position: absolute;
  top: 50%;
  left: 28px;
  transform: translateY(-50%);
  fill: var(--gray-4);
`;

const Search = styled.div`
  grid-area: search;
  position: relative;
`;

const SearchInput = styled.input.attrs({
  type: 'text',
  name: 'search',
  placeholder: 'Поиск',
})`
  padding: 12px 32px 12px 52px;
  width: 300px;
  border-radius: 8px;
  background-color: var(--gray-1);
  color: var(--gray-8);
`;
