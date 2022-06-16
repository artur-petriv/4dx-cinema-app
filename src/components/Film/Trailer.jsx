import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const TrailerIndex = observer(() => {
  const {
    film: {
      film: { trailer },
      loading,
    },
  } = React.useContext(Context);

  console.log(loading);

  return (
    <FilmTrailer>
      {loading ? (
        <Skeleton
          height={360}
          borderRadius="var(--border-radius-medium)"
          style={{ flexGrow: "1" }}
        />
      ) : (
        <IFrame
          style={{
            width: "100%",
            height: "360px",
            borderRadius: "var(--border-radius-medium)",
          }}
          src={trailer}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        ></IFrame>
      )}
    </FilmTrailer>
  );
});

const FilmTrailer = styled.div`
  padding: 20px;
  background-color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  min-height: 100px;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  box-shadow: var(--box-shadow);
`;

const IFrame = styled.iframe`
  width: "100%";
  height: "360px";
  borderradius: "var(--border-radius-medium)";
`;

export default TrailerIndex;
