import React from "react";
import FilmTicket from "./Ticket";
import FilmHall from "./Hall";
import Container from "../Container";
import styled from "styled-components";

export default function FilmMainIndex({
  film,
  sessionId,
  formatSelected,
  timeSelected,
}) {
  const [placesSelected, setPlacesSelected] = React.useState([]);

  console.log("================================");
  console.log("FilmMainIndex render");

  return (
    <FilmMain>
      <FilmTicket
        placesSelected={placesSelected}
        formatSelected={formatSelected}
        timeSelected={timeSelected}
        film={film}
      />
      <FilmHall
        sessionId={sessionId}
        price={timeSelected.price}
        setPlacesSelected={setPlacesSelected}
        placesSelected={placesSelected}
      />
    </FilmMain>
  );
}

const FilmMain = styled(Container)`
  display: grid;
  grid-template-areas: "ticket ticket ticket hall hall hall hall hall hall hall hall hall";
  gap: 32px;
`;
