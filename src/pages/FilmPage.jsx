import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import FilmGenres from '../components/Film/Genres';
import FilmTitle from '../components/Film/Title';
import Poster from '../components/Poster';
import FilmRating from '../components/Film/Rating';
import FilmDatepicker from '../components/Film/Datepicker';

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
            <div className="film-filters"></div>
          </FilmOptions>
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
`;

const FilmTrailer = styled.div`
  padding: 20px;
  background-color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilmInfo = styled.div``;

const PosterImage = styled.div``;

const FilmContent = styled.div``;

const FilmOptions = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  background-color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--box-shadow);
`;
