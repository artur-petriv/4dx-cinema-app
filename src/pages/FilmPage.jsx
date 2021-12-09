import React from "react";
import styled from "styled-components";
import Container from "../components/Container";

export default function Film() {
  return (
    <FilmSection>
      <FilmContainer></FilmContainer>
    </FilmSection>
  );
}

// Styled Components
const FilmSection = styled.section``;

const FilmContainer = styled(Container)``;
