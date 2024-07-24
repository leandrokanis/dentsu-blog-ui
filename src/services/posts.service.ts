import { PostsApi } from "../api"
import { IPost } from "../types"
import { ResponsePost } from "../types/response-post"
const { localStorage } = window

export async function fetchPosts(): Promise<void> {
  await PostsApi.findMany()
    .then((posts) => { localStorage.setItem('posts', JSON.stringify(posts)) })
    .catch((err) => console.error(err))
}

export const composePosts = (data: ResponsePost[]): IPost[] => {
  if (!data) return []

  return data?.map((post) => {
    return {
      // author: IAuthor
      authorId: post['authorId'],
      // categories: ICategory[],
      content: post['content'],
      createdAt: new Date(post['createdAt']),
      id: post['id'],
      thumbnailUrl: post['thumbnail_url'],
      title: post['title'],
      updatedAt: new Date(post['updatedAt']),
    } as IPost
  })
}
