import { montserrat } from "@/config/fonts";
import { PostType } from "@/types/posts.type";

export default function Heading({ post }: PostType) {
  return (
    <h2
      className={[
        montserrat.className,
        "text-3xl font-black text-link dark:text-link-100",
      ].join(" ")}
    >
      {post.title}
    </h2>
  );
}
