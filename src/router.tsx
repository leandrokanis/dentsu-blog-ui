import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomePage, PostPage } from './pages';
import { Container, Page } from './global.styles';
import { IPost } from './types';
import { composePosts, fetchPosts } from './services';

export const ROUTES = {
  home: '/',
  post: '/post/:id',
}

export const PostContext = React.createContext<IPost[]>([])

export const Router: React.FC = () => {
  const [posts, setPosts] = React.useState<IPost[]>([])

  useEffect(() => {
    const nextPosts = localStorage.getItem('posts')
    if (nextPosts) {
      setPosts(composePosts(JSON.parse(nextPosts)))
    } else {
      fetchPosts().then(setPosts)
    }
  }, [])

  return (
    <Page>
      <PostContext.Provider value={posts}>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route path={ROUTES.post} element={<PostPage />} />
          </Routes>
        </BrowserRouter>
      </PostContext.Provider>
    </Page>
  )
}

export default Router
