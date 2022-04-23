import React from "react";
import styled from "styled-components";
import { Context } from "../..";
import FilterContainer from "./FilterContainer";

// TODO: Rework

export default function FilterRadioList({ items }) {
  const [radioButton, setRadioButton] = React.useState("");
  const { films } = React.useContext(Context);

  function handleRadioClick(value) {
    if (radioButton === value) return;

    films.setAgeLimitationSelected(value);
    setRadioButton(value);
  }

  React.useEffect(() => {
    if (films.ageLimitationSelected) {
      setRadioButton(films.ageLimitationSelected);
    }
  }, []);

  return (
    <FilterContainer>
      <FilterRadioItem onClick={() => handleRadioClick("")}>
        <FilterRadioButton
          className={radioButton === "" ? "selected" : ""}
        ></FilterRadioButton>
        <FilterRadioName>Все</FilterRadioName>
      </FilterRadioItem>
      {items?.map((radio) => (
        <FilterRadioItem
          onClick={() => handleRadioClick(radio.value)}
          key={radio.value}
        >
          <FilterRadioButton
            className={radioButton === radio.value ? "selected" : ""}
          ></FilterRadioButton>
          <FilterRadioName>{radio.title}</FilterRadioName>
        </FilterRadioItem>
      ))}
    </FilterContainer>
  );
}

// Styled Components
const FilterRadioButton = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid var(--gray-4);
  border-radius: 50%;
  position: relative;
  transition: 0.25s;
  &.selected {
    border-color: var(--brand-color);
    // border-width: 2px;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      height: 12px;
      width: 12px;
      background-color: var(--brand-color);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const FilterRadioItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &:hover > ${FilterRadioButton} {
    border-color: var(--brand-color);
  }
`;

const FilterRadioName = styled.span`
  padding-left: 8px;
  font-weight: 600;
  color: var(--gray-8);
`;
