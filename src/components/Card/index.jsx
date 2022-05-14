import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Poster from "../Poster";
import CardRating from "./CardRating";

export default function index({
  film: { id, img, name, genres, formats, ageLimitationId, rating },
}) {
  return (
    <Card>
      <Link to={`/film/${id}`}>
        <Poster imageUrl={img} />
      </Link>
      <CardInfo>
        <CardWrap>
          <CardTitleLink to={`/film/${id}`}>{name}</CardTitleLink>
          <CardDescription>
            {genres
              ?.map((genre) => genre.title)
              .join(", ")
              .toLowerCase()}
          </CardDescription>
        </CardWrap>
        <CardRating rating={rating} />
      </CardInfo>
    </Card>
  );
}

// Styled Components
const Card = styled.div`
  padding: 12px;
  max-width: 300px;
  border-radius: var(--border-radius-medium);
  background-color: var(--gray-0);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  flex: 2;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--box-shadow-overflow);
  }
`;

const CardInfo = styled.div`
  margin-top: 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitleLink = styled(Link)`
  font-size: var(--h7-font-size);
  font-weight: var(--font-semi-bold);
  color: var(--gray-8);
  line-height: var(--line-big);
`;

const CardDescription = styled.p`
  margin: 0;
  line-height: var(--line-large);
  color: var(--gray-6);
`;
