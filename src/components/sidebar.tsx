import { Link } from "react-router-dom";
import { Post } from "../utils/types";

type Props = {
  posts: Post[];
};

export function Sidebar({ posts }: Props) {
  return (
    <aside className="flex flex-col gap-2">
      {posts.map((post) => (
        <Link to={`/blog/${post.id}`} key={post.id}>
          {post.title}
        </Link>
      ))}
    </aside>
  );
}
