import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';

import './scss/App.sass';
import AppRouter from './components/AppRouter';

export default function App() {
  return (
    <Application>
      <Header />
      <AppRouter />
      <Footer />
    </Application>
  );
}

// Styled Components
const Application = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: var(--header-height) 1fr var(--footer-height);
  row-gap: 28px;
`;
