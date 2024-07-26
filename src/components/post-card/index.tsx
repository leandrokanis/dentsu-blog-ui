import React from 'react'
import { Content, Wrapper, Thumbnail, Info, Title, Excerpt, Categories, Tag } from './index.styles'
import { IPost } from '../../types'
import { useNavigate } from 'react-router-dom'

interface Props {
  post: IPost,
}

const PostCard: React.FC<Props> = (props: Props): JSX.Element => {
  const createAtToString = composeDateToString(props.post.createdAt)
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/post/${props.post.id}`)
  }

  return (
    <Wrapper onClick={handleNavigate}>
      <Thumbnail src={props.post.thumbnailUrl} alt={props.post.author.name} />

      <Content>
        <Info>
          <span> { createAtToString } </span>
          <span> { props.post.author.name } </span>
        </Info>

        <Title> { props.post.title } </Title>
        <Excerpt><p>{ props.post.content }</p></Excerpt>
      </Content>

      <Categories>
        {
          props.post.categories.map((category) => (
            <Tag key={category.id}> { category.name } </Tag>
          )) 
        }
      </Categories>
    </Wrapper>
  )
}

export default PostCard

const composeDateToString = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}