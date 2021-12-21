import React from 'react'
import styled from "styled-components";

export default function Label({ title, text }) {
	return (
    <LabelContainer>
      <LabelTitle>{title}</LabelTitle>
			<LabelText>{text}</LabelText>
    </LabelContainer>
  );
}

// Styled Components
const LabelContainer = styled.div``;

const LabelTitle = styled.div`
	color: var(--gray-4);
	font-size: 12px;
	line-height: 1;
`;

const LabelText = styled.div`
	margin-top: 8px;
	color: var(--gray-8);
	font-weight: 600;
	font-size: 16px;
	line-height: 1;
`;
