import React from "react";
import { Link } from "react-router-dom";
import LogoSvg from "./../../svg/LogoSvg";
import styled from "styled-components";

export default function index() {
  return (
    <Logo>
      <LogoLink to="/">
        <LogoIcon />
      </LogoLink>
    </Logo>
  );
}

// Styled Components
const LogoIcon = styled(LogoSvg)`
  width: 141px;
  height: 15px;
  fill: var(--gray-10);
`;

const LogoLink = styled(Link)`
  padding: 12px 0;
  display: inline-flex;
`;

const Logo = styled.div`
  display: flex;
  grid-area: logo;
`;
