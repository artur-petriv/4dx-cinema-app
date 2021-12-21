import React from 'react'
import styled from "styled-components";

export default function Button({ children }) {
	return <Btn>{children}</Btn>;
}

// Styled Components
const Btn = styled.button`
	padding: 16px;
	width: 100%;
	max-width: 320px;
	background-color: var(--brand-color);
	color: var(--gray-0);
	font-size: 16px;
	font-weight: 600;
	border-radius: var(--border-radius-medium);
	text-align: center;
`;