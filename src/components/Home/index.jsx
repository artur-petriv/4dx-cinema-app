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

const Home = observer(() => {
  const { films } = React.useContext(Context);

  React.useEffect(() => {
    // fetchSort().then(data => films.setSort(data));
    fetchFilms(1, 1, 1, 1, 4).then((data) => {
      films.setFilms(data.rows);
      films.setTotalCount(data.count);
    });
    fetchFormats().then((data) => films.setFormats(data));
    fetchAgeLimitations().then((data) => films.setAgeLimitation(data));
    fetchGenres().then((data) => films.setGenres(data));
  }, []);

  React.useEffect(() => {
    fetchFilms(1, 1, 1, films.page, 2).then((data) => {
      films.setFilms(data.rows);
      films.setTotalCount(data.count);
    });
  }, [films.page]);

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
