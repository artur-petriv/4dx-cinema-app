import React from "react";
import styled from "styled-components";
import Filter from "./../Filter";

const FiltersData = [
  {
    name: "Сортировка",
    type: "select",
    options: [
      { name: "По рейтингу", value: "rating" },
      { name: "По новизне", value: "new" },
      { name: "По длительности", value: "duration" },
    ],
  },
  {
    name: "Формат",
    type: "checkbox",
    options: [
      { name: "2D", value: "2D" },
      { name: "3D", value: "3D" },
    ],
  },
  {
    name: "Жанры",
    type: "checkbox",
    options: [
      { name: "Боевик", value: "action" },
      { name: "Драма", value: "drama" },
      { name: "Романтика", value: "romance" },
      { name: "Триллер", value: "thriller" },
      { name: "Ужасы", value: "horror" },
      { name: "Фентези", value: "fantasy" },
    ],
  },
  {
    name: "Возраст",
    type: "radio",
    options: [
      { name: "0+", value: 0 },
      { name: "12+", value: 12 },
      { name: "16+", value: 16 },
      { name: "18+", value: 18 },
    ],
  },
];

export default function index() {
  return (
    <HomeSidebar>
      {FiltersData.map((filter, index) => (
        <Filter
          key={`${filter.type}_${index}`}
          title={filter.name}
          type={filter.type}
          items={filter.options}
        />
      ))}
    </HomeSidebar>
  );
}

// Stled Components
const HomeSidebar = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  grid-area: sidebar;
  background-color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--box-shadow);
`;
