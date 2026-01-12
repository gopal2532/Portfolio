import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, setDark } = useTheme();

  return (
    <nav className="flex justify-between px-8 py-5 backdrop-blur bg-black/40 fixed w-full z-40">
      <span className="font-bold text-cyan-400">Gopal.dev</span>
      <div className="flex gap-6 text-sm">
        {["/", "/skills", "/projects", "/resume", "/contact"].map(p => (
          <Link key={p} to={p} className="hover:text-cyan-400">
            {p === "/" ? "Home" : p.replace("/", "")}
          </Link>
        ))}
        <button onClick={() => setDark(!dark)}>
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
