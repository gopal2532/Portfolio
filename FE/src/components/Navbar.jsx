export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        {/* Logo */}
        <span className="font-extrabold text-xl text-orange-400">
          {/* Gopal<span className="text-white">.dev</span> */}
        </span>

        {/* Links */}
        <div className="flex gap-8 text-sm text-gray-300">
          {["home", "about", "skills", "projects", "resume", "contact"].map(
            (id) => (
              <a
                key={id}
                href={`#${id}`}
                className="hover:text-orange-400 transition"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ),
          )}
        </div>
      </div>
    </nav>
  );
}
