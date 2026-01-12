import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: "SMT Rack System",
      desc: "Real-time rack monitoring and inventory management system.",
      tech: ["React", "MQTT", "Prisma"],
    },
    {
      title: "Job Portal",
      desc: "Role-based job posting and application management platform.",
      tech: ["React", "REST API"],
    },
    {
      title: "E-Commerce UI",
      desc: "Modern responsive shopping UI with clean UX.",
      tech: ["Tailwind", "Responsive"],
    },
  ];

  return (
    <section className="relative bg-[#0b0b0b] px-6 py-20">
      {/* PROJECT GRID */}
      <div
        className={`max-w-6xl mx-auto grid md:grid-cols-3 gap-8 transition-opacity duration-300
        ${activeIndex !== null ? "opacity-30" : "opacity-100"}`}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveIndex(index)}
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={{
              rest: {
                y: 0,
                borderColor: "rgba(255,255,255,0.1)",
              },
              hover: {
                y: -6,
                borderColor: "rgba(249,115,22,0.8)",
                transition: {
                  y: { duration: 0.2 },
                  borderColor: {
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                },
              },
            }}
            className="
              cursor-pointer
              bg-white/5
              border
              rounded-2xl
              p-7
            "
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4">{project.desc}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1 text-xs rounded-full
                    bg-orange-500/10 text-orange-400
                    border border-orange-500/20
                  "
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CLICK PREVIEW (70% SCREEN) */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#0b0b0b] border border-white/10 rounded-3xl p-12 shadow-2xl"
              style={{ width: "70vw", height: "70vh" }}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                {projects[activeIndex].title}
              </h2>

              <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                {projects[activeIndex].desc}
              </p>

              <div className="flex gap-3 flex-wrap">
                {projects[activeIndex].tech.map((t, i) => (
                  <span
                    key={i}
                    className="
                      px-4 py-2 rounded-full
                      bg-orange-500/10 text-orange-400
                      border border-orange-500/20
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="absolute bottom-6 right-8 text-sm text-gray-500">
                click outside to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
