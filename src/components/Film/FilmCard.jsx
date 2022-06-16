import React from "react";
import Text from "./Text";
import Poster from "../Poster";
import FilmRating from "./Rating";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import Skeleton from "react-loading-skeleton";

const FilmCard = observer(() => {
  const {
    film: {
      film: {
        img,
        name,
        genres,
        year,
        country,
        language,
        duration,
        age_limitation,
        rating,
      },
      loading,
    },
  } = React.useContext(Context);

  return (
    <Card>
      {loading ? (
        <>
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
        </>
      ) : (
        <>
          <Poster imageUrl={img} />
          <FilmInfo>
            <FilmTitle>{name}</FilmTitle>
            <TextInfo>
              <Text
                title="Жанри"
                text={genres
                  ?.map((genre) => genre.name)
                  .join(", ")
                  .toLowerCase()}
              />
              <Text title="Рік" text={year} />
              <Text title="Країна" text={country} />
              <Text title="Мова" text={language} />
              <Text title="Тривалість" text={duration} />
              <Text title="Вікове обмеження" text={age_limitation?.name} />
            </TextInfo>
            <FilmRating rating={rating} />
          </FilmInfo>
        </>
      )}
    </Card>
  );
});

const FilmTitle = styled.h3`
  padding-bottom: 8px;
  color: var(--gray-8);
  font-size: var(--h5-font-size);
  line-height: var(--line-normal);
  border-bottom: 1px solid var(--gray-1);
  font-weight: var(--font-bold);
`;

const Card = styled.div`
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

export default FilmCard;
