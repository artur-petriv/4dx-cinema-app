import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ImdbSvg from '../../svg/ImdbSvg';
import Poster from '../Poster';

export default function index({ film: { id, imgUrl, name, genres, rating } }) {
  return (
    <Card>
      <Link to={`/film/${id}`}>
        <Poster imageUrl={imgUrl} />
      </Link>
      <CardInfo>
        <CardTitleLink to={`/film/${id}`}>{name}</CardTitleLink>
        <CardDescription>{genres?.map((genre) => genre.title).join(", ").toLowerCase()}</CardDescription>
        <CardRating>
          <CardRatingSvg />
          <CardRatingNumbers>{rating}</CardRatingNumbers>
        </CardRating>
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

const CardImg = styled.img`
  border-radius: var(--border-radius-medium);
  display: block;
  object-fit: cover;
`;

const CardInfo = styled.div`
  margin-top: 12px;
  flex: 1;
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
  color: var(--gray-5);
`;

const CardRating = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
`;

const CardRatingSvg = styled(ImdbSvg)`
  width: 48px;
  height: 24px;
`;

const CardRatingNumbers = styled.span`
  margin-left: 8px;
  line-height: var(--line-base);
  font-weight: var(--font-medium);
  font-size: var(--text-font-size);
  color: var(--gray-8);
`;
