import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 30px;
`;

export default function index({ children, className }) {
  return <Container className={className}>{children}</Container>;
}
