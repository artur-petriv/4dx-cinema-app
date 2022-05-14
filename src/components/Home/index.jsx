import React from "react";
import styled from "styled-components";
import HomeContent from "./HomeContent";
import HomeSidebar from "./HomeSidebar";
import Container from "./../Container";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import {
  fetchAgeLimitations,
  fetchFilms,
  fetchFormats,
  fetchGenres,
  fetchSort,
} from "../../http/filmAPI";

const initialSort = [
  {
    name: "По рейтингу",
    value: "rating",
  },
  {
    name: "По новизні",
    value: "new",
  },
  {
    name: "По тривалості",
    value: "duration",
  },
];

const Home = observer(() => {
  const { films } = React.useContext(Context);

  React.useEffect(() => {
    // fetchSort().then((data) => films.setSort(data));

    const timer = setTimeout(() => {
      films.setSort(initialSort);
      fetchFormats().then((data) => films.setFormats(data));
      fetchAgeLimitations().then((data) => films.setAgeLimitation(data));
      fetchGenres().then((data) => films.setGenres(data));
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      fetchFilms(
        films.sortSelected,
        films.formatsSelected,
        films.ageLimitationSelected,
        films.genresSelected,
        films.page,
        films.limit
      ).then((data) => {
        films.setFilms(data.rows);
        films.setTotalCount(data.count);
      });
    }, 100);

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
  grid-template-areas: "sidebar sidebar sidebar content content content content content content content content content";
  align-items: flex-start;
`;

export default Home;
