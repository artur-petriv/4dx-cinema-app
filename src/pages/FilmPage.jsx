import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
import FilmGenres from "../components/Film/Genres";
import FilmTitle from "../components/Film/Title";
import Poster from "../components/Poster";
import FilmRating from "../components/Film/Rating";

export default function Film() {
  return (
    <FilmSection>
      <FilmContainer>
        <FilmHead>
          <FilmCard>
            <Poster imageUrl="https://noar.pp.ua/4dx/img/card.jpg" />
            <FilmInfo>
              <FilmTitle name="Веном 2" />
              <FilmGenres />
              <FilmRating />
            </FilmInfo>
          </FilmCard>
          <FilmTrailer></FilmTrailer>
        </FilmHead>
      </FilmContainer>
    </FilmSection>
  );
}

// Styled Components
const FilmSection = styled.section``;

const FilmContainer = styled(Container)`
  grid-template-columns: none;
`;

const FilmHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`;

const FilmCard = styled.div`
  padding: 20px;
  background-color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  min-height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  `;

const FilmTrailer = styled.div`
  background-color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  min-height: 100px;
`;

const FilmInfo = styled.div``;

const PosterImage = styled.div``;