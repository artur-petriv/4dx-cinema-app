import React from 'react';
import styled from 'styled-components';

export default function index() {
  return (
    <Card>
      <Img src="https://noar.pp.ua/4dx/img/card.jpg" alt="" />
    </Card>
  );
}

// Styled Components
const Card = styled.div`
  padding: 12px;
  max-width: 300px;
  border-radius: var(--border-radius-medium);
  background-color: var(--gray-0);
  box-shadow: var(--box-shadow);
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Img = styled.img`
  border-radius: var(--border-radius-medium);
`;
