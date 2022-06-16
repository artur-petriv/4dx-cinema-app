import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import { Context } from "../..";
import { fetchHallRows } from "../../http/filmAPI";
import { fetchTickets } from "../../http/ticketsAPI";
import ScreenSvg from "../../svg/ScreenSvg";
import Seat from "../Seat";

const FilmHall = observer(() => {
  const [rows, setRows] = React.useState({});
  const { session } = React.useContext(Context);

  React.useEffect(() => {
    // Fetch all the rows and places for hall
    fetchHallRows().then((data) => {
      const newRows = {};

      data.forEach(({ id, row, places }) => {
        newRows[row] = [];
        Array(places)
          .fill()
          .forEach((n, index) => {
            const place = index + 1;
            newRows[row] = [
              ...newRows[row],
              { place, hallRowId: id, row: row, status: "available" },
            ];
          });
      });

      setRows(newRows);
    });
  }, []);

  React.useEffect(() => {
    if (Object.keys(rows).length === 0) return;

    // Fetch tickets for new session
    fetchTickets(session.session.id).then((data) => {
      const newRows = { ...rows };

      data?.forEach((place) => {
        newRows[place.hall_row.row] = newRows[place.hall_row.row]?.map((item) =>
          place.place === item.place
            ? {
                ...item,
                status: place.status,
              }
            : item
        );
      });

      session.setPlacesSelected([]);
      session.setHallPlaces(newRows);
    });
  }, [session.session.id]);

  const onPlaceSelect = (row, hallRowId, place) => {
    const currentPlaces = { ...session.hallPlaces };

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
    const isPlaceSelected = session.placesSelected.some(
      (item) => item.hallRowId === hallRowId && item.place === place
    );

    // Remove object if place already exists or add new one
    const newPlacesSelected = isPlaceSelected
      ? session.placesSelected.filter((item) => {
          if (item.hallRowId === hallRowId) {
            if (item.place === place) return false;
            return true;
          }
          return true;
        })
      : [...session.placesSelected, { hallRowId, row, place }];

    // Sort places by rowId and places like ASC sorting
    const sortedPlacesSelected = newPlacesSelected.sort((a, b) => {
      if (a.hallRowId - b.hallRowId > 0) return 1;
      if (a.hallRowId - b.hallRowId < 0) return -1;
      return a.place - b.place;
    });

    session.setHallPlaces(currentPlaces);
    session.setPlacesSelected(sortedPlacesSelected);
  };

  return (
    <FilmHallContainer>
      <Screen>
        <ScreenIcon />
        <ScreenTitle>Екран</ScreenTitle>
      </Screen>
      <Seats>
        {Object.keys(session.hallPlaces)?.map((row) => (
          <Row key={row}>
            <RowTitle>{row}</RowTitle>
            <RowContent>
              {session.hallPlaces[row]?.map(
                ({ place, status, hallRowId, row }) => (
                  <Seat
                    key={place}
                    place={place}
                    hallRowId={hallRowId}
                    status={status}
                    row={row}
                    onClickPlace={onPlaceSelect}
                  />
                )
              )}
            </RowContent>
            <RowTitle>{row}</RowTitle>
          </Row>
        ))}
      </Seats>
    </FilmHallContainer>
  );
});

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

export default FilmHall;
