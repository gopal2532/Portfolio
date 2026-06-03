import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, Zap, Sparkles } from "lucide-react";

/* 
  Scroll-Triggered CountUp Animation Component
*/
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
    { value: 100, suffix: "+", label: "Contributions" },
    { value: 99, suffix: "%", label: "Client Happiness" }
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
              Engineering digital <br/>
              <span className="text-white">experiences</span><span className="text-accent-primary transition-colors duration-500">.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I’m a passionate <span className="text-gray-200 font-semibold">Web Developer</span> who bridges the gap between complex logic and elegant design. I don't just write code; I build intuitive, scalable, and engaging digital products.
              </p>
              <p>
                With a strong focus on <span className="text-accent-primary font-medium transition-colors duration-500">performance and architecture</span>, I specialize in the React ecosystem and modern backend tools, turning ideas into high-performance web applications that users love.
              </p>
            </div>
            
            {/* Counts Counter Dashboard */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-white/5">
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
            <div className="bg-white/[0.01] border border-white/5 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden group hover:border-accent-primary/30 transition-all duration-500">
              <div className="relative z-10">
                <Terminal className="w-8 h-8 text-accent-primary mb-5 transition-colors duration-500" />
                <h3 className="text-white font-bold text-xl mb-3">Development Philosophy</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  "Clean code is not written by humans who don't make mistakes, but by humans who care about the next person reading it. Architecture matters."
                </p>
              </div>
              {/* Dynamic theme accent blur */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent-primary/10 rounded-full blur-2xl group-hover:bg-accent-primary/20 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Card 2: Performance */}
              <div className="bg-white/[0.01] border border-white/5 backdrop-blur-xl rounded-3xl p-6 relative overflow-hidden group hover:border-accent-primary/30 transition-all duration-500">
                <Zap className="w-7 h-7 text-accent-primary mb-4 transition-colors duration-500" />
                <h3 className="text-white font-bold text-lg mb-1">Fast</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Optimized load times and zero-lag interactions.
                </p>
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-accent-primary/5 rounded-full blur-xl group-hover:bg-accent-primary/10 transition-all duration-700 pointer-events-none" />
              </div>

              {/* Card 3: UX/UI */}
              <div className="bg-white/[0.01] border border-white/5 backdrop-blur-xl rounded-3xl p-6 relative overflow-hidden group hover:border-accent-primary/30 transition-all duration-500">
                <Sparkles className="w-7 h-7 text-accent-primary mb-4 transition-colors duration-500" />
                <h3 className="text-white font-bold text-lg mb-1">Intuitive</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Pixel-perfect layouts with a focus on usability.
                </p>
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-accent-primary/5 rounded-full blur-xl group-hover:bg-accent-primary/10 transition-all duration-700 pointer-events-none" />
              </div>
            </div>

          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}