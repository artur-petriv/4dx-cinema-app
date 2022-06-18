import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import { Context } from "../..";
import FilterCheckboxList from "./FilterCheckboxList";
import FilterRadioList from "./FilterRadioList";
import FilterSelect from "./FilterSelect";
import FilterSkeleton from "./FilterSkeleton";

const Filter = observer(({ title, type, items, className }) => {
  const { films } = React.useContext(Context);

  let FilterType = (
    <FilterSelect
      items={items}
      className={className}
      setSelect={(value) => films.setSortSelected(value)}
    />
  );

  if (type === "checkbox")
    FilterType = (
      <FilterCheckboxList items={items} title={title} className={className} />
    );
  if (type === "radio")
    FilterType = <FilterRadioList items={items} className={className} />;

  return (
    <FilterWrap className={className}>
      {items.length === 0 ? (
        <FilterSkeleton type={type} />
      ) : (
        <>
          <FilterTitle>{title}</FilterTitle>
          {FilterType}
        </>
      )}
    </FilterWrap>
  );
});

// Styled Components
const FilterWrap = styled.div`
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

export default Filter;
