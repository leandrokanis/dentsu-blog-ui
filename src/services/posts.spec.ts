import { mockPost } from '../types/post.mock'
import { getPostById } from './posts.service'

describe('getPostById', () => {
  it('should return the post with matching ID', () => {
    const posts = [
      mockPost({ id: '1', title: 'Post 1' }),
      mockPost({ id: '2', title: 'Post 2' }),
      mockPost({ id: '3', title: 'Post 3' }),
    ]

    const targetId = '2'
    const expectedPost = posts.find((post) => post.id === targetId)

    const foundPost = getPostById(posts, targetId)

    expect(foundPost).toEqual(expectedPost)
  })
})
