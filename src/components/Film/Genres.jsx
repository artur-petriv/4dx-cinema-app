import React from 'react'
import styled from "styled-components"

const genres = ['боевик', 'ужасы', 'фантастика'];

export default function FilmGenres() {
	return (
    <GenresParagraph>
      {genres?.map((genre, index) => (!index ? genre : `, ${genre}`))}
    </GenresParagraph>
  );
}

const GenresParagraph = styled.p``;