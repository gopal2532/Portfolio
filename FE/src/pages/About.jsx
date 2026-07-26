import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, Zap, Sparkles, Palette } from "lucide-react";
import Tilt from "../components/Tilt.jsx";

// Scroll-triggered counter animation
function CountUp({ end, duration = 1.5, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Easing out quadratic
      const easeOutQuad = progress * (2 - progress);
      setCount(Math.floor(easeOutQuad * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const [activeColor, setActiveColor] = useState("#06b6d4");

  const themeColors = [
    { name: "Cyan", primary: "#06b6d4", secondary: "#22d3ee", glow: "rgba(6, 182, 212, 0.4)" },
    { name: "Emerald", primary: "#10b981", secondary: "#34d399", glow: "rgba(16, 185, 129, 0.4)" },
    { name: "Violet", primary: "#8b5cf6", secondary: "#a78bfa", glow: "rgba(139, 92, 246, 0.4)" },
    { name: "Rose", primary: "#f43f5e", secondary: "#fb7185", glow: "rgba(244, 63, 94, 0.4)" },
    { name: "Amber", primary: "#f59e0b", secondary: "#fbbf24", glow: "rgba(245, 158, 11, 0.4)" },
  ];

  const handleColorChange = (color) => {
    setActiveColor(color.primary);
    document.documentElement.style.setProperty("--accent-primary", color.primary);
    document.documentElement.style.setProperty("--accent-secondary", color.secondary);
    document.documentElement.style.setProperty("--accent-glow", color.glow);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const techStack = [
    "React", "JavaScript", "Tailwind CSS", "Node.js",
    "Express.js", "Prisma", "MySQL", "HTML5", "CSS3", "Git"
  ];

  const stats = [
    { value: 1, suffix: "+", label: "Year Experience" },
    { value: 15, suffix: "+", label: "Projects Completed" },
    { value: 100, suffix: "+", label: "Contributions" }
  ];

  return (
    <section className="relative bg-[#050505] min-h-screen flex items-center overflow-hidden py-24">

      {/* Background grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }}
      />

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-primary/10 blur-[130px] rounded-full pointer-events-none transition-colors duration-500" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-secondary/5 blur-[130px] rounded-full pointer-events-none transition-colors duration-500" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 relative z-10 w-full"
      >
        {/* Section Label */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-accent-primary transition-colors duration-500"></span>
          <span className="text-accent-primary font-mono text-sm tracking-widest uppercase font-semibold transition-colors duration-500">
            01. About Me
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT: Main Content & Stats */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight leading-tight">
              Engineering digital <br />
              <span className="inline-block text-white">
                experiences<span className="text-accent-primary transition-colors duration-500">.</span>
              </span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I’m a passionate <span className="text-gray-200 font-semibold">Frontend & Full-Stack Developer</span> who bridges the gap between complex logic and elegant design. I don't just write code; I build intuitive, scalable, and engaging digital products.
              </p>
              <p>
                With a strong focus on <span className="text-accent-primary font-medium transition-colors duration-500">performance and architecture</span>, I specialize in full-stack development and modern database systems, turning ideas into high-performance web applications that users love.
              </p>
            </div>

            {/* Counts Counter Dashboard */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-6 border-y border-white/5">
              {stats.map((stat, i) => (
                <div key={i} className="text-left">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono flex items-center">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-2 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Core Technologies</p>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                    className="px-4 py-2 bg-white/[0.02] border border-white/5 hover:border-accent-primary/40 rounded-xl text-sm text-gray-300 hover:text-accent-primary transition-all duration-300 cursor-default shadow-sm backdrop-blur-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Bento Box Cards */}
          <motion.div variants={itemVariants} className="lg:col-span-5 grid gap-6">
            {/* Card 1: Philosophy */}
            <Tilt className="bg-white/[0.01] border border-white/5 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden group hover:border-accent-primary/30 hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-500 cursor-default">
              <div className="relative z-10">
                  <p className="text-gray-200 font-extrabold italic text-base sm:text-lg border-l-2 border-accent-primary pl-4 py-1 leading-relaxed transition-colors duration-500">
                    "Fail fast, learn faster."
                  </p>
              </div>
              {/* Dynamic theme accent blur */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent-primary/10 rounded-full blur-2xl group-hover:bg-accent-primary/20 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
            </Tilt>

            {/* Card 2: Intuitive Design */}
            <Tilt className="bg-white/[0.01] border border-white/5 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden group hover:border-accent-primary/30 hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-500 cursor-default">
              <div className="relative z-10 flex gap-5 items-start">
                <div className="p-3 bg-accent-primary/10 rounded-2xl border border-accent-primary/20 shrink-0 text-accent-primary transition-colors duration-500">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-extrabold text-xl mb-2">Intuitive Design</h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Pixel-perfect layouts, dynamic micro-interactions, and a relentless focus on creating fluid, user-first experiences.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-accent-primary/5 rounded-full blur-xl group-hover:bg-accent-primary/10 transition-all duration-700 pointer-events-none" />
            </Tilt>

          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}