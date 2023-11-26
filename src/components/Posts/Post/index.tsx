import Title from "../Title";
import Meta from "../Meta";
import Content from "../Content";
import { PostType } from "@/types/posts.type";

export default function Post({ post }: PostType) {
  return (
    <article>
      <Title post={post} />
      <Meta post={post} />
      <Content post={post} />
    </article>
  );
}
