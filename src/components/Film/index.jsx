import React from "react";
import styled from "styled-components";
import FilmGenres from "./Genres";
import FilmRating from "./Rating";
import FilmDatepicker from "./Datepicker";
import FilmTicket from "./Ticket";
import FilmHall from "./Hall";
import FilmGenre from "./Genre";
import Container from "../Container";
import Filter from "../Filter";
import Poster from "../Poster";

const FiltersData = [
  {
    id: 1,
    name: "Формат",
    type: "select",
    options: [
      { id: 1, name: "2D", value: "2d" },
      { id: 2, name: "3D", value: "3d" },
      { id: 3, name: "4DX", value: "4dx" },
    ],
  },
  {
    id: 2,
    name: "Время",
    type: "select",
    options: [
      { id: 1, name: "11:45", value: "11:45" },
      { id: 2, name: "13:00", value: "13:00" },
      { id: 3, name: "17:45", value: "17:45" },
    ],
  },
];

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
              <FilmGenre title="Рік" text="2022" />
              <FilmGenre title="Країна" text="США" />
              <FilmGenre title="Мова" text="Український (дубляж)" />
              <FilmGenre title="Тривалість" text="128 хв." />
              <FilmGenre title="Рік" text="2022" />
              <FilmGenre title="Вікове обмеження" text="16+" />
              <FilmGenre title="Прокат" text="з 20 червня до 16 липня" />
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

        <FilmContent>
          <FilmOptions>
            <FilmDatepicker />
            <FilmFilters>
              {FiltersData.map((filter) => (
                <FilterStyled
                  key={filter.id}
                  title={filter.name}
                  type={filter.type}
                  items={filter.options}
                />
              ))}
            </FilmFilters>
          </FilmOptions>

          <FilmMain>
            <FilmTicket />
            <FilmHall />
          </FilmMain>
        </FilmContent>
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

const FilmMain = styled(Container)`
  display: grid;
  grid-template-areas: "ticket ticket ticket hall hall hall hall hall hall hall hall hall";
  gap: 32px;
`;

const FilmContent = styled.div`
  display: grid;
  gap: 32px;
`;

const FilmFilters = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const FilterStyled = styled(Filter)`
  padding: 0;
  border: 0;
  row-gap: 8px;
`;

const FilmOptions = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  background-color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--box-shadow);
`;
