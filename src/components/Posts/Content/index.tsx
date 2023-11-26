import { PostType } from "@/types/posts.type";

export default function Content({ post }: PostType) {
  return <div className="mt-10">{post.body}</div>;
}
