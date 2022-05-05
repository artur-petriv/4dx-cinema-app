import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import { Context } from "../..";
import Filter from "./../Filter";

const HomeSidebar = observer(() => {
  const { films } = React.useContext(Context);

  // TODO: Rework
  return (
    <Sidebar>
      <Filter title="Сортировка" type="select" items={films.sort} />
      <Filter title="Формат" type="checkbox" items={films.formats} />
      <Filter title="Возраст" type="radio" items={films.ageLimitations} />
      <Filter title="Жанры" type="checkbox" items={films.genres} />
    </Sidebar>
  );
});

// Stled Components
const Sidebar = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  grid-area: sidebar;
  background-color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--box-shadow);
`;

export default HomeSidebar;
