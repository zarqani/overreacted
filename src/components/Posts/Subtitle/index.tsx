import { PostType } from "@/types/posts.type";

export default function Subtitle({ post }: PostType) {
  return <p className="mt-1">{post.body.slice(0, 60)}</p>;
}
