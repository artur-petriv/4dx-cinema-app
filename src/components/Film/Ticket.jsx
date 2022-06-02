import React from "react";
import styled from "styled-components";
import { createTickets } from "../../http/ticketsAPI";
import { converDateToDDMMYY } from "../../utils/dateConvertor";
import Button from "../Button";
import Label from "../Label";

export default function FilmTicket({
  film,
  placesSelected,
  formatSelected,
  timeSelected,
}) {
  const onSubmitTickets = () => {
    createTickets(placesSelected, timeSelected.sessionId).then((tickets) =>
      console.log("tickets", tickets)
    );
  };

  return (
    <FilmTicketContainer>
      <FilmTicketCard>
        <Row>
          <Label title="Сеанс" text={film.name} />
          <Label title="Формат" text={formatSelected.name} />
        </Row>
        <Row>
          <Label title="Дата" text={converDateToDDMMYY(timeSelected.date)} />
          <Label title="Година" text={timeSelected.name} />
        </Row>
        <Row>
          <Label
            title="Місця"
            text={placesSelected
              .map(({ row, place }) => row + place)
              .join(", ")}
          />
        </Row>

        <Total>
          <TotalName>Всього</TotalName>
          <TotalPrice>
            {placesSelected.length * timeSelected.price + " грн"}
          </TotalPrice>
        </Total>
      </FilmTicketCard>

      {placesSelected.length > 0 ? (
        <SubmitButton onClick={onSubmitTickets}>Оформити</SubmitButton>
      ) : (
        <SubmitButton className="disabled">Місця не вибрано</SubmitButton>
      )}
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

const SubmitButton = styled(Button)`
  user-select: none;
  &.disabled {
    background-color: var(--gray-5);
    cursor: default;
    pointer-events: none;
  }
`;
