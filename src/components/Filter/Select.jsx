import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import FilterSelect from "./FilterSelect";
import "react-loading-skeleton/dist/skeleton.css";

export default function Select({
  loading,
  items = [],
  className,
  type,
  title,
  onChange,
}) {
  if (!items) return null;

  return (
    <FilterWrap className={className}>
      <FilterTitle>{title}</FilterTitle>
      {loading || items.length === 0 ? (
        <Skeleton
          style={{ minWidth: "120px", alignItems: "center" }}
          height={41}
          borderRadius="var(--border-radius-medium)"
        />
      ) : (
        <FilterSelect items={items} setSelect={onChange} />
      )}
    </FilterWrap>
  );
}

// Styled Components
const FilterWrap = styled.div`
  padding-bottom: 24px;
  display: grid;
  row-gap: 12px;
  border-bottom: 1px solid var(--gray-1);
  &:last-child {
    border-bottom: none;
  }
`;

const FilterTitle = styled.div`
  display: inline-flex;
  color: var(--gray-5);
  font-size: var(--small-font-size);
`;
