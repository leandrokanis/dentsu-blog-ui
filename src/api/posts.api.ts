import { composePosts } from "../services"
import { IPost } from "../types"
import { POSTS_ALL } from "./endpoints"

export const PostsApi = {
  findMany: async (): Promise<IPost[]> => {
    const data = await fetch(POSTS_ALL)
      .then((res) => res.json())
      .catch((err) => console.error(err))

    const posts: IPost[] = composePosts(data)

    return posts;
  },
}
