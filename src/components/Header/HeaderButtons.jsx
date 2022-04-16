import React from "react";
import ButtonIconSvg from "./../../svg/ButtonIconSvg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Context } from "./../../";
import { observer } from "mobx-react-lite";

const HeaderButtons = observer(() => {
  const { user } = React.useContext(Context);
  
  const signOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  }

  return (
    <HeaderButtonsWrapper>
      <ButtonIcon>
        <ButtonIconIcon />
      </ButtonIcon>

      {}

      {user.isAuth ? (
        <>
          <Link to="/admin">Админ панель</Link>
          <span style={{ marginLeft: '16px' }} onClick={signOut}>Выход</span>
        </>
        ) : (
        <LoginLinkButton to="login">Вход</LoginLinkButton>
      )}
    </HeaderButtonsWrapper>
  );
});

// Styled Components
const HeaderButtonsWrapper = styled.div`
  grid-area: header-buttons;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > :first-child {
    margin-right: 32px;
  }
`;

const ButtonIcon = styled.button`
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.3s;
  display: inline-flex;
  line-height: 18px;
  &:hover {
    background-color: var(--gray-1);
  }
  &:active {
    background-color: var(--gray-2);
  }
`;

const ButtonIconIcon = styled(ButtonIconSvg)`
  margin: 0;
  height: 18px;
  width: 18px;
  fill: var(--gray-4);
`;

const LoginLinkButton = styled(Link)`
  padding: 8px 24px;
  border-radius: 32px;
  transition: background-color 0.3s, opacity 0.3s;
  display: inline-flex;
  line-height: 18px;
  background-color: var(--brand-color);
  color: var(--gray-0);
  opacity: 0.95;
  &:hover {
    /* background-color: var(--gray-1); */
    opacity: 1;
  }
  &:active {
    /* background-color: var(--gray-2); */
    opacity: 0.9;
  }
`;

export default HeaderButtons;