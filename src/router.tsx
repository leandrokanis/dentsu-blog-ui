import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomePage, PostPage } from './pages';
import { Container, Page } from './global.styles';
import { ICategory, IPost } from './types';
import { composeCategories, composePosts, fetchPosts } from './services';
import { fetchCategories } from './services/categories.service';

export const ROUTES = {
  home: '/',
  post: '/post/:id',
}

interface IBlogContext {
  posts: IPost[]
  categories: ICategory[]
}

export const BlogContext = React.createContext<IBlogContext>({
  posts: [],
  categories: [],
})

export const Router: React.FC = () => {
  const [posts, setPosts] = React.useState<IPost[]>([])
  const [categories, setCategories] = React.useState<ICategory[]>([])

  useEffect(() => {
    const nextPosts = localStorage.getItem('posts')
    if (nextPosts) {
      setPosts(composePosts(JSON.parse(nextPosts)))
    } else {
      fetchPosts().then(setPosts)
    }
  }, [])

  useEffect(() => {
    const nextCategories = localStorage.getItem('categories')
    if (nextCategories) {
      setCategories(composeCategories(JSON.parse(nextCategories)))
    } else {
      fetchCategories().then(setCategories)
    }
  }, [])

  return (
    <Page>
      <BlogContext.Provider value={{ posts, categories }}>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route path={ROUTES.post} element={<PostPage />} />
          </Routes>
        </BrowserRouter>
      </BlogContext.Provider>
    </Page>
  )
}

export default Router
