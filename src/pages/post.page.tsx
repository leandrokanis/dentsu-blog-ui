import React, { useEffect } from 'react'
import {
  ImageAuthor,
  Info,
  Hr,
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
import { fetchPost, fetchPosts } from '../services';
import PostCard from '../components/post-card';

const PostPage: React.FC = (): JSX.Element => {
  const { id }  = useParams()
  const navigate = useNavigate()

  const [post, setPost] = React.useState<IPost | null>(null)
  const [recentPosts, setRecentPosts] = React.useState<IPost[]>([])

  useEffect(() => {
    if (!id) return
    fetchPost(id).then(setPost)
  }, [id])

  useEffect(() => {
    if (!post) return

    fetchPosts().then((posts) => {
      const filteredPosts = composeRecentPosts(posts)
      setRecentPosts(filteredPosts)
    })
  }, [post])

  const createdAt = post?.createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  if (!post) return <div>Loading...</div>

  return (
    <Wrapper>
      <Container>
        <Row>
          <Button
            icon="arrow_back"
            variant='secondary'
            onClick={() => navigate('/')}
          >Back</Button>
        </Row>

        <Row>
          <Title>{ post.title }</Title>
        </Row>

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
          <Thumbnail src={ post.thumbnailUrl } alt={ post.title } />

          <Text>{ post.content }</Text>
        </Row>

          {
            recentPosts?.length > 0 && (
              <Row>
                <Hr />
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
              </Row>
            )
          }
      </Container>
    </Wrapper >
  )
}

export default PostPage

const composeRecentPosts = (posts: IPost[]) => {
  const POSTS_LIMIT = 3
  return posts.sort((a, b) => {
    return a.createdAt > b.createdAt ? -1 : 1;
  }).slice(0, POSTS_LIMIT);
}