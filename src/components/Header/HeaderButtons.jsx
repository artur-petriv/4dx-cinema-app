import React from 'react';
import ButtonIconSvg from './../../svg/ButtonIconSvg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Context } from './../../';
import { observer } from 'mobx-react-lite';
import { ThemeContext, themes } from '../../contexts/ThemeContext';
import MoonButtonSvg from './../../svg/MoonButtonSvg';

const HeaderButtons = observer(() => {
  const { user } = React.useContext(Context);

  const signOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <HeaderButtonsWrapper>
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <ButtonIcon
            onClick={() => {
              if (theme === themes.light) setTheme(themes.dark);
              if (theme === themes.dark) setTheme(themes.light);
            }}>
            {theme === themes.light ? <ButtonIconIcon /> : <MoonButtonSvg />}
          </ButtonIcon>
        )}
      </ThemeContext.Consumer>

      {user.isAuth ? (
        <>
          <LoginLinkButton to="/admin">Адмін панель</LoginLinkButton>
          <LogOut onClick={signOut}>Вийти</LogOut>
        </>
      ) : (
        <LoginLinkButton to="login">Вхід</LoginLinkButton>
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
  fill: var(--gray-7);
`;

const LoginLinkButton = styled(Link)`
  padding: 8px 16px;
  min-width: 100px;
  border-radius: 8px;
  transition: background-color 0.3s, opacity 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 20px;
  background-color: var(--brand-color);
  color: white;
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

const LogOut = styled.div`
  margin-left: 20px;
  padding: 8px 20px;
  background-color: var(--gray-1);
  border-radius: 8px;
  cursor: pointer;
  line-height: 20px;
  font-weight: 500;
  color: var(--gray-10);
`;

export default HeaderButtons;
