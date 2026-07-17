import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Palette } from "lucide-react";
import { useTheme, ACCENT_THEMES } from "../context/ThemeContext.jsx";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { accent, setAccent } = useTheme();

  // Handle scroll effect for glassmorphism background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center w-full">

        {/* LOGO */}
        <a
          href="#home"
          className="font-extrabold text-2xl tracking-tight text-white z-50 relative group"
        >
          Gopal<span className="text-accent-primary group-hover:text-accent-secondary transition-colors"></span>
        </a>

        {/* DESKTOP LINKS & THEME WIDGET */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-accent-primary transition-colors duration-300 relative group"
            >
              {link.name}
              {/* Subtle hover underline effect */}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-accent-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* Accent Color Toggle Button */}
          <button
            onClick={() => setAccent(accent === "cyan" ? "emerald" : "cyan")}
            title="Toggle Theme Color (Blue / Green)"
            className="flex items-center justify-center p-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-accent-primary/30 hover:bg-white/[0.06] transition-all duration-300 group cursor-pointer shadow-md"
          >
            <Palette 
              size={16} 
              className="text-accent-primary group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_8px_var(--accent-glow)]" 
            />
          </button>

          {/* Desktop CTA Button */}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 text-sm font-bold text-black bg-accent-primary hover:bg-accent-secondary rounded-lg shadow-[0_0_15px_var(--accent-glow)] hover:shadow-[0_0_25px_var(--accent-glow)] transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden relative z-50 p-2 -mr-2 text-gray-300 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center min-h-screen"
          >
            {/* Mobile Decorative Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent-primary/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex flex-col items-center gap-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="text-2xl font-bold text-gray-300 hover:text-accent-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Mobile Accent Toggle Button */}
              <motion.button
                onClick={() => setAccent(accent === "cyan" ? "emerald" : "cyan")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
                title="Toggle Theme Color (Blue / Green)"
                className="flex items-center justify-center p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-accent-primary/30 hover:bg-white/[0.06] transition-all duration-300 group mt-4 cursor-pointer"
              >
                <Palette 
                  size={20} 
                  className="text-accent-primary group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_8px_var(--accent-glow)] mr-2" 
                />
                <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">Toggle Accent Color</span>
              </motion.button>

              {/* Mobile CTA Button */}
              <motion.a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.1, duration: 0.4 }}
                className="mt-4 px-8 py-3 text-lg font-bold text-black bg-accent-primary hover:bg-accent-secondary rounded-xl shadow-[0_0_20px_var(--accent-glow)] text-center transition-all duration-300"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
