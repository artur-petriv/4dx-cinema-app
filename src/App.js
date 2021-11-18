import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FilmPage from './pages/FilmPage';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';

import './scss/App.sass';

const Application = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: var(--header-height) 1fr var(--footer-height);
  row-gap: 40px;
`;

export default function App() {
  return (
    <Application>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/film/:id" element={<FilmPage />} />
      </Routes>

      <Footer />
    </Application>
  );
}
