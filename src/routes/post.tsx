import { useLoaderData } from "react-router-dom";
import { Post as PostType } from "../utils/types";

export function Post() {
  const { post } = useLoaderData() as { post: PostType };
  return (
    <div className="p-4 overflow-y-auto">
      <h1 className="font-bold text-xl mb-4">{post.title}</h1>
      <img
        src={post.image}
        className="h-40 w-full object-cover mb-1"
        alt={post.title}
      />
      <p>{post.content}</p>
    </div>
  );
}
