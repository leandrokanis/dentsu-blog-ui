import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Wrapper } from './home.styles'
import PostCard from '../components/post-card'
import { Col, Container, Row } from '../global.styles'
import { PostContext } from '../router'
import TopBar from '../components/top-bar'
import ButtonSort from '../components/button-sort';
import { IPost } from '../types';
import { sortPostsByCreatedAt } from '../services';
import Dropdown from '../components/dropdown';

const HomePage: React.FC = (): JSX.Element => {
  const posts = useContext(PostContext)
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([])
  const [orderBy, setOrderBy] = useState<'newest' | 'oldest'>('oldest')
  
  const handleToggleSort = useCallback(() => {
    const nextOrderBy = orderBy === 'newest' ? 'oldest' : 'newest'
    const nextFilteredPosts = sortPostsByCreatedAt([...posts], nextOrderBy)
    setFilteredPosts(nextFilteredPosts)
    setOrderBy(nextOrderBy)
  }, [orderBy, posts])

  useEffect(() => {
    const nextFilteredPosts = sortPostsByCreatedAt([...posts], orderBy)
    setFilteredPosts(nextFilteredPosts)
    setFilteredPosts(posts)
  }, [posts])

  const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
  
  if (!filteredPosts?.length) return <h1>Loading...</h1>
  return (
    <Wrapper>
      <TopBar />

      <Container> 
        <Row>
          <Dropdown categories={categories} />
          <ButtonSort state={orderBy} onClick={handleToggleSort}/>
        </Row>

        <Row>
          {
            filteredPosts?.map((post) => (
              <Col key={post.id} span={4} >
                <PostCard key={post.id} post={post} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </Wrapper >
  )
}

export default HomePage
