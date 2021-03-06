import React from "react";
import styled from "styled-components";
import ImdbSvg from "../../svg/ImdbSvg";

export default function CardRating({ size, rating }) {
  return (
    <Rating>
      <RatingSvg className={size === "small" && "small"} />
      <RatingNumbers className={size === "small" && "small"}>
        {rating}
      </RatingNumbers>
    </Rating>
  );
}

const Rating = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
`;

const RatingSvg = styled(ImdbSvg)`
  width: 48px;
  height: 24px;
  &.small {
    width: 40px;
    height: 20px;
  }
`;

const RatingNumbers = styled.span`
  margin-left: 8px;
  line-height: var(--line-base);
  font-weight: var(--font-medium);
  font-size: var(--text-font-size);
  color: var(--gray-8);
  &.small {
    font-size: var(--small-font-size);
  }
`;
