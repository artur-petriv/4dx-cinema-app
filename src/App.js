import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import { check } from './http/userAPI';
import './scss/App.sass';
import AppRouter from './components/AppRouter';
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import MoonLoader from 'react-spinners/MoonLoader';
import { css } from '@emotion/react';
import Popup from './components/Popup';

const App = observer(() => {
  const { user, modal } = React.useContext(Context);
  const [loading, setLoading] = React.useState(true);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      check()
        .then(() => {
          user.setUser(true);
          user.setIsAuth(true);
        })
        .finally(() => setLoading(false));
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Loader>
        <MoonLoader loading={loading} color="var(--brand-color)" css={override} size={40} />
      </Loader>
    );
  }

  return (
    <Application>
      <Header />
      <AppRouter />
      <Footer />
      {modal.visible && <Popup />}
    </Application>
  );
});

// Styled Components
const Application = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: var(--header-height) 1fr var(--footer-height);
  row-gap: 28px;
`;

const Loader = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
