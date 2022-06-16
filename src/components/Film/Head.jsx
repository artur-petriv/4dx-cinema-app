import React from "react";
import styled from "styled-components";
import FilmCard from "./FilmCard";
import FilmTrailer from "./Trailer";

const Head = () => {
  return (
    <FilmHead>
      <FilmCard />
      <FilmTrailer />
    </FilmHead>
  );
};

// Styled Components
const FilmHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`;

export default Head;
