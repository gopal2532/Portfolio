import { motion } from "framer-motion";
import { Terminal, Zap, Sparkles } from "lucide-react";

export default function About() {
  // Animation variants for cleaner code
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

  return (
    <section className="relative bg-[#050505] min-h-screen flex items-center overflow-hidden py-24">
      
      {/* Subtle Background Grid Pattern (Matches Hero Section) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 relative z-10 w-full"
      >
        {/* Subtle Label */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-cyan-400"></span>
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase font-semibold">
            01. About Me
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: Main Content */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight leading-tight">
              Engineering digital <br/>
              <span className="text-white">experiences</span><span className="text-cyan-400">.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I’m a passionate <span className="text-gray-200 font-medium">Web Developer</span> who bridges the gap between complex logic and elegant design. I don't just write code; I build intuitive, scalable, and engaging digital products.
              </p>
              <p>
                With a strong focus on <span className="text-cyan-400 font-medium">performance and architecture</span>, I specialize in the React ecosystem and modern backend tools, turning ideas into high-performance web applications that users love.
              </p>
            </div>
            
            {/* Tech Stack Pills */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Core Technologies</p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, i) => (
                  <motion.span 
                    key={tech} 
                    variants={itemVariants}
                    whileHover={{ y: -2, borderColor: "rgba(34,211,238,0.5)", color: "#67e8f9" }}
                    className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-lg text-sm text-gray-300 transition-colors cursor-default shadow-sm backdrop-blur-sm"
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
            <div className="bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500">
              <div className="relative z-10">
                <Terminal className="w-8 h-8 text-cyan-400 mb-5" />
                <h3 className="text-white font-bold text-xl mb-3">Development Philosophy</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  "Clean code is not written by humans who don't make mistakes, but by humans who care about the next person reading it. Architecture matters."
                </p>
              </div>
              {/* Animated decorative element */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 group-hover:scale-150 transition-all duration-700" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Card 2: Performance */}
              <div className="bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-3xl p-6 relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500">
                <Zap className="w-7 h-7 text-cyan-400 mb-4" />
                <h3 className="text-white font-bold text-lg mb-1">Fast</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Optimized load times and zero-lag interactions.
                </p>
              </div>

              {/* Card 3: UX/UI */}
              <div className="bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-3xl p-6 relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500">
                <Sparkles className="w-7 h-7 text-cyan-400 mb-4" />
                <h3 className="text-white font-bold text-lg mb-1">Intuitive</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Pixel-perfect layouts with a focus on usability.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}