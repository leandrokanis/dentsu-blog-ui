import React from 'react';
import { Wrapper } from './home.styles';
import PostCard from '../components/post-card';
import { mockPost } from '../types/post.mock';

const HomePage: React.FC = (): JSX.Element => {

  return (
    <Wrapper>
      <PostCard
        post={mockPost()}
      />
    </Wrapper >
  )
}

export default HomePage
