import React from 'react'
import {
  Wrapper,
  Title,
  Info,
  ImageAuthor,
  LabelAuthor,
  LabelDate,
  Thumbnail,
  Text,
} from './post.styles'
import { Container, Row } from '../global.styles';
import { useParams } from 'react-router-dom'
import { mockPost } from '../types/post.mock'
import Button from '../components/button';

const PostPage: React.FC = (): JSX.Element => {
  const { id }  = useParams()

  const post = mockPost({ id })
  const createdAt = post.createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <Wrapper>
      <Container>
        <Row>
          <Button icon="arrow_back" variant='secondary'>Back</Button>
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

      </Container>
    </Wrapper >
  )
}

export default PostPage
