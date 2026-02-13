import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { X } from "lucide-react";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);
  const timeoutRef = useRef(null);

  const projects = [
    {
      title: "SMT Rack System",
      desc: "Real-time rack monitoring and inventory management system.",
      tech: ["React", "MQTT", "Prisma"],
      image:
        "https://images.unsplash.com/photo-1581090700227-1e8c3a6b1d9f?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "Job Portal",
      desc: "Role-based job posting and application management platform.",
      tech: ["React", "REST API"],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "E-Commerce UI",
      desc: "Modern responsive shopping UI with clean UX.",
      tech: ["Tailwind", "Responsive"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1470&auto=format&fit=crop",
    },
  ];

  const handleEnter = (index) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(index);
    }, 150);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(null);
    }, 200);
  };

  const handleClose = () => {
    clearTimeout(timeoutRef.current);
    setActiveIndex(null);
  };

  return (
    <section className="relative bg-[#070707] px-6 py-24 overflow-hidden">

      {/* PROJECT GRID */}
      <div
        className={`max-w-6xl mx-auto grid md:grid-cols-3 gap-10 transition duration-300 ${
          activeIndex !== null ? "opacity-0 pointer-events-none" : ""
        }`}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => handleEnter(index)}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="cursor-pointer rounded-2xl p-7 bg-[#111] border border-white/10 hover:border-orange-500/40"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CENTER MODAL */}
      <AnimatePresence>
        {activeIndex !== null && (
          <>
            {/* Blur Background */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => clearTimeout(timeoutRef.current)}
              onMouseLeave={handleLeave}
            >
              <div className="relative bg-[#0f0f0f] border border-white/10 rounded-3xl shadow-2xl overflow-hidden w-[75vw] max-w-5xl">
                
                {/* CLOSE BUTTON */}
                <button
                  onClick={handleClose}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition"
                >
                  <X size={20} className="text-white" />
                </button>

                <div className="grid md:grid-cols-2">
                  
                  {/* Image */}
                  <div className="h-[400px] md:h-auto">
                    <img
                      src={projects[activeIndex].image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-12 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                      {projects[activeIndex].title}
                    </h2>

                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                      {projects[activeIndex].desc}
                    </p>

                    <div className="flex gap-3 flex-wrap">
                      {projects[activeIndex].tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
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
