import React from 'react'
import styled from "styled-components";

export default function LabelInput({ title, valuePlaceholder }) {
	return (
    <LabelContainer>
      <Title>{title}</Title>
      <Input placeholder={valuePlaceholder} />
    </LabelContainer>
  );
}

// Styled Components
const LabelContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Title = styled.div`
	margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px 16px;
  width: 100%;
  border: 1px solid var(--gray-3);
  border-radius: 8px;
  color: var(--gray-10);
  transition: 0.3s;
  font-size: var(--text-font-size);
  line-height: 20px;
  &:focus {
    border: 1px solid var(--brand-color);
  }
  &::placeholder {
    color: var(--gray-4);
  }
`;