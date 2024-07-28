import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Wrapper, EmptyState, TitleHome } from './home.styles'
import PostCard from '../components/post-card'
import { Col, Container, Row } from '../global.styles'
import { BlogContext } from '../router'
import TopBar from '../components/top-bar'
import ButtonSort from '../components/button-sort'
import { IPost } from '../types';
import { sortPostsByCreatedAt } from '../services'
import Dropdown from '../components/dropdown'
import MultiFilter from '../components/multi-filter'

const HomePage: React.FC = (): JSX.Element => {
  const { posts, categories, authors } = useContext(BlogContext)
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([])
  const [orderBy, setOrderBy] = useState<'newest' | 'oldest'>('oldest')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([])
  
  const handleToggleSort = useCallback(() => {
    const nextOrderBy = orderBy === 'newest' ? 'oldest' : 'newest'
    const nextFilteredPosts = sortPostsByCreatedAt([...posts], nextOrderBy)
    setFilteredPosts(nextFilteredPosts)
    setOrderBy(nextOrderBy)
  }, [orderBy, posts])

  useEffect(() => {
    const nextFilteredPosts = sortPostsByCreatedAt([...posts], orderBy)
    setFilteredPosts(nextFilteredPosts)
  }, [posts])

  useEffect(() => {
    if (selectedAuthors.length === 0 && selectedCategories.length === 0) {
      setFilteredPosts(posts)
      return
    }

    const postsByCategories = filterPostsByCategories(posts, selectedCategories)
    const postsByAuthors = filterPostsByAuthors(postsByCategories, selectedAuthors)
    
    setFilteredPosts(postsByAuthors)
  }, [selectedAuthors, selectedCategories, posts])


  if (!posts?.length) return <EmptyState>Loading...</EmptyState>
  return (
    <Wrapper>
      <TopBar />

      <Container> 
        <Row style={{ justifyContent: 'space-between', padding: '0 8px' }}>
          <TitleHome>DWS blog</TitleHome>

          <Dropdown
            options={categories.map(c => c.name)}
            onChange={setSelectedCategories}
            label="Categories"
          />

          <Dropdown
            options={authors.map(a => a.name)}
            onChange={setSelectedAuthors}
            label="Authors"
          />

          <ButtonSort state={orderBy} onClick={handleToggleSort}/>
        </Row>

        <Row>
          <Col span={3}>
            <MultiFilter categories={categories} authors={authors} />
          </Col>

          <Col span={9}>
            <Row style={{ marginTop: '0' }}>
              {
                filteredPosts?.length === 0 && (
                  <EmptyState>
                    No posts found
                  </EmptyState>
                )
              }

              { filteredPosts?.map((post) => (
                  <Col key={post.id} span={4} >
                    <PostCard key={post.id} post={post} />
                  </Col>
                ))
              }
            </Row>
          </Col>  
        </Row>
      </Container>
    </Wrapper >
  )
}

export default HomePage

export const filterPostsByCategories = (posts: IPost[], selectedCategories: string[]) => {
  if (selectedCategories.length === 0) return posts

  return posts.filter(post => {
    const categories = post.categories.map(c => c.name)
    return selectedCategories.some(option => categories.includes(option))
  })
}

export const filterPostsByAuthors = (posts: IPost[], selectedAuthors: string[]) => {
  if (selectedAuthors.length === 0) return posts

  return posts.filter(post => selectedAuthors.includes(post.author.name))
}
