import { getPosts } from "@/api/posts";
import Posts from "@/components/Posts";

export default async function PostsPage() {
  const response = await getPosts();
  const posts = response || [];

  return <Posts posts={posts} />;
}
