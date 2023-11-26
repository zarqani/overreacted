export type PostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
  date?: Date;
};

export type PostsProps = PostProps[];

export type PostType = {
  post: PostProps;
};

export type PostsType = {
  posts: PostsProps;
};
