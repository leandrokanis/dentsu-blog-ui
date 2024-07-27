import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomePage, PostPage } from './pages';
import { Page } from './global.styles';
import { IAuthor, ICategory, IPost } from './types';
import { composeCategories, composePosts, fetchPosts } from './services';
import { fetchCategories } from './services/categories.service';
import { composeAuthors, fetchAuthors } from './services/authors.service';

export const ROUTES = {
  home: '/',
  post: '/post/:id',
}

interface IBlogContext {
  authors: IAuthor[]
  categories: ICategory[]
  posts: IPost[]
}

export const BlogContext = React.createContext<IBlogContext>({
  authors: [],
  categories: [],
  posts: [],
})

export const Router: React.FC = () => {
  const [posts, setPosts] = React.useState<IPost[]>([])
  const [categories, setCategories] = React.useState<ICategory[]>([])
  const [authors, setAuthors] = React.useState<IAuthor[]>([])

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

  useEffect(() => {
    const nextAuthors = localStorage.getItem('authors')
    if (nextAuthors) {
      setAuthors(composeAuthors(JSON.parse(nextAuthors)))
    } else {
      fetchAuthors().then(setAuthors)
    }
  }, [])

  return (
    <Page>
      <BlogContext.Provider value={{ posts, categories, authors }}>
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
