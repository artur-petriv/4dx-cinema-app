import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import { check } from "./http/userAPI";
import './scss/App.sass';
import AppRouter from './components/AppRouter';
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";

const App = observer(() => {
  const { user } = React.useContext(Context);
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
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <MoonLoader loading={loading} color="var(--brand-color)" css={override} size={40} />
      </div>
    );
  }

  return (
    <Application>
      <Header />
      <AppRouter />
      <Footer />
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

export default App;