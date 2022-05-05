import React from "react";
import styled from "styled-components";
import FilterCheckboxList from "./FilterCheckboxList";
import FilterRadioList from "./FilterRadioList";
import FilterSelect from "./FilterSelect";
import FilterSkeleton from "./FilterSkeleton";

export default function index({ title, type, items }) {
  let FilterType = <FilterSelect items={items} />;

  if (type === "checkbox")
    FilterType = <FilterCheckboxList items={items} title={title} />;
  if (type === "radio") FilterType = <FilterRadioList items={items} />;

  return (
    <Filter>
      {items.length === 0 ? (
        <FilterSkeleton type={type} />
      ) : (
        <>
          <FilterTitle>{title}</FilterTitle>
          {FilterType}
        </>
      )}
    </Filter>
  );
}

// Styled Components
const Filter = styled.div`
  padding-bottom: 24px;
  display: grid;
  row-gap: 12px;
  border-bottom: 1px solid var(--gray-1);
  &:last-child {
    /* padding-bottom: 0; */
    border-bottom: none;
  }
`;

const FilterTitle = styled.div`
  display: inline-flex;
  color: var(--gray-5);
  font-size: var(--small-font-size);
`;
