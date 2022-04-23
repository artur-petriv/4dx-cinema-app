import React from "react";
import styled from "styled-components";
import CheckedSvg from "./../../svg/CheckedSvg";
import FilterContainer from "./FilterContainer";

export default function FilterCheckbox({
  items,
  title,
  selected,
  changeCheckboxSelected,
}) {
  if (!title || items.length === 0) return null;

  return (
    <Filter>
      <FilterTitle>{title}</FilterTitle>
      <FilterContainer>
        {items?.map((checkbox) => (
          <FilterCheckboxItem
            key={checkbox.id}
            onClick={() => changeCheckboxSelected(checkbox)}
          >
            <Checkbox
              className={selected[checkbox.value]?.checked && "selected"}
            >
              <FilterCheckboxIcon />
            </Checkbox>
            <FilterCheckboxName>{checkbox.title}</FilterCheckboxName>
          </FilterCheckboxItem>
        ))}
      </FilterContainer>
    </Filter>
  );
}

// Styled Components
const Filter = styled.div`
  padding-bottom: 20px;
  display: grid;
  row-gap: 12px;
  &:last-child {
    /* padding-bottom: 0; */
  }
`;

const FilterTitle = styled.div`
  display: inline-flex;
  color: var(--gray-5);
  font-size: var(--small-font-size);
`;

const Checkbox = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid var(--gray-4);
  border-radius: var(--border-radius-small);
  transition: background-color 0.25s, border-color 0.25s;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  &.selected {
    background-color: var(--brand-color);
    border-color: var(--brand-color);
  }
`;

const FilterCheckboxItem = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  &:hover > ${FilterCheckbox} {
    border-color: var(--brand-color);
  }
`;

const FilterCheckboxIcon = styled(CheckedSvg)`
  width: 14px;
  height: 10px;
  fill: var(--gray-0);
`;

const FilterCheckboxName = styled.span`
  padding-left: 8px;
  font-weight: 600;
  user-select: none;
  color: var(--gray-8);
`;
