import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: "SMT Rack System",
      desc: "Real-time rack monitoring and inventory management system designed for high-efficiency manufacturing environments.",
      tech: ["React", "MQTT", "Prisma", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1581090700227-1e8c3a6b1d9f?q=80&w=1470&auto=format&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "Job Portal Platform",
      desc: "Role-based job posting and application management platform with dynamic filtering and resume parsing.",
      tech: ["React", "Node.js", "Express", "MySQL"],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1470&auto=format&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "E-Commerce Architecture",
      desc: "Modern responsive shopping UI featuring seamless cart interactions, state management, and clean UX.",
      tech: ["Next.js", "Tailwind", "Redux"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1470&auto=format&fit=crop",
      link: "#",
      github: "#",
    },
  ];

  // Prevent background scrolling when modal is open
  if (typeof document !== "undefined") {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <section className="relative bg-[#050505] px-6 py-24 min-h-screen overflow-hidden">
      
      {/* Subtle Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      {/* Decorative Glows */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-cyan-400"></span>
            <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase font-semibold">
              03. Featured Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            My Projects<span className="text-cyan-400">.</span>
          </h2>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              onClick={() => setActiveIndex(index)}
              className="group relative cursor-pointer rounded-3xl p-5 bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-500 shadow-lg shadow-black/50 flex flex-col h-full"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full mb-6 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale-[30%] group-hover:grayscale-0"
                />
              </div>

              {/* Card Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {project.desc}
                </p>
                
                {/* Tech Tags - Pushed to bottom */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[11px] font-medium tracking-wide uppercase rounded-md bg-white/5 text-cyan-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 text-[11px] font-medium rounded-md bg-white/5 text-gray-400 border border-white/5">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CENTER MODAL (Click to open, much better UX) */}
      <AnimatePresence>
        {activeIndex !== null && (
          <>
            {/* Blur Background */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveIndex(null)}
            />

            {/* Modal Box */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden w-full max-w-5xl pointer-events-auto flex flex-col md:flex-row max-h-[90vh]">
                
                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setActiveIndex(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-black/50 hover:bg-white/10 border border-white/10 transition-colors z-20 backdrop-blur-md group"
                >
                  <X size={20} className="text-gray-400 group-hover:text-white" />
                </button>

                {/* Modal Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10" />
                  <img
                    src={projects[activeIndex].image}
                    alt={projects[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Modal Content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                  <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase font-semibold mb-3">
                    Case Study
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                    {projects[activeIndex].title}
                  </h2>

                  <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                    {projects[activeIndex].desc}
                  </p>

                  <div className="flex gap-2 flex-wrap mb-10">
                    {projects[activeIndex].tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 mt-auto">
                    <a 
                      href={projects[activeIndex].link} 
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a 
                      href={projects[activeIndex].github} 
                      className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-700 hover:border-white hover:text-white text-gray-300 font-semibold transition-all bg-white/5"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}