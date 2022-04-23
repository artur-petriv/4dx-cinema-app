import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import { Context } from "../..";
import PaginationButton from "./PaginationButton";

const Pagination = observer(() => {
  const { films } = React.useContext(Context);
  // const [pages, setPages] = React.useState([]);

  const pageCount = Math.ceil(films.totalCount / films.limit);
  const arr = [];

  for (let i = 0; i < pageCount; i++) {
    arr.push(i + 1);
  }

  console.log(films.totalCount);
  console.log(films.limit);

  return (
    <PaginationList>
      {arr.length > 1 &&
        arr.map((page) => (
          <PaginationButton
            key={page}
            page={page}
            selected={films.page === page}
            onClick={() => films.setPage(page)}
          />
        ))}
    </PaginationList>
  );
});

const PaginationList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export default Pagination;
