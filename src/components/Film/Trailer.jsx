import React from "react";
import styled from "styled-components";

export default function TrailerIndex({ trailerUrl }) {
  return (
    <FilmTrailer>
      <IFrame
        style={{
          width: "100%",
          height: "360px",
          borderRadius: "var(--border-radius-medium)",
        }}
        src={trailerUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
      ></IFrame>
    </FilmTrailer>
  );
}

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

const IFrame = styled.iframe`
  width: "100%";
  height: "360px";
  borderradius: "var(--border-radius-medium)";
`;
