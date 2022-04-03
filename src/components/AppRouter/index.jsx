import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Context } from '../..';
import AuthPage from '../../pages/AuthPage';
import HomePage from '../../pages/HomePage';
import NotFoundPage from '../../pages/NotFoundPage';
import AdminPage from "./../../pages/AdminPage";
import FilmPage from "./../../pages/FilmPage";

export default function AppRouter() {
	const { user } = React.useContext(Context);
  
	return (
    <Routes>
      {user.isAuth ? (
        <Route path="admin" element={<AdminPage />} />
      ) : (
        <Route path="admin" element={<Navigate to="/login" replace />} />
      )}
      <Route exact path="/" element={<HomePage />} />
      <Route path="film/:id" element={<FilmPage />} />
      <Route path="login" element={<AuthPage />} />
      <Route path="registration" element={<AuthPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
