import http from "../config/http";
import { ResponsePost } from "../types/response-post";
import { POSTS_ALL } from "./endpoints"

export const PostsApi = {
  findMany: async (): Promise<ResponsePost[]> => {

    const data = await http.get(POSTS_ALL)
      .then((res) => res.data)
      .catch((err) => console.error(err))

    return data
  },

  findOne: async (id: string): Promise<ResponsePost> => {
    const data = await http.get(`${POSTS_ALL}/${id}`)
      .then((res) => res.data)
      .catch((err) => console.error(err))

    return data
  },
}
