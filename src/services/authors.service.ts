import { AuthorsApi } from "../api"
import { IAuthor } from "../types"

export async function fetchAuthors(): Promise<IAuthor[]> {
  const authors = await AuthorsApi.findMany()
    .then((author) => {
      localStorage.setItem('authors', JSON.stringify(author))
      return composeAuthors(author)
    })
    .catch((err) => console.error(err))

    return authors as IAuthor[]
}

export const composeAuthor = (author: any): IAuthor => {
  return {
    createdAt: new Date(author['createdAt']),
    id: author['id'],
    name: author['name'],
    profilePicture: author['profilePicture'],
    updatedAt: new Date(author['updatedAt']),
  }
}

export const composeAuthors = (data: any[]): IAuthor[] => {
  return data.map(composeAuthor)
}
