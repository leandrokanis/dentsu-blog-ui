import { PostsApi } from "../api"
import { IAuthor, ICategory, IPost } from "../types"
import { ResponsePost } from "../types/response-post"
// const { localStorage } = window

export async function fetchPosts(): Promise<IPost[]> {
  const posts = await PostsApi.findMany()
    // .then((posts) => { localStorage.setItem('posts', JSON.stringify(posts)) })
    .then((posts) => composePosts(posts))
    .catch((err) => console.error(err))

    return posts as IPost[]
}

export async function fetchPost(id: string): Promise<IPost> {
  const post = await PostsApi.findOne(id)
    // .then((posts) => { localStorage.setItem('posts', JSON.stringify(posts)) })
    .then((post) => composePost(post))
    .catch((err) => console.error(err))

    return post as unknown as IPost
}

function composePost(post: ResponsePost): IPost {
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

const composePosts = (data: ResponsePost[]): IPost[] => {
  if (!data) return []

  return data.map(composePost)
}

const composeAuthor = (data: any): IAuthor => {
  return {
    createdAt: new Date(data['createdAt']),
    id: data['id'],
    name: data['name'],
    profilePicture: data['profilePicture'],
    updatedAt: new Date(data['updatedAt']),
  }
}

const composeCategories = (data: any): ICategory[] => {
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
