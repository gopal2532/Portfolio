export default function Footer() {
  return (
    <footer className="relative bg-[#0b0b0b]">
      <div className="max-w-6xl mx-auto px-6 py-10 border-t border-white/10 text-center">
        
        {/* Brand */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Gopalakrishnan</span>
          <span className="mx-2 text-gray-600">•</span>
          Frontend Developer
        </p>

        {/* Optional links */}
        <div className="mt-4 flex justify-center gap-6 text-xs text-gray-500">
          <a
            href="https://github.com/gopal2532"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gopalakrishnan-g-310a00358/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400 transition"
          >
            LinkedIn
          </a>
      <a
  href="mailto:gopal994329@gmail.com"
  className="hover:text-orange-400 transition"
>
  Email
</a>

        </div>
      </div>

      {/* Subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(249,115,22,0.08),transparent_45%)] pointer-events-none" />
    </footer>
  );
}
