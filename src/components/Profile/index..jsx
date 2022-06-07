import React from "react";
import styled from "styled-components";
import FilterSelect from "../Filter/FilterSelect";
import ArrowDropdownSvg from "../../svg/ArrowDropdownSvg";
import FilterSelectList from "../Filter/FilterSelectList";

const menu = [
  { id: 1, name: "Мої квитки", value: "my-tickets" },
  { id: 2, name: "Вихід", value: "quit" },
];

export default function ProfileIndex({ className }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [selected, setSelected] = React.useState("");

  function toggleList() {
    setIsVisible(!isVisible);
  }

  return (
    <FilterContainer className={className}>
      <FilterSelectWrap onClick={toggleList}>
        Артур
        <Avatar />
        <DropdownArrow className={`${isVisible ? "active" : ""}`} />
      </FilterSelectWrap>

      {isVisible && (
        <FilterSelectList
          items={menu}
          isVisible={isVisible}
          toggleVisibility={toggleList}
        />
      )}
    </FilterContainer>
  );
}

// Styled Components
const FilterContainer = styled.div`
  position: relative;
`;

const FilterSelectWrap = styled.div`
  padding: 8px 16px;
  min-width: 120px;
  /* background-color: var(--gray-1); */
  border-radius: var(--border-radius-medium);
  color: var(--gray-8);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  user-select: none;
  transition: background-color 0.25s;
  line-height: 1.35;
  &:hover {
    background-color: var(--gray-1);
  }
  &:active {
    background-color: var(--gray-2);
  }
`;

const DropdownArrow = styled(ArrowDropdownSvg)`
  margin-left: 12px;
  width: 12px;
  height: 6px;
  transition: transform 0.25s;
  transform: rotate(0);
  &.active {
    transform: rotate(180deg);
  }
`;

const Avatar = styled.div`
  margin-left: 8px;
  height: 28px;
  width: 28px;
  background-color: var(--gray-3);
  border-radius: 50%;
`;
