import { api } from "@/api";
import { PostProps, PostsProps } from "@/types/posts.type";

const postsRoute = "/posts";
const postRoute = (id: number) => `/posts/${id}`;

const generateDate = (id: number) =>
  new Date(new Date().getTime() - 10e10 / id);

export const getPosts = async (): Promise<PostsProps | undefined> => {
  const response: PostsProps = await api.get(postsRoute);
  if (!response) return;
  const result: PostsProps = response
    .sort((a: PostProps, b: PostProps) => a.id - b.id)
    .map((item) => ({ ...item, date: generateDate(item.id) }));
  return result;
};

export const getPost = async (id: number): Promise<PostProps | undefined> => {
  const response: PostProps = await api.get(postRoute(id));
  if (!response) return;
  return { ...response, date: generateDate(response.id) };
};
