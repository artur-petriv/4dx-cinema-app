import React from "react";
import styled from "styled-components";

export default function MoonButtonSvg({ className }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 8 8"
    >
      <path d="M2.72 0A3.988 3.988 0 0 0 0 3.78c0 2.21 1.79 4 4 4 1.76 0 3.25-1.14 3.78-2.72-.4.13-.83.22-1.28.22-2.21 0-4-1.79-4-4 0-.45.08-.88.22-1.28z" />
    </Svg>
  );
}

const Svg = styled.svg`
  margin: 0;
  height: 18px;
  width: 18px;
  fill: var(--gray-7);
`;
