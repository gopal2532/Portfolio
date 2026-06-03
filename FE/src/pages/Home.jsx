import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* 
  1. Canvas Particles Background (Dynamic Color Connection)
*/
function CanvasParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = [];
    const particleCount = Math.min(50, Math.floor((width * height) / 18000));
    const connectionDistance = 110;
    const mouse = { x: null, y: null, radius: 150 };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force * 1.5;
            this.y += Math.sin(angle) * force * 1.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const drawConnections = () => {
      const rootStyle = getComputedStyle(document.documentElement);
      const accentPrimary = rootStyle.getPropertyValue("--accent-primary").trim() || "#06b6d4";

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            ctx.strokeStyle = `${accentPrimary}${Math.floor(opacity * 255).toString(16).padStart(2, "0")}`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}

/* 
  2. Typewriter Subtitles
*/
function TypewriterRoles() {
  const roles = [
    "React Developer",
    "Frontend Engineer",
    "Full Stack Web Creator",
    "UX/UI Enthusiast",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => role.slice(0, prev.length + 1));
      }, 80);
    }

    if (!isDeleting && currentText === role) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <span className="text-accent-primary relative font-semibold">
      {currentText}
      <span className="animate-[pulse_1s_infinite] absolute -right-2 bottom-1 h-5 sm:h-6 w-0.5 bg-accent-primary" />
    </span>
  );
}

/* 
  3. Animated Name (Hover-triggered Letter Animation)
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
            staggerChildren: 0.04,
          },
        },
      }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block transition-colors duration-200"
          variants={{
            rest: {
              y: 0,
              color: "var(--accent-secondary)",
              textShadow: "0 0 6px var(--accent-glow)",
            },
            hover: {
              y: [0, -12, 0],
              color: "var(--accent-primary)",
              textShadow: "0 0 10px var(--accent-primary), 0 0 25px var(--accent-glow)",
              transition: {
                duration: 0.4,
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

/* 
  4. Floating Tech Icon Component
*/
const FloatingIcon = ({ children, delay, className, label }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
    className={`absolute z-20 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#0f0f0f] border border-white/5 hover:border-accent-primary rounded-full shadow-[0_0_20px_rgba(0,0,0,0.7)] hover:shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300 group cursor-default ${className}`}
    title={label}
  >
    {children}
    {/* Tooltip on Hover */}
    <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-bold text-accent-primary tracking-widest uppercase bg-black/90 border border-white/5 px-2 py-1 rounded pointer-events-none whitespace-nowrap">
      {label}
    </span>
  </motion.div>
);

/* 
  5. Main Home (Hero) Section
*/
export default function Home() {
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleParallax = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) * 0.035;
      const y = (e.clientY - innerHeight / 2) * 0.035;
      setParallaxOffset({ x, y });
    };
    window.addEventListener("mousemove", handleParallax);
    return () => window.removeEventListener("mousemove", handleParallax);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-[#050505] px-6 overflow-hidden">
      
      {/* 1. Canvas Interactive Particles */}
      <CanvasParticles />

      {/* 2. Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} 
      />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="text-center md:text-left pt-24 md:pt-0">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex justify-center md:justify-start mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-primary/10 px-4 py-2 text-sm text-accent-primary border border-accent-primary/20 backdrop-blur-sm shadow-[0_0_15px_var(--accent-glow)]">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-primary animate-pulse" />
              Available for Work
            </span>
          </motion.div>

          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-4"
          >
            Hi, I'm <br />
            <AnimatedName text="GOPALAKRISHNAN" />
          </motion.h1>

          {/* Role with Typewriter effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl sm:text-2xl font-mono text-gray-300 mt-4 min-h-[40px] flex items-center justify-center md:justify-start"
          >
            I'm a&nbsp;<TypewriterRoles />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-400 mt-6 max-w-xl text-lg sm:text-xl leading-relaxed mx-auto md:mx-0"
          >
            I build modern, animated, and scalable user interfaces using <span className="text-gray-200 font-semibold">React</span>, <span className="text-gray-200 font-semibold">Tailwind CSS</span>, and clean UI/UX architecture.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-accent-primary hover:bg-accent-secondary text-black font-extrabold transition-all duration-300 shadow-[0_0_20px_var(--accent-glow)] hover:shadow-[0_0_30px_var(--accent-glow)] text-center cursor-pointer"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/10 hover:border-accent-primary hover:text-accent-primary text-gray-300 font-semibold transition-all duration-300 bg-white/[0.02] backdrop-blur-sm text-center cursor-pointer"
            >
              View Work
            </a>
          </motion.div>

        </div>

        {/* RIGHT: TECH ORBIT VISUAL WITH MOUSE PARALLAX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: parallaxOffset.x,
            y: parallaxOffset.y
          }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
          className="relative flex justify-center items-center mt-12 md:mt-0 h-[400px] sm:h-[500px] w-full"
        >
          {/* Central Glow */}
          <div className="absolute w-[250px] h-[250px] bg-accent-primary/10 blur-[120px] rounded-full pointer-events-none transition-colors duration-500" />

          {/* Rotating Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-accent-primary/20 pointer-events-none transition-colors duration-500"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full border border-accent-primary/5 pointer-events-none transition-colors duration-500"
          />

          {/* 1. CENTER: React */}
          <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0a0a0a] border border-accent-primary/30 shadow-[0_0_35px_var(--accent-glow)] flex items-center justify-center backdrop-blur-md transition-all duration-500">
            <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-14 h-14 sm:w-16 sm:h-16 animate-[spin_12s_linear_infinite]">
              <circle cx="0" cy="0" r="2.05" fill="var(--accent-primary)" className="transition-colors duration-500" />
              <g stroke="var(--accent-primary)" strokeWidth="1.1" fill="none" className="transition-colors duration-500">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          </div>

          {/* ORBITING ICONS */}
          <FloatingIcon label="HTML5" delay={0} className="-top-[5%] left-[50%] -translate-x-1/2">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
              <path fill="#E34F26" d="M2 2h20l-1.8 19L12 24l-8.2-3L2 2z"/>
              <text x="12" y="16" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">5</text>
            </svg>
          </FloatingIcon>

          <FloatingIcon label="CSS3" delay={0.4} className="top-[8%] right-[16%]">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
              <path fill="#1572B6" d="M2 2h20l-1.8 19L12 24l-8.2-3L2 2z"/>
              <text x="12" y="16" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">3</text>
            </svg>
          </FloatingIcon>

          <FloatingIcon label="JavaScript" delay={0.8} className="top-[32%] -right-[2%]">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
              <path d="M3 3h18v18H3V3m9 12.73c-1.11-.47-1.78-.96-1.78-1.84 0-.8.74-1.35 1.8-1.35 1.16 0 1.76.5 2.14 1.22l2.3-1.46c-.66-1.5-2.06-2.62-4.4-2.62-2.48 0-4.5 1.4-4.5 4.02 0 2.8 2.13 3.86 4.54 4.86 1.4.58 1.85 1.14 1.85 2 0 .9-.8 1.5-2.12 1.5-1.5 0-2.38-.72-2.92-1.84l-2.4 1.4c.88 2.06 2.7 3.26 5.3 3.26 2.86 0 4.8-1.52 4.8-4.2 0-3.07-2.4-3.95-4.66-4.95zM9.54 13.5v5.82c0 1.55-.42 2.25-1.74 2.25-.67 0-1.3-.23-1.83-.56l-1.32 2.13c.96.6 2.24.96 3.54.96 2.94 0 4.14-1.65 4.14-5.06V9.77H9.54v3.73z" fill="#F7DF1E"/>
            </svg>
          </FloatingIcon>

          <FloatingIcon label="Tailwind" delay={1.2} className="bottom-[30%] -right-[2%]">
            <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-8.4 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C4.937 13.382 3.576 12 3.601 12z" fill="#38bdf8"/>
            </svg>
          </FloatingIcon>

          <FloatingIcon label="Node.js" delay={1.6} className="bottom-[4%] right-[16%]">
             <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
               <path fill="#339933" d="M12 2.2L2.5 7.7v8.6L12 21.8l9.5-5.5V7.7L12 2.2z"/>
               <text x="12" y="15.5" fill="#fff" fontSize="6.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">JS</text>
             </svg>
          </FloatingIcon>

          <FloatingIcon label="Express.js" delay={2.0} className="bottom-[4%] left-[16%]">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
              <circle cx="12" cy="12" r="11" fill="#fff"/>
              <text x="12" y="16" fill="#000" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">ex</text>
            </svg>
          </FloatingIcon>

          <FloatingIcon label="Prisma" delay={2.4} className="bottom-[30%] -left-[2%]">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
              <path d="M12 1L2 8.5v11L12 24l10-4.5v-11L12 1z" fill="#2D3748"/>
              <path d="M12 23.5L3 18.5v-9L12 23.5z" fill="#5A67D8"/>
              <path d="M12 23.5l9-5v-9L12 23.5z" fill="#E2E8F0"/>
            </svg>
          </FloatingIcon>

          <FloatingIcon label="MySQL" delay={2.8} className="top-[32%] -left-[2%]">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
              <path fill="#4479A1" d="M12 3C6.5 3 2 5.2 2 8v8c0 2.8 4.5 5 10 5s10-2.2 10-5V8c0-2.8-4.5-5-10-5zm0 3.5c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3zm0 13c-4.4 0-8-1.3-8-3v-2.3c1.9 1.4 4.7 2.3 8 2.3s6.1-1 8-2.3V16c0 1.7-3.6 3-8 3z"/>
            </svg>
          </FloatingIcon>

          <FloatingIcon label="GitHub" delay={3.2} className="top-[8%] left-[16%]">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8" fill="#fff">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </FloatingIcon>

        </motion.div>

      </div>

      {/* 6. Bouncing Mouse Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 hover:opacity-80 transition-opacity duration-300 pointer-events-none">
        <span className="text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase">Scroll</span>
        <div className="w-[18px] h-[30px] rounded-full border border-white/20 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-accent-primary"
          />
        </div>
      </div>

    </section>
  );
}