import http from "../config/http";
import { ResponseCategory } from "../types/response-post";
import { CATEGORIES_ALL } from "./endpoints"

export const CategoriesApi = {
  findMany: async (): Promise<ResponseCategory[]> => {

    const data = await http.get(CATEGORIES_ALL)
      .then((res) => res.data)
      .catch((err) => console.error(err))

    return data
  },
}
