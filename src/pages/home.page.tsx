import React, { useCallback, useContext, useEffect } from 'react';
import { Wrapper } from './home.styles'
import PostCard from '../components/post-card'
import { Col, Container, Row } from '../global.styles'
import { PostContext } from '../router'
import TopBar from '../components/top-bar'
import ButtonSort from '../components/button-sort';
import { IPost } from '../types';
import { sortPostsByCreatedAt } from '../services';

const HomePage: React.FC = (): JSX.Element => {
  const posts = useContext(PostContext)
  const [filteredPosts, setFilteredPosts] = React.useState<IPost[]>([])
  const [orderBy, setOrderBy] = React.useState<'newest' | 'oldest'>('oldest')
  
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
    
  if (!filteredPosts?.length) return <h1>Loading...</h1>
  return (
    <Wrapper>
      <TopBar />
      
      <Container> 
        <Row>
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
