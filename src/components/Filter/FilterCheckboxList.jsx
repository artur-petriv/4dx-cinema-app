import React from "react";
import styled from "styled-components";
import CheckedSvg from "./../../svg/CheckedSvg";
import FilterContainer from "./FilterContainer";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const FilterCheckboxList = ({ items, title }) => {
  const { films } = React.useContext(Context);

  React.useEffect(() => {
    // TODO: Rework
    if (items.length === 0) {
      return;
    }

    if (title && title === "Формат") {
      if (
        films.formatsSelected &&
        Object.keys(films.formatsSelected).length === 0 &&
        films.formatsSelected.constructor === Object
      )
        films.setFormatsSelected(
          items?.reduce((acc, cur) => ({ [cur.value]: false })),
          {}
        );
    }

    if (title && title === "Жанры") {
      if (
        films.genresSelected &&
        Object.keys(films.genresSelected).length === 0 &&
        films.genresSelected.constructor === Object
      )
        films.setGenresSelected(
          items?.reduce((acc, cur) => ({ [cur.id]: false })),
          {}
        );
    }
  }, []);

  function handleCheckboxClick(id) {
    if (title === "Формат")
      films.setFormatsSelected({
        ...films.formatsSelected,
        [id]: !films.formatsSelected[id],
      });

    if (title === "Жанры")
      films.setGenresSelected({
        ...films.genresSelected,
        [id]: !films.genresSelected[id],
      });
  }

  if (!title || items.length === 0) return null;

  return (
    <FilterContainer>
      {items.length === 0
        ? ""
        : items?.map((checkbox) => (
            <FilterCheckboxItem
              key={checkbox.id}
              onClick={() => handleCheckboxClick(checkbox.id)}
            >
              <FilterCheckbox
                className={
                  title === "Формат"
                    ? films.formatsSelected[checkbox.id]
                      ? "selected"
                      : ""
                    : films.genresSelected[checkbox.id]
                    ? "selected"
                    : ""
                }
              >
                <FilterCheckboxIcon />
              </FilterCheckbox>
              <FilterCheckboxName>{checkbox.title}</FilterCheckboxName>
            </FilterCheckboxItem>
          ))}
    </FilterContainer>
  );
};

// Styled Components
const FilterCheckbox = styled.div`
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

export default observer(FilterCheckboxList);
