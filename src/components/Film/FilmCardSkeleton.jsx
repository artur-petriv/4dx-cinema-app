import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

// width: 225px;
// height: 360px;
export default function FilmCardSkeleton() {
  return (
    <FilmCard>
      <Skeleton
        height={360}
        width={225}
        borderRadius="var(--border-radius-medium)"
      />
      <FilmInfo>
        <TitleSkeleton>
          <Skeleton
            height={30}
            style={{
              marginBottom: "8px",
            }}
            borderBottom="1px solid var(--gray-1)"
            borderRadius="var(--border-radius-small)"
          />
          <Devider />
        </TitleSkeleton>
        <TextInfo>
          <Skeleton
            height={17}
            borderRadius="var(--border-radius-small)"
            count={6}
          />
        </TextInfo>
        <FilmRatingSkeleton>
          <Skeleton
            width={48}
            height={24}
            borderRadius="var(--border-radius-small)"
          />
          <Skeleton
            width={14}
            height={14}
            borderRadius="var(--border-radius-small)"
          />
        </FilmRatingSkeleton>
      </FilmInfo>
    </FilmCard>
  );
}

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

const FilmInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const Devider = styled.div`
  height: 1px;
  background-color: var(--gray-1);
`;

const TitleSkeleton = styled.div``;

const FilmRatingSkeleton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
