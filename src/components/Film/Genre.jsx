import React from "react";
import styled from "styled-components";

export default function FilmGenre({ title, text }) {
  return (
    <Genre>
      <strong>{title}: </strong>
      {text}
    </Genre>
  );
}

const Genre = styled.div`
  margin-top: 8px;
`;
