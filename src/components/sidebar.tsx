import { Link } from "react-router-dom";
import { Post } from "../utils/types";

type Props = {
  posts: Post[];
};

export function Sidebar({ posts }: Props) {
  return (
    <aside className="flex flex-col w-72 shrink-0 border-r overflow-y-scroll">
      {posts.map((post) => (
        <Link
          to={`/blog/${post.id}`}
          key={post.id}
          className="p-2 hover:bg-zinc-900/15 transition leading-loose"
        >
          {post.title}
        </Link>
      ))}
    </aside>
  );
}
