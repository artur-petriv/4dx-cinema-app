import React from 'react';
import styled from 'styled-components';
import Container from './../Container';

const Footer = styled.footer`
  background-color: var(--gray-0);
`;

const FooterContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Copyright = styled.span`
  color: var(--gray-4);
  font-size: var(--text-font-size);
`;

export default function index() {
  return (
    <Footer>
      <FooterContainer>
        <Copyright>© 2021 4DX Premiere | Artur Petriv</Copyright>
      </FooterContainer>
    </Footer>
  );
}
