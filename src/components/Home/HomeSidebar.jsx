import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import { Context } from "../..";
import Filter from "./../Filter";

const HomeSidebar = observer(() => {
  const { films } = React.useContext(Context);

  return (
    <HomeSidebar2>
      <Filter
        title="Сортировка"
        type="select"
        selectedSort={films.sortSelected}
        items={films.sort}
      />
      <Filter title="Формат" type="checkbox" items={films.formats} />
      <Filter title="Возраст" type="radio" items={films.ageLimitations} />
    </HomeSidebar2>
  );
});

// Stled Components
const HomeSidebar2 = styled.div`
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