import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="px-8 py-4 bg-zinc-900 text-zinc-50 flex justify-between">
      <Link to="/" className="font-bold text-lg">
        Awesome Blog
      </Link>
      <nav>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  );
}
