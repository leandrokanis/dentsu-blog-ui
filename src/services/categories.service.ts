import { CategoriesApi } from "../api"
import { ICategory } from "../types";

export async function fetchCategories(): Promise<ICategory[]> {
  const categories = await CategoriesApi.findMany()
    .then((category) => {
      localStorage.setItem('categories', JSON.stringify(category))
      return composeCategories(category)
    })
    .catch((err) => console.error(err))

    return categories as ICategory[]
}

export const composeCategory = (category: any): ICategory => {
  return {
    createdAt: new Date(category['createdAt']),
    id: category['id'],
    name: category['name'],
    postId: category['postId'],
    updatedAt: new Date(category['updatedAt']),
  }
}

export const composeCategories = (data: any[]): ICategory[] => {
  return data.map(composeCategory)
}

