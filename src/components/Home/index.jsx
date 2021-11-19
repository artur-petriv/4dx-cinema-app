import React from 'react';
import styled from 'styled-components';
import HomeContent from './HomeContent';
import HomeSidebar from './HomeSidebar';
import Container from './../Container';

export default function index() {
  return (
    <HomeSection>
      <HomeContainer>
        <HomeSidebar />
        <HomeContent />
      </HomeContainer>
    </HomeSection>
  );
}

// Styled Components
const HomeSection = styled.section``;

const HomeContainer = styled(Container)`
  grid-template-areas: 'sidebar sidebar sidebar content content content content content content content content content';
  gap: 32px;
`;
