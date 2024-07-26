import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomePage, PostPage } from './pages';
import { Container } from './global.styles';

export const ROUTES = {
  home: '/',
  post: '/post/:id',
}

export const Router: React.FC = () => {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.post} element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default Router
