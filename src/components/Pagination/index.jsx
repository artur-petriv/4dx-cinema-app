import React from "react";
import styled from "styled-components";
import { Context } from "../..";
import PaginationButton from "./PaginationButton";

const pagesListData = [{ page: 1, selected: true }, { page: 2 }, { page: 3 }];

export default function Pagination() {
  const { films } = React.useContext(Context);

  const pageCount = Math.ceil(films.totalCount / films.limit);

  return (
    <PaginationList>
      {pagesListData.map((page) => (
        <PaginationButton key={page.page} page={page} />
      ))}
    </PaginationList>
  );
}

const PaginationList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
