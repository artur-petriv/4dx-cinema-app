import React from "react";
import styled from "styled-components";
import FilmRating from "./Rating";
import Text from "./Text";
import Container from "../Container";
import Poster from "../Poster";
import FilmContent from "./Content";
import Trailer from "./Trailer";

export default function FilmIndex({ film }) {
  return (
    <FilmSection>
      <FilmContainer>
        <FilmHead>
          <FilmCard>
            <Poster imageUrl={film.img} />
            <FilmInfo>
              <FilmTitle>{film.name}</FilmTitle>
              <TextInfo>
                <Text
                  title="Жанри"
                  text={film.genres
                    ?.map((genre) => genre.name)
                    .join(", ")
                    .toLowerCase()}
                />
                <Text title="Рік" text={film.year} />
                <Text title="Країна" text={film.country} />
                <Text title="Мова" text={film.language} />
                <Text title="Тривалість" text={film.duration} />
                <Text
                  title="Вікове обмеження"
                  text={film?.age_limitation?.name}
                />
              </TextInfo>
              <FilmRating rating={film.rating} />
            </FilmInfo>
          </FilmCard>
          <Trailer trailerUrl={film.trailer} />
        </FilmHead>

        <FilmContent film={film} />
      </FilmContainer>
    </FilmSection>
  );
}

const FilmTitle = styled.h3`
  /* margin-bottom: 16px; */
  padding-bottom: 8px;
  color: var(--gray-8);
  font-size: var(--h5-font-size);
  line-height: var(--line-normal);
  border-bottom: 1px solid var(--gray-1);
  font-weight: var(--font-bold);
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

const FilmInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;
