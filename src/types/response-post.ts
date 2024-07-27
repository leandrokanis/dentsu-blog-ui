export interface ResponsePost {
  author: ResponseAuthor
  authorId: string
  categories: ResponseCategory[]
  content: string
  createdAt: string
  id: string
  thumbnail_url: string
  title: string
  updatedAt: string
}

export interface ResponseCategory {
  createdAt: string
  id: string
  name: string
  postId: string
  updatedAt: string
}

export interface ResponseAuthor {
  createdAt: string
  id: string
  name: string
  profilePicture: string
  updatedAt: string
}
