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
import { useParams } from 'react-router-dom';
import { fetchOneFilm } from '../http/filmAPI';

const FiltersData = [
  {
    name: 'Формат',
    type: 'select',
    options: [
      { name: '2D', value: '2d' },
      { name: '3D', value: '3d' },
      { name: '4DX', value: '4dx' },
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
  const { id } = useParams();
  const [film, setFilm] = React.useState({});

  React.useEffect(() => {
    fetchOneFilm(id).then((data) => setFilm(data));
  }, []);

  return (
    <FilmSection>
      <FilmContainer>
        <FilmHead>
          <FilmCard>
            <Poster imageUrl={film.img} />
            <FilmInfo>
              <FilmTitle name={film.name} />
              <FilmGenres />
              <div style={{ marginTop: '8px' }}>
                <strong>Рік:</strong> 2022
              </div>
              <div style={{ marginTop: '8px' }}>
                <strong>Країна:</strong> США
              </div>
              <div style={{ marginTop: '8px' }}>
                <strong>Мова:</strong> Український (дубляж)
              </div>
              <div style={{ marginTop: '8px' }}>
                <strong>Тривалість:</strong> 128 хв.
              </div>
              <div style={{ marginTop: '8px' }}>
                <strong>Вікове обмеження:</strong> 16+
              </div>
              <div style={{ marginTop: '8px' }}>
                <strong>Прокат:</strong> з 20 червня до 16 липня
              </div>
              <FilmRating rating={film.rating} />
            </FilmInfo>
          </FilmCard>
          <FilmTrailer>
            <iframe
              style={{
                width: '100%',
                height: '360px',
                borderRadius: 'var(--border-radius-medium)',
              }}
              src={film.trailer}
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
                <FilterStyled
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
