import React from "react";
import styled from "styled-components";

export default function PaginationButton({ page: { page, selected = false } }) {
  console.log(selected);

  return <Button className={selected ? "selected" : ""}>{page}</Button>;
}

const Button = styled.button`
  padding: 12px 16px;
  font-size: var(--button-font-size);
  color: var(--gray-8);
  line-height: var(--line-base);
  border-radius: var(--border-radius-medium);
  &.selected {
    background-color: var(--gray-0);
    box-shadow: var(--box-shadow);
    cursor: default;
  }
`;
