import { getPost } from "@/api/posts";
import Post from "@/components/Posts/Post";
import { PostProps } from "@/types/posts.type";
import { Metadata } from "next";

type Props = {
  params: { post: number };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.post);
  return {
    title: post?.title,
    description: post?.body?.slice(0, 50),
  };
}

export default async function PostPage({ params }: Props) {
  const response = await getPost(params.post);

  return <Post post={response || ({} as PostProps)} />;
}
