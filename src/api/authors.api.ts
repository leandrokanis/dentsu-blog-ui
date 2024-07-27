import http from "../config/http";
import { ResponseAuthor } from "../types/response-post";
import { AUTHORS_ALL } from "./endpoints"

export const AuthorsApi = {
  findMany: async (): Promise<ResponseAuthor[]> => {

    const data = await http.get(AUTHORS_ALL)
      .then((res) => res.data)
      .catch((err) => console.error(err))

    return data
  },
}
