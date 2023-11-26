import { montserrat } from "@/config/fonts";
import { PostType } from "@/types/posts.type";

export default function Title({ post }: PostType) {
  return (
    <h1
      className={[
        montserrat.className,
        "text-5xl font-black text-950 dark:text-50",
      ].join(" ")}
    >
      {post.title}
    </h1>
  );
}
