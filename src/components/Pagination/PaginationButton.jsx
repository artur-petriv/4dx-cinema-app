import React from "react";
import styled from "styled-components";

export default function PaginationButton({ page, selected, onClick }) {
  return (
    <Button onClick={onClick} className={selected ? "selected" : ""}>
      {page}
    </Button>
  );
}

const Button = styled.button`
  padding: 8px 12px;
  min-width: 42px;
  font-weight: 400;
  font-size: var(--button-font-size);
  color: var(--gray-8);
  line-height: var(--line-normal);
  border-radius: var(--border-radius-medium);
  &.selected {
    background-color: var(--gray-0);
    box-shadow: var(--box-shadow);
    cursor: default;
    font-weight: 600;
  }
`;
