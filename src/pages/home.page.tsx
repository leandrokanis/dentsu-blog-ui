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

const HomePage: React.FC = (): JSX.Element => {
  const { posts, categories } = useContext(BlogContext)
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

  useEffect(() => {
    console.log({ filteredPosts })
  }, [filteredPosts])


  const handleChangeFilters = (selectedOptions: string[]): void => {
    if (selectedOptions.length === 0) {
      setFilteredPosts(posts)
      return
    }
    
    const nextFilteredPosts = posts.filter(post => {
      const categories = post.categories.map(c => c.name)
      return selectedOptions.some(option => categories.includes(option))
    })

    setFilteredPosts(nextFilteredPosts)
  }

  if (!posts?.length) return <EmptyState>Loading...</EmptyState>
  return (
    <Wrapper>
      <TopBar />

      <Container> 
        <Row style={{ justifyContent: 'space-between', padding: '0 8px' }}>
          <TitleHome>DWS blog</TitleHome>

          <Dropdown
            options={categories.map(c => c.name)}
            onChange={handleChangeFilters}
          >Categories</Dropdown>

          <ButtonSort state={orderBy} onClick={handleToggleSort}/>
        </Row>

        <Row>
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
      </Container>
    </Wrapper >
  )
}

export default HomePage
