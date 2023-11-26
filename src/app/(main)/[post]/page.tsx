import { getPost } from "@/api/posts";
import Post from "@/components/Posts/Post";

export default async function PostPage({ params }) {
  const response = await getPost(params.post);
  const post = response || [];

  return <Post post={post} />;
}
