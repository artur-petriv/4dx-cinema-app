import React from "react";
import styled from "styled-components";

export default function LabelInput({
  title,
  name,
  value,
  onChange,
  valuePlaceholder,
  errorMessage,
}) {
  return (
    <LabelContainer>
      <Title>{title}</Title>
      <Input
        onChange={onChange}
        value={value}
        name={name}
        placeholder={valuePlaceholder}
        className={errorMessage && "error"}
      />
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </LabelContainer>
  );
}

// Styled Components
const LabelContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Title = styled.div`
  margin-bottom: 8px;
  display: inline-flex;
  color: var(--gray-5);
  font-size: var(--small-font-size);
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
  &.error {
    border-color: var(--negative-color);
  }
  &:focus {
    border: 1px solid var(--brand-color);
  }
  &::placeholder {
    color: var(--gray-4);
  }
`;

const ErrorText = styled.span`
  margin-top: 8px;
  color: var(--negative-color);
  font-size: var(--small-font-size);
`;
