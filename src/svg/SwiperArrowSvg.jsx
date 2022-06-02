import React from "react";
import styled from "styled-components";

export default function SwiperArrowSvg({ className, next }) {
  return (
    <SwiperArrow
      className={className}
      width="14"
      height="15"
      next={next}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.70694 12.793L4.41394 8.5H13.9999V6.5H4.41394L8.70694 2.207L7.29294 0.792999L0.585938 7.5L7.29294 14.207L8.70694 12.793Z"
        fill="var(--gray-10)"
      />
    </SwiperArrow>
  );
}

// Styled Components
const SwiperArrow = styled.svg`
  ${({ next }) => next && "transform: rotate(180deg)"}
`;
