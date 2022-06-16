import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

export default function CardSkeleton() {
  return (
    <Card>
      <Skeleton height={258} borderRadius="var(--border-radius-medium)" />
      <Skeleton
        height={20}
        style={{ marginTop: "12px" }}
        borderRadius="var(--border-radius-small)"
      />
      <Skeleton
        height={34}
        style={{ marginTop: "8px" }}
        borderRadius="var(--border-radius-small)"
      />
      <Rating>
        <Skeleton
          width={48}
          height={24}
          borderRadius="var(--border-radius-small)"
        />
        <Skeleton
          width={20}
          height={16}
          style={{ marginLeft: "8px" }}
          borderRadius="var(--border-radius-small)"
        />
      </Rating>
    </Card>
  );
}

// Styled
const Card = styled.div`
  padding: 12px;
  max-width: 300px;
  border-radius: var(--border-radius-medium);
  background-color: var(--gray-0);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  flex: 2;
`;

const Rating = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
`;
