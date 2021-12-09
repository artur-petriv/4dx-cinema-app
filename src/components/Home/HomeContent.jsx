import React from "react";
import styled from "styled-components";
import Pagination from "../Pagination";
import Card from "./../Card";

export default function HomeContent() {
  return (
    <Content>
      <CardsList>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsList>
      <Pagination />
    </Content>
  );
}

// Styled Components
const Content = styled.div`
  border-radius: var(--border-radius-medium);
  grid-area: content;
  display: grid;
  grid-template-rows: 1fr auto;
  row-gap: 20px;
`;

const CardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;
