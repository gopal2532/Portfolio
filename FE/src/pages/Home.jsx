import { motion } from "framer-motion";

/* Animated Name (Hover-triggered Letter Animation – CYAN ONLY)
*/
function AnimatedName({ text }) {
  const letters = text.split("");

  return (
    <motion.span
      className="inline-flex flex-wrap cursor-pointer"
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={{
        hover: {
          transition: {
            staggerChildren: 0.06,
          },
        },
      }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={{
            rest: {
              y: 0,
              color: "#67e8f9", // cyan-300
              textShadow: "0 0 6px rgba(34,211,238,0.5), 0 0 18px rgba(34,211,238,0.3)",
            },
            hover: {
              y: [0, -12, 0],
              color: "#22d3ee", // cyan-400
              textShadow: "0 0 8px rgba(34,211,238,0.9), 0 0 30px rgba(34,211,238,0.7)",
              transition: {
                duration: 0.45,
                ease: "easeOut",
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* Floating Tech Icon Component
*/
const FloatingIcon = ({ children, delay, className, label }) => (
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
    className={`absolute z-20 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#111] border border-gray-800 hover:border-cyan-500/50 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-colors group cursor-default ${className}`}
    title={label}
  >
    {children}
    {/* Tooltip on Hover */}
    <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-semibold text-cyan-400 tracking-widest uppercase bg-black/80 px-2 py-1 rounded pointer-events-none whitespace-nowrap">
      {label}
    </span>
  </motion.div>
);

/* Home Component
*/
export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#050505] px-6 overflow-hidden">
      
      {/* Subtle Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="text-center md:text-left pt-20 md:pt-0">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center md:justify-start mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400 border border-cyan-500/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              Available for Work
            </span>
          </motion.div>

          {/* NAME – CYAN NEON */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-2"
          >
            Hi, I'm <br />
            <AnimatedName text="GOPALAKRISHNAN" />
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mt-6 max-w-xl text-lg sm:text-xl leading-relaxed mx-auto md:mx-0"
          >
            I build modern, animated, and scalable user interfaces using <span className="text-gray-200 font-medium">React</span>, <span className="text-gray-200 font-medium">Tailwind CSS</span>, and clean UX principles.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
              Contact Me
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 text-gray-300 font-semibold transition-all bg-white/5 backdrop-blur-sm">
              View Work
            </button>
          </motion.div>

        </div>

        {/* RIGHT: TECH ORBIT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center mt-16 md:mt-0 h-[400px] sm:h-[500px] w-full"
        >
          {/* Central Glow */}
          <div className="absolute w-[250px] h-[250px] bg-cyan-500/20 blur-[100px] rounded-full" />

          {/* Rotating Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-cyan-500/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full border border-cyan-500/10"
          />

          {/* 1. CENTER: React */}
          <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#111] border border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.3)] flex items-center justify-center backdrop-blur-md">
            <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-14 h-14 sm:w-16 sm:h-16 animate-[spin_10s_linear_infinite]">
              <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
              <g stroke="#61dafb" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          </div>

          {/* ORBITING ICONS (Perfectly spaced 9 items) */}
          
          {/* 2. HTML (Top Center) */}
          <FloatingIcon label="HTML5" delay={0} className="-top-[5%] left-[50%] -translate-x-1/2">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
              <path fill="#E34F26" d="M2 2h20l-1.8 19L12 24l-8.2-3L2 2z"/>
              <text x="12" y="16" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">5</text>
            </svg>
          </FloatingIcon>

          {/* 3. CSS (Top Right) */}
          <FloatingIcon label="CSS3" delay={0.3} className="top-[8%] right-[16%]">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
              <path fill="#1572B6" d="M2 2h20l-1.8 19L12 24l-8.2-3L2 2z"/>
              <text x="12" y="16" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">3</text>
            </svg>
          </FloatingIcon>

          {/* 4. JavaScript (Right) */}
          <FloatingIcon label="JavaScript" delay={0.6} className="top-[32%] -right-[2%]">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
              <path d="M3 3h18v18H3V3m9 12.73c-1.11-.47-1.78-.96-1.78-1.84 0-.8.74-1.35 1.8-1.35 1.16 0 1.76.5 2.14 1.22l2.3-1.46c-.66-1.5-2.06-2.62-4.4-2.62-2.48 0-4.5 1.4-4.5 4.02 0 2.8 2.13 3.86 4.54 4.86 1.4.58 1.85 1.14 1.85 2 0 .9-.8 1.5-2.12 1.5-1.5 0-2.38-.72-2.92-1.84l-2.4 1.4c.88 2.06 2.7 3.26 5.3 3.26 2.86 0 4.8-1.52 4.8-4.2 0-3.07-2.4-3.95-4.66-4.95zM9.54 13.5v5.82c0 1.55-.42 2.25-1.74 2.25-.67 0-1.3-.23-1.83-.56l-1.32 2.13c.96.6 2.24.96 3.54.96 2.94 0 4.14-1.65 4.14-5.06V9.77H9.54v3.73z" fill="#F7DF1E"/>
            </svg>
          </FloatingIcon>

          {/* 5. Tailwind CSS (Bottom Right) */}
          <FloatingIcon label="Tailwind" delay={0.9} className="bottom-[30%] -right-[2%]">
            <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-8.4 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C4.937 13.382 3.576 12 3.601 12z" fill="#38bdf8"/>
            </svg>
          </FloatingIcon>

          {/* 6. Node.js (Bottom Right-Center) */}
          <FloatingIcon label="Node.js" delay={1.2} className="bottom-[4%] right-[16%]">
             <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
               <path fill="#339933" d="M12 2.2L2.5 7.7v8.6L12 21.8l9.5-5.5V7.7L12 2.2z"/>
               <text x="12" y="15.5" fill="#fff" fontSize="6.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">JS</text>
             </svg>
          </FloatingIcon>

          {/* 7. Express (Bottom Left-Center) */}
          <FloatingIcon label="Express.js" delay={1.5} className="bottom-[4%] left-[16%]">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
              <circle cx="12" cy="12" r="11" fill="#fff"/>
              <text x="12" y="16" fill="#000" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">ex</text>
            </svg>
          </FloatingIcon>

          {/* 8. Prisma (Bottom Left) */}
          <FloatingIcon label="Prisma" delay={1.8} className="bottom-[30%] -left-[2%]">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
              <path d="M12 1L2 8.5v11L12 24l10-4.5v-11L12 1z" fill="#2D3748"/>
              <path d="M12 23.5L3 18.5v-9L12 23.5z" fill="#5A67D8"/>
              <path d="M12 23.5l9-5v-9L12 23.5z" fill="#E2E8F0"/>
            </svg>
          </FloatingIcon>

          {/* 9. MySQL (Left) */}
          <FloatingIcon label="MySQL" delay={2.1} className="top-[32%] -left-[2%]">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
              <path fill="#4479A1" d="M12 3C6.5 3 2 5.2 2 8v8c0 2.8 4.5 5 10 5s10-2.2 10-5V8c0-2.8-4.5-5-10-5zm0 3.5c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3zm0 13c-4.4 0-8-1.3-8-3v-2.3c1.9 1.4 4.7 2.3 8 2.3s6.1-1 8-2.3V16c0 1.7-3.6 3-8 3z"/>
            </svg>
          </FloatingIcon>

          {/* 10. GitHub (Top Left) */}
          <FloatingIcon label="GitHub" delay={2.4} className="top-[8%] left-[16%]">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8" fill="#fff">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </FloatingIcon>

        </motion.div>

      </div>
    </section>
  );
}