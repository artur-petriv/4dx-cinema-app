import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import { Context } from "../..";
import { createTickets } from "../../http/ticketsAPI";
import { convertDateToDDMMYY } from "../../utils/dateConvertor";
import Button from "../Button";
import Label from "../Label";

const FilmTicket = observer(() => {
  const {
    session,
    film: { film },
  } = React.useContext(Context);

  const totalPrice =
    session.placesSelected?.length * session.timeSelected?.price || 0;

  const onSubmitTickets = () => {
    createTickets(session.placesSelected, session.session.id).then(() => {
      // Change state for purchased places to "sold" and clear "placesSelected"
      const hallPlaces = { ...session.hallPlaces };

      session.placesSelected.forEach(
        (place) =>
          (hallPlaces[place.row] = hallPlaces[place.row]?.map((item) =>
            place.place === item.place ? { ...item, status: "sold" } : item
          ))
      );

      session.setHallPlaces(hallPlaces);
      session.setPlacesSelected([]);
    });
  };

  return (
    <FilmTicketContainer>
      <FilmTicketCard>
        <Row>
          <Label loading={session.loading} title="Сеанс" text={film.name} />
          <Label
            loading={session.loading}
            title="Формат"
            text={session.formatSelected.name}
          />
        </Row>
        <Row>
          <Label
            loading={session.loading}
            title="Дата"
            text={
              session.timeSelected.date &&
              convertDateToDDMMYY(session.timeSelected.date)
            }
          />
          <Label
            loading={session.loading}
            title="Година"
            text={session.timeSelected.name}
          />
        </Row>
        <Row>
          <Label
            loading={session.loading}
            title="Місця"
            text={session.placesSelected
              ?.map(({ row, place }) => row + place)
              ?.join(", ")}
          />
        </Row>

        <Total>
          <TotalName>Всього</TotalName>
          <TotalPrice>{totalPrice + " грн"}</TotalPrice>
        </Total>
      </FilmTicketCard>

      {session.placesSelected.length > 0 ? (
        <SubmitButton onClick={onSubmitTickets}>Оформити</SubmitButton>
      ) : (
        <SubmitButton className="disabled">Місця не вибрано</SubmitButton>
      )}
    </FilmTicketContainer>
  );
});

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
  gap: 16px;

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

export default FilmTicket;
