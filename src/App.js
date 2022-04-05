import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import { check } from "./http/userAPI";
import './scss/App.sass';
import AppRouter from './components/AppRouter';
import { Context } from '.';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  const { user } = React.useContext(Context);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
     check()
       .then((data) => {
         user.setUser(true);
         user.setIsAuth(true);
       })
       .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading</div>;
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