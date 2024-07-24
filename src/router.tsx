import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomePage } from './pages';

export const ROUTES = {
  home: '/',
}

export const Router: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
