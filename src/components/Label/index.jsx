import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

export default function Label({ title, text, loading }) {
  return (
    <LabelContainer>
      <LabelTitle>{title}</LabelTitle>
      {loading ? (
        <LabelText>
          <Skeleton />
        </LabelText>
      ) : (
        <LabelText>{text}</LabelText>
      )}
    </LabelContainer>
  );
}

// Styled Components
const LabelContainer = styled.div`
  flex: 1 0;
`;

const LabelTitle = styled.div`
  color: var(--gray-4);
  font-size: 12px;
  line-height: 1;
`;

const LabelText = styled.div`
  min-height: 22px;
  margin-top: 8px;
  color: var(--gray-8);
  font-weight: 600;
  font-size: 16px;
  line-height: var(--line-big);
`;
