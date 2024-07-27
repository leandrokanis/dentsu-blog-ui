import { PostsApi } from "../api"
import { IAuthor, ICategory, IPost } from "../types"
import { ResponsePost } from "../types/response-post"

export async function fetchPosts(): Promise<IPost[]> {
  const posts = await PostsApi.findMany()
    .then((posts) => {
      localStorage.setItem('posts', JSON.stringify(posts))
      return composePosts(posts)
    })
    .catch((err) => console.error(err))

    return posts as IPost[]
}

export async function fetchPost(id: string): Promise<IPost> {
  const post = await PostsApi.findOne(id)
    .then((post) => composePost(post))
    .catch((err) => console.error(err))

    return post as unknown as IPost
}

export function composePost(post: ResponsePost): IPost {
  return {
    author: composeAuthor(post['author']),
    authorId: post['authorId'],
    categories: composeCategories(post['categories']),
    content: post['content'],
    createdAt: new Date(post['createdAt']),
    id: post['id'],
    thumbnailUrl: post['thumbnail_url'],
    title: post['title'],
    updatedAt: new Date(post['updatedAt']),
  }
}

export const composePosts = (data: ResponsePost[]): IPost[] => {
  if (!data) return []

  return data.map(composePost)
}

export const composeAuthor = (data: any): IAuthor => {
  return {
    createdAt: new Date(data['createdAt']),
    id: data['id'],
    name: data['name'],
    profilePicture: data['profilePicture'],
    updatedAt: new Date(data['updatedAt']),
  }
}

export const composeCategories = (data: any): ICategory[] => {
  return data.map((category: any) => {
    return {
      createdAt: new Date(category['createdAt']),
      id: category['id'],
      name: category['name'],
      postId: category['postId'],
      updatedAt: new Date(category['updatedAt']),
    } as ICategory
  })
}

export const  getPostById = (posts: IPost[], id: string): IPost | undefined => {
  return posts.find((post) => post.id === id)
}

export const sortPostsByCreatedAt = (posts: IPost[], order: 'newest' | 'oldest'): IPost[] => {
  return posts.sort((a, b) => {
    const multiplier = order === 'newest' ? -1 : 1
    return multiplier * (a.createdAt > b.createdAt ? -1 : 1)
  })
}

export const getRecentPosts = (posts: IPost[]): IPost[] => {
  const LIMIT = 3
  return posts.slice(0, LIMIT)
}
