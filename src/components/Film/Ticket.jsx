import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Label from "../Label";

export default function FilmTicket() {
  return (
    <FilmTicketContainer>
      <FilmTicketCard>
        <Row>
          <Label title="Сеанс" text="Веном 2" />
          <Label title="Формат" text="2D" />
        </Row>
        <Row>
          <Label title="Дата" text="15.11.21" />
          <Label title="Час" text="11:30" />
        </Row>
        <Row>
          <Label title="Місця" text="" />
        </Row>

        <Total>
          <TotalName>Всього</TotalName>
          <TotalPrice>300 грн</TotalPrice>
        </Total>
      </FilmTicketCard>

      <Button>Оформити</Button>
    </FilmTicketContainer>
  );
}

// Styled Components
const FilmTicketContainer = styled.div`
  grid-area: ticket;
  display: grid;
  gap: 24px;
`;

const Row = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex: 1;
  border-top: 1px solid var(--gray-1);

  &:first-child {
    padding: 0 0 16px;
    border-top: 0;
  }

  & > *:nth-child(2) {
    text-align: right;
  }
`;

const FilmTicketCard = styled.div`
  padding: 28px 24px;
  display: grid;
  background-color: var(--gray-0);
  border-radius: var(--border-radius-large);
  box-shadow: var(--box-shadow);
`;

const Total = styled.div`
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px dashed var(--gray-1);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  color: var(--gray-8);
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
`;

const TotalName = styled.div``;

const TotalPrice = styled.div``;
