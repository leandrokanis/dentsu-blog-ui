import { ICategory, IAuthor } from '.'

export interface IPost {
  author: IAuthor
  authorId: string
  categories: ICategory[]
  content: string
  createdAt: Date
  id: string
  thumbnailUrl: string
  title: string
  updatedAt: Date
}