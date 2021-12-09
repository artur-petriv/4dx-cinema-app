import React from 'react'
import styled from "styled-components"

export default function FilmTitle({ name }) {
	return (
		<Title>{name}</Title>
	)
}

const Title = styled.h3`
	color: var(--gray-8);
`;