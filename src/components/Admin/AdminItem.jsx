import React from 'react'
import styled from "styled-components";

export default function AdminItem({ title, addTitle, editTitle, removeTitle }) {
	return (
    <Item>
      <Title>{title}</Title>
      <Buttons>
        <Button>{addTitle}</Button>
        <Button>{editTitle}</Button>
        <Button>{removeTitle}</Button>
      </Buttons>
    </Item>
  );
}

const Item = styled.div`
  padding: 16px 24px;
  width: 100%;
  background-color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--box-shadow);
`;

const Title = styled.div`
  margin-bottom: 16px;
  color: var(--gray-4);
  text-transform: uppercase;
  line-height: 1;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  padding: 12px;
  width: 180px;
  background-color: var(--brand-color);
  color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  line-height: 1;
  transition: background-color 0.3s, opacity 0.3s;
  opacity: 0.95;
  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.9;
  }
`;