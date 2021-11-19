import React from 'react';
import styled from 'styled-components';

export default function FilterContainer({ children }) {
  return <Container>{children}</Container>;
}

// Styled Components
const Container = styled.div`
  display: flex;
  row-gap: 8px;
  flex-direction: column;
  align-items: flex-start;
`;
