import Link from "next/link";

export default function Author() {
  return (
    <Link
      className="relative top-1 italic"
      href="https://github.com/zarqani"
      target="_blank"
    >
      <img
        alt="by Fahime Zarqani"
        src="https://avatars.githubusercontent.com/u/54211016?s=400&u=64c210bea5bfe151ed7d0d0a2e465e80c06756cc&v=4"
        className="relative -top-1 mx-1 inline h-8 w-8 rounded-full"
      />
    </Link>
  );
}
