import React from 'react';
import styled from 'styled-components';
import HomeContent from './HomeContent';
import HomeSidebar from './HomeSidebar';
import Container from './../Container';

const HomeSection = styled.section``;

const HomeContainer = styled(Container)`
  grid-template-areas: 'sidebar sidebar sidebar content content content content content content content content content';
`;

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
