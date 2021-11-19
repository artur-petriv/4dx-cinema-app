import React from 'react';
import Logo from './../Logo';
import Search from './../Search';
import HeaderButtons from './HeaderButtons';
import styled from 'styled-components';
import Container from './../Container';

export default function index() {
  return (
    <Header>
      <HeaderContainer>
        <Logo />
        <Search />
        <HeaderButtons />
      </HeaderContainer>
    </Header>
  );
}

// Styled Components
const Header = styled.header`
  height: var(--header-height);
  display: flex;
  background-color: var(--gray-0);
  box-shadow: var(--box-shadow);
`;

const HeaderContainer = styled(Container)`
  grid-template-areas: 'logo logo logo search search search search search header-buttons header-buttons header-buttons header-buttons header-buttons';
  align-items: center;
`;
