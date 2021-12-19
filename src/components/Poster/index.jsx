import React from 'react'
import styled from "styled-components"

export default function index({ imageUrl }) {
	return (
    <PosterContainer>
      <PosterImg src={imageUrl} />
    </PosterContainer>
  );
}

// Styled
const PosterContainer = styled.div`
	display: flex;
`;

const PosterImg = styled.img`
	width: 100%;
  border-radius: var(--border-radius-medium);
  display: block;
  object-fit: cover;
`;
