import React from 'react';
import ButtonIconSvg from './../../svg/ButtonIconSvg';
import styled from 'styled-components';

const HeaderButtonsWrapper = styled.div`
  grid-area: header-buttons;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: var(--box-shadow);
`;

const ButtonIcon = styled.button`
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.3s;
  display: inline-flex;
  &:hover {
    background-color: var(--gray-1);
  }
  &:active {
    background-color: var(--gray-2);
  }
`;

const ButtonIconIcon = styled(ButtonIconSvg)`
  height: 18px;
  width: 18px;
  fill: var(--gray-4);
`;

export default function HeaderButtons() {
  return (
    <HeaderButtonsWrapper>
      <ButtonIcon>
        <ButtonIconIcon />
      </ButtonIcon>
    </HeaderButtonsWrapper>
  );
}
