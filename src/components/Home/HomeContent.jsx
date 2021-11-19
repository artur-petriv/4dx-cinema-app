import React from 'react';
import styled from 'styled-components';
import Card from './../Card';

export default function HomeContent() {
  return (
    <Content>
      <CardsList>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsList>
      <CardsPagination></CardsPagination>
    </Content>
  );
}

// Styled Components
const Content = styled.div`
  border-radius: var(--border-radius-medium);
  box-shadow: var(--box-shadow);
  grid-area: content;
  display: grid;
  grid-template-rows: 1fr 60px;
  row-gap: 28px;
`;

const CardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const CardsPagination = styled.div`
  background-color: #fff;
`;
