import { PostsApi } from "../api"
import { IPost } from "../types"
const { localStorage } = window

export async function fetchPosts(): Promise<void> {
  await PostsApi.findMany()
    .then((posts) => { localStorage.setItem('posts', JSON.stringify(posts)) })
    .catch((err) => console.error(err))
}

export const composePosts = (data: any): IPost[] => {
  if (!data) return []

  return data?.map((post: any) => {
    return {
      // author: IAuthor
      authorId: post['authorId'],
      // categories: ICategory[],
      content: post['content'],
      createdAt: new Date(post['createdAt']),
      id: post['id'],
      thumbnailUrl: post['thumbnailUrl'],
      title: post['title'],
      updatedAt: new Date(post['updatedAt']),
    }
  })
}