import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import FilmGenres from '../components/Film/Genres';
import FilmTitle from '../components/Film/Title';
import Poster from '../components/Poster';
import FilmRating from '../components/Film/Rating';
import FilmDatepicker from '../components/Film/Datepicker';
import Filter from '../components/Filter';
import FilmTicket from '../components/Film/Ticket';
import FilmHall from '../components/Film/Hall';

const FiltersData = [
  {
    name: 'Формат',
    type: 'select',
    options: [
      { name: '4DX', value: '4dx' },
      { name: '3D', value: '3d' },
      { name: '2D', value: '2d' },
    ],
  },
  {
    name: 'Время',
    type: 'select',
    options: [
      { name: '11:45', value: '11:45' },
      { name: '13:00', value: '13:00' },
      { name: '17:45', value: '17:45' },
    ],
  },
];

export default function Film() {
  return (
    <FilmSection>
      <FilmContainer>
        <FilmHead>
          <FilmCard>
            <Poster imageUrl="https://razborkatesla.com.ua/o/card.jpg" />
            <FilmInfo>
              <FilmTitle name="Веном 2" />
              <FilmGenres />
              <FilmRating />
            </FilmInfo>
          </FilmCard>
          <FilmTrailer>
            <iframe
              style={{
                width: '100%',
                height: '360px',
                borderRadius: 'var(--border-radius-medium)',
              }}
              src="https://www.youtube.com/embed/Othd8W8o3t0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen></iframe>
          </FilmTrailer>
        </FilmHead>

        <FilmContent>
          <FilmOptions>
            <FilmDatepicker />
            <FilmFilters>
              {FiltersData.map((filter, index) => (
                <Filter
                  key={`${filter.type}_${index}`}
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

const FilmMain = styled.div`
  display: grid;
  grid-template-areas: 'ticket ticket ticket hall hall hall hall hall hall hall hall hall';
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

const FilmOptions = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  background-color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--box-shadow);
`;
