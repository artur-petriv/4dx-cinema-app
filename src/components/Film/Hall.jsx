import React from "react";
import styled from "styled-components";
import { fetchHallRows, fetchTickets } from "../../http/filmAPI";
import ScreenSvg from "../../svg/ScreenSvg";
import Seat from "../Seat";

export default function FilmHall({ formats }) {
  const [rows, setRows] = React.useState([]);
  const [tickets, setTickets] = React.useState([]);
  const sessionId = 1;

  React.useEffect(() => {
    fetchHallRows().then((data) => setRows(data));
  }, []);

  React.useEffect(() => {
    fetchTickets(sessionId).then((data) => setTickets(data));
  }, [formats]);

  return (
    <FilmHallContainer>
      <Screen>
        <ScreenIcon />
        <ScreenTitle>Экран</ScreenTitle>
      </Screen>

      <Seats>
        {rows?.map((row) => (
          <Row key={row.id}>
            <RowTitle>{row.row}</RowTitle>
            <RowContent>
              {new Array(row.places).fill().map((n, i) => (
                <Seat key={i} number={i} available />
              ))}
            </RowContent>
            <RowTitle>A</RowTitle>
          </Row>
        ))}
      </Seats>
    </FilmHallContainer>
  );
}

// Styled Components
const FilmHallContainer = styled.div`
  padding: 28px 24px;
  border-radius: var(--border-radius-large);
  background-color: var(--gray-0);
  box-shadow: var(--box-shadow);
  grid-area: hall;
  text-align: center;
  display: grid;
  gap: 60px;
`;

const Screen = styled.div``;

const Seats = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  /* justify-content: center; */
  gap: 24px;
`;

const RowTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;

  &:last-child {
    justify-content: flex-end;
  }
`;

const Row = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
`;

const RowContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const ScreenIcon = styled(ScreenSvg)`
  width: 100%;
  stroke: var(--brand-color);
`;

const ScreenTitle = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  color: var(--gray-4);
  font-size: 16px;
  line-height: 1;
`;
