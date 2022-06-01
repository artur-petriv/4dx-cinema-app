import React from "react";
import styled from "styled-components";
import classNames from "classnames";

export default function Seat({
  place,
  row,
  status,
  hallRowId,
  className,
  onClickPlace,
}) {
  return (
    <SeatContainer
      onClick={() => {
        onClickPlace(row, hallRowId, place);
      }}
      className={classNames(className, {
        available: status === "available",
        sold: status === "sold",
        selected: status === "selected",
      })}
    >
      {place}
    </SeatContainer>
  );
}

// Styled Components
const SeatContainer = styled.div`
  width: 24px;
  height: 36px;
  border-radius: var(--border-radius-small);
  border: 2px solid var(--gray-1);
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-weight: 600;
  color: transparent;
  font-size: 14px;
  transition: color 0.2s ease, border-color 0.2s ease,
    background-color 0.2s ease;
  user-select: none;

  &.available {
    border-color: var(--brand-color);
    cursor: pointer;

    &:hover {
      background-color: var(--brand-color);
      color: var(--gray-0);
    }
  }

  &.selected {
    border-color: var(--brand-color);
    background-color: var(--brand-color);
    cursor: pointer;
    color: var(--gray-0);
  }

  &.sold {
    border: 2px solid var(--gray-3);
    color: transparent;
    background-color: var(--gray-1);
    pointer-events: none;
  }
`;
