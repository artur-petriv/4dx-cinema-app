import React from 'react'
import styled from "styled-components";

export default function Button({ children }) {
	return <Btn>{children}</Btn>;
}

// Styled Components
const Btn = styled.button`
  padding: 12px;
  width: 100%;
  max-width: 320px;
  background-color: var(--brand-color);
  color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  line-height: 1;
  font-weight: 600;
  transition: background-color 0.3s, opacity 0.3s;
  opacity: 0.95;
  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.9;
  }
`;