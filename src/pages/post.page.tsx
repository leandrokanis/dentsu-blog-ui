import React, { useContext, useEffect } from 'react'
import {
  ImageAuthor,
  Info,
  LabelAuthor,
  LabelDate,
  Subtitle,
  Text,
  Thumbnail,
  Title,
  Wrapper,
} from './post.styles'
import { Col, Container, Row } from '../global.styles';
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/button';
import { IPost } from '../types';
import { fetchPost, getPostById, getRecentPosts, sortPostsByCreatedAt } from '../services';
import PostCard from '../components/post-card';
import { BlogContext } from '../router';
import TopBar from '../components/top-bar';

const PostPage: React.FC = (): JSX.Element => {
  const { id }  = useParams()
  const navigate = useNavigate()
  const { posts } = useContext(BlogContext)

  const [post, setPost] = React.useState<IPost | null>(null)
  const newestPosts = sortPostsByCreatedAt(posts, 'newest')
  const recentPosts = getRecentPosts(newestPosts)

  useEffect(() => {
    if (!id) return
    const currentPost = getPostById(posts, id)
    currentPost ? setPost(currentPost) : fetchPost(id).then(setPost)
  }, [id])

  const createdAt = post?.createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  if (!post) return <div>Loading...</div>

  return (
    <Wrapper>
      <TopBar />

      <Container>
        <Row>
          <Col span={2}>
            <Button
              icon="arrow_back"
              variant='secondary'
              onClick={() => navigate('/')}
            >
              Back
            </Button>
          </Col>

          <Col span={8}>
            <Title>{ post.title }</Title>

            <Row>
              <Info>
                <ImageAuthor src={ post.author.profilePicture } alt={ post.author.name } />

                <div>
                  <LabelAuthor>Writtern by: <span>{ post.author.name }</span></LabelAuthor>
                  <LabelDate> { createdAt } </LabelDate>
                </div>
              </Info>
            </Row>

            <Row>
              <Col>
                <Thumbnail src={ post.thumbnailUrl } alt={ post.title } />

                <Text>{ post.content }</Text>
              </Col>
            </Row>

              {
                recentPosts?.length > 0 && (
                  <Row>
                    <Col>
                      <Subtitle>Latest articles</Subtitle>
                      
                      <Row>
                        {
                          recentPosts.map((post) => (
                            <Col key={post.id} span={4} >
                              <PostCard key={post.id} post={post} />
                            </Col>
                          ))
                        }
                      </Row>
                    </Col>
                  </Row>
                )
              }
          </Col>
        </Row>
      </Container>
    </Wrapper >
  )
}

export default PostPage
