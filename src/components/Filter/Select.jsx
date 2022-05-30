import React from "react";
import styled from "styled-components";
import FilterSelect from "./FilterSelect";
import FilterSkeleton from "./FilterSkeleton";

export default function Select({ items, className, type, title, onChange }) {
  console.log("items", items);

  if (!items) return null;

  return (
    <FilterWrap className={className}>
      {items?.length === 0 ? (
        <FilterSkeleton type={type} />
      ) : (
        <>
          <FilterTitle>{title}</FilterTitle>
          <FilterSelect items={items} setSelect={onChange} />
        </>
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
