import React from 'react'
import { Wrapper } from './index.styles'
import { IPost } from '../../types';

interface Props {
  post: IPost,
}

const PostCard: React.FC<Props> = (): JSX.Element => {

  return (
    <Wrapper>
      {
        // post content  
      }
    </Wrapper>
  );
}

export default PostCard