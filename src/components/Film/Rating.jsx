import React from 'react';
import styled from "styled-components";
import ImdbSvg from "../../svg/ImdbSvg";

export default function FilmRating({ rating = "0" }) {
	return (
    <Rating>
      <RatingSvg />
      <RatingNumber>{rating}</RatingNumber>
    </Rating>
  );
}

const Rating = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
`;

const RatingSvg = styled(ImdbSvg)`
  width: 48px;
  height: 24px;
`;

const RatingNumber = styled.span`
  margin-left: 8px;
  line-height: var(--line-base);
  font-weight: var(--font-medium);
  font-size: var(--text-font-size);
  color: var(--gray-8);
`;