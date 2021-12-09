import React from "react";
import styled from "styled-components";
import PaginationButton from "./PaginationButton";

const pagesListData = [{ page: 1, selected: true }, { page: 2 }, { page: 3 }];

export default function index() {
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
