import { PostType } from "@/types/posts.type";

export default function Meta({ post }: PostType) {
  return (
    <p className="my-2 text-sm text-gray-700 dark:text-gray-300">
      {new Date(post.date || "").toLocaleDateString("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </p>
  );
}
