import Link from "next/link";
import Heading from "./Heading";
import Meta from "./Meta";
import Subtitle from "./Subtitle";
import { PostProps, PostsType } from "@/types/posts.type";

export default function Posts({ posts }: PostsType) {
  return (
    <div className="relative -top-2.5 flex flex-col gap-8">
      {posts.map((post: PostProps) => (
        <Link
          key={post.id}
          className="block py-4 hover:scale-[1.005]"
          href={`/${post.id}`}
        >
          <article>
            <Heading post={post} />
            <Meta post={post} />
            <Subtitle post={post} />
          </article>
        </Link>
      ))}
    </div>
  );
}
