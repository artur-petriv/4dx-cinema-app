import React from 'react';
import styled from 'styled-components';
import HomeContent from './HomeContent';
import HomeSidebar from './HomeSidebar';
import Container from './../Container';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import {
  fetchAgeLimitations,
  fetchFilms,
  fetchFormats,
  fetchGenres,
  fetchSort,
} from '../../http/filmAPI';

const initialSort = [
  {
    id: 1,
    name: 'По рейтингу',
    value: 'rating',
  },
  {
    id: 2,
    name: 'По новизні',
    value: 'new',
  },
  {
    id: 3,
    name: 'По тривалості',
    value: 'duration',
  },
];

const Home = observer(() => {
  const { films } = React.useContext(Context);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      // fetchSort().then((data) => films.setSort(data));
      films.setSort(initialSort);
      fetchFormats().then((data) => films.setFormats(data));
      fetchAgeLimitations().then((data) => films.setAgeLimitation(data));
      fetchGenres().then((data) => films.setGenres(data));
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    films.setLoading(true);
    const timer = setTimeout(() => {
      fetchFilms(
        films.sortSelected,
        films.formatsSelected,
        films.ageLimitationSelected,
        films.genresSelected,
        films.page,
        films.limit,
      ).then((data) => {
        films.setFilms(data.rows);
        films.setTotalCount(data.count);
        films.setLoading(false);
      });
    }, 900);
    return () => clearTimeout(timer);
  }, [
    films.sortSelected,
    films.formatsSelected,
    films.ageLimitationSelected,
    films.genresSelected,
    films.page,
    films.limit,
  ]);

  return (
    <HomeSection>
      <HomeContainer>
        <HomeSidebar />
        <HomeContent />
      </HomeContainer>
    </HomeSection>
  );
});

// Styled Components
const HomeSection = styled.section``;

const HomeContainer = styled(Container)`
  grid-template-areas: 'sidebar sidebar sidebar content content content content content content content content content';
  align-items: flex-start;
`;

export default Home;
