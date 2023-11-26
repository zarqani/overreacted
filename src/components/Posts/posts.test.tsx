import React from "react";
import Posts from "./index";
import { PostProps } from "@/types/posts.type";
import { render, screen } from "@/lib/testing.lib";

const mockPosts: PostProps[] = [
  {
    userId: 1,
    id: 1,
    title: "Post Title 1",
    body: "Post Content 1",
  },
  {
    userId: 1,
    id: 2,
    title: "Post Title 2",
    body: "Post Content 2",
  },
];

describe("Posts Component", () => {
  it("should render the correct number of posts", () => {
    render(<Posts posts={mockPosts} />);
    const posts = screen.getAllByRole("article");
    expect(posts.length).toBe(2);
  });

  it("should render the correct post title", () => {
    render(<Posts posts={mockPosts} />);
    const postTitle = screen.getByText("Post Title 1");
    expect(postTitle).toBeInTheDocument();
  });

  it("should render the correct post content", () => {
    render(<Posts posts={mockPosts} />);
    const postContent = screen.getByText("Post Content 1");
    expect(postContent).toBeInTheDocument();
  });
});
