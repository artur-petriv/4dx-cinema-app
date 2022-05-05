import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

export default function FilterSkeleton({ type }) {
  return (
    <Filter>
      <Skeleton height={16} borderRadius="var(--border-radius-small)" />
      {type === "select" ? (
        <Skeleton height={40} borderRadius="var(--border-radius-small)" />
      ) : (
        <List>
          {Array(3)
            .fill()
            .map((n, i) => (
              <Wrap key={i}>
                <Skeleton
                  width={18}
                  height={18}
                  borderRadius="var(--border-radius-small)"
                />
                <Skeleton
                  height={18}
                  borderRadius="var(--border-radius-small)"
                />
              </Wrap>
            ))}
        </List>
      )}
    </Filter>
  );
}

// Styled Components
const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  & > span:last-child {
    flex: 1;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;
