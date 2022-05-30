import React from "react";
import styled from "styled-components";
import { fetchHallRows, fetchTickets } from "../../http/filmAPI";
import ScreenSvg from "../../svg/ScreenSvg";
import Seat from "../Seat";

export default function FilmHall({ formats, sessionId }) {
  const [rows, setRows] = React.useState({});
  const [places, setPlaces] = React.useState({});
  const [placesSelected, setPlacesSelected] = React.useState([]);

  React.useEffect(() => {
    fetchHallRows().then((data) => {
      const k = {};

      data.forEach(({ id, row, places }) => {
        k[row] = [];
        Array(places)
          .fill()
          .forEach((n, index) => {
            const place = index + 1;
            k[row] = [
              ...k[row],
              { place, hallRowId: id, row: row, status: "available" },
            ];
          });
      });

      setRows(k);
    });
  }, []);

  React.useEffect(() => {
    if (Object.keys(rows).length === 0) return;

    fetchTickets(sessionId).then((data) => {
      const ok = { ...rows };

      data?.forEach((place) => {
        ok[place.hall_row.row] = ok[place.hall_row.row]?.map((item) =>
          place.place === item.place
            ? {
                ...item,
                status: place.status,
              }
            : item
        );
      });

      setPlaces(ok);
    });
  }, [rows, sessionId]);

  const onPlaceSelect = (row, hallRowId, place) => {
    const currentPlaces = { ...places };

    // Change or toggle place status in "places" state object
    currentPlaces[row] = currentPlaces[row]?.map((item) =>
      place === item.place
        ? {
            ...item,
            status: item?.status === "selected" ? "available" : "selected",
          }
        : item
    );

    // Check if "hallRowId" and "place" already exists in "placesSelected" state
    const isPlaceSelected = placesSelected.some(
      (item) => item.hallRowId === hallRowId && item.place === place
    );

    // Remove object if place already exists or add new one
    const newPlacesSelected = isPlaceSelected
      ? placesSelected.filter((item) => {
          if (item.hallRowId === hallRowId) {
            if (item.place === place) return false;
            return true;
          }
          return true;
        })
      : [...placesSelected, { hallRowId, place }];

    setPlaces(currentPlaces);
    setPlacesSelected(newPlacesSelected);
  };

  return (
    <FilmHallContainer>
      <Screen>
        <ScreenIcon />
        <ScreenTitle>Екран</ScreenTitle>
      </Screen>
      <Seats>
        {Object.keys(places)?.map((row) => (
          <Row key={row}>
            <RowTitle>{row}</RowTitle>
            <RowContent>
              {places[row]?.map(({ place, status, hallRowId, row }) => (
                <Seat
                  key={place}
                  place={place}
                  hallRowId={hallRowId}
                  status={status}
                  row={row}
                  onClickPlace={onPlaceSelect}
                />
              ))}
            </RowContent>
            <RowTitle>{row}</RowTitle>
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
