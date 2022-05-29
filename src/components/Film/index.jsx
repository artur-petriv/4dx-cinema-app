import React from "react";
import styled from "styled-components";
import FilmGenres from "./Genres";
import FilmRating from "./Rating";
import FilmGenre from "./Genre";
import Container from "../Container";
import Poster from "../Poster";
import FilmContent from "./Content";

export default function FilmIndex({ film }) {
  return (
    <FilmSection>
      <FilmContainer>
        <FilmHead>
          <FilmCard>
            <Poster imageUrl={film.img} />
            <FilmInfo>
              <FilmTitle>{film.name}</FilmTitle>
              <FilmGenres />
              <FilmGenre title="Рік" text={film.year} />
              <FilmGenre title="Країна" text={film.country} />
              <FilmGenre title="Мова" text={film.language} />
              <FilmGenre title="Тривалість" text={film.duration} />
              <FilmGenre
                title="Вікове обмеження"
                text={film?.age_limitation?.name}
              />
              {/* <FilmGenre title="Прокат" text="з 20 червня до 16 липня" /> */}
              <FilmRating rating={film.rating} />
            </FilmInfo>
          </FilmCard>
          <FilmTrailer>
            <iframe
              style={{
                width: "100%",
                height: "360px",
                borderRadius: "var(--border-radius-medium)",
              }}
              src={film.trailer}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            ></iframe>
          </FilmTrailer>
        </FilmHead>

        <FilmContent film={film} />
      </FilmContainer>
    </FilmSection>
  );
}

const FilmTitle = styled.h3`
  margin-bottom: 16px;
  color: var(--gray-8);
  font-size: var(--h5-font-size);
  line-height: var(--line-normal);
`;

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
  grid-template-columns: 1fr 1.2fr;
  gap: 20px;
  box-shadow: var(--box-shadow);
`;

const FilmTrailer = styled.div`
  padding: 20px;
  background-color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--box-shadow);
`;

const FilmInfo = styled.div``;

const PosterImage = styled.div``;
