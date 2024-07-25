import React, { useEffect } from 'react'
import { Wrapper } from './home.styles'
import PostCard from '../components/post-card'
import { IPost } from '../types'
import { fetchPosts } from '../services'
import { Col, Container, Row } from '../global.styles'

const HomePage: React.FC = (): JSX.Element => {
  const [posts, setPosts] = React.useState<IPost[]>([])

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
  }, [])

  return (
    <Wrapper>
      <Container>
        <Row>
          {
            posts.map((post) => (
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
