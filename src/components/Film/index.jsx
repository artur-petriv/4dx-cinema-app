import React from "react";
import styled from "styled-components";
import Container from "../Container";
import FilmContent from "./Content";
import FilmHead from "./Head";

const FilmIndex = () => {
  return (
    <FilmSection>
      <FilmContainer>
        <FilmHead />
        <FilmContent />
      </FilmContainer>
    </FilmSection>
  );
};

// Styled Components
const FilmSection = styled.section``;

const FilmContainer = styled(Container)`
  grid-template-columns: none;
`;

export default FilmIndex;
