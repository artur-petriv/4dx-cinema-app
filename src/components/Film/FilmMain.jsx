import React from "react";
import FilmTicket from "./Ticket";
import FilmHall from "./Hall";
import Container from "../Container";
import styled from "styled-components";

export default function FilmMainIndex() {
  return (
    <FilmMain>
      <FilmTicket />
      <FilmHall />
    </FilmMain>
  );
}

const FilmMain = styled(Container)`
  display: grid;
  grid-template-areas: "ticket ticket ticket hall hall hall hall hall hall hall hall hall";
  gap: 32px;
`;
