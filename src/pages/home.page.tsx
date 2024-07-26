import React, { useContext } from 'react';
import { Wrapper } from './home.styles'
import PostCard from '../components/post-card'
import { Col, Container, Row } from '../global.styles'
import { PostContext } from '../router'

const HomePage: React.FC = (): JSX.Element => {
  const posts = useContext(PostContext) 

  if (!posts?.length) return <h1>Loading...</h1>

  return (
    <Wrapper>
      <Container>
        <Row>
          {
            posts?.map((post) => (
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
