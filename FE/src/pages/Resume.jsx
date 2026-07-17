import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Briefcase, Calendar, GraduationCap, Award, X } from "lucide-react";

const experiences = [
  {
    role: "Associate Full Stack Developer",
    company: "Macsoft Electronics Controller",
    period: "10 Months – Present",
    desc: "Working with real-time projects, handling end-to-end frontend and backend development. Utilizing React, Node.js, Express, MySQL, JavaScript, Tailwind CSS, and GitHub to build and manage full-stack web applications.",
  },
  {
    role: "Frontend Developer Intern",
    company: "Tech Jose",
    period: "4 Months",
    desc: "Contributed to real-time production projects as an intern. Developed interactive user interfaces using React, styled with Tailwind CSS, and implemented modular, clean JavaScript logic.",
  },
];

const education = [
  {
    role: "B.E. in Electronics & Communication Engineering",
    company: "Sri Shakthi Institute of Engineering and Technology",
    period: "2020 – 2024",
    desc: "Studied core engineering principles, digital electronics.",
  },
  {
    role: "MERN Full Stack ",
    company: "Pumo Technovation",
    period: "8 Months",
    desc: "Completed intensive training focused on the MERN stack (MongoDB, Express, React, Node.js), building production-grade web components, RESTful API development.",
  },
];

export default function Resume() {
  const [activeTab, setActiveTab] = useState("work");
  const [showPreview, setShowPreview] = useState(false);

  const timelineData = activeTab === "work" ? experiences : education;

  return (
    <section className="relative bg-[#050505] py-24 min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }}
      />

      {/* Decorative Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none transition-colors duration-500" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-accent-secondary/5 blur-[120px] rounded-full pointer-events-none transition-colors duration-500" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">

        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-accent-primary transition-colors duration-500"></span>
              <span className="text-accent-primary font-mono text-sm tracking-widest uppercase font-semibold transition-colors duration-500">
                04. Journey
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              <span className="inline-block text-white">
                My Journey<span className="text-accent-primary transition-colors duration-500">.</span>
              </span>
            </h2>
          </div>

          {/* GLOWING DOWNLOAD BUTTON */}
          <motion.a
            href="/Gopalakrishnan_Resume.pdf"
            download
            onClick={() => setShowPreview(true)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-primary hover:bg-accent-secondary text-black font-extrabold transition-all duration-300 shadow-[0_0_15px_var(--accent-glow)] hover:shadow-[0_0_25px_var(--accent-glow)] w-full md:w-auto cursor-pointer"
          >
            <Download size={16} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* TIMELINE TABS */}
        <div className="flex gap-4 mb-16 border-b border-white/5 pb-px relative z-20">
          <button
            onClick={() => setActiveTab("work")}
            className={`pb-4 text-lg font-bold capitalize transition-all duration-300 relative cursor-pointer ${activeTab === "work" ? "text-accent-primary" : "text-gray-500 hover:text-gray-300"
              }`}
          >
            Work Experience
            {activeTab === "work" && (
              <motion.div
                layoutId="timelineTabLine"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-primary"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`pb-4 text-lg font-bold capitalize transition-all duration-300 relative cursor-pointer ${activeTab === "education" ? "text-accent-primary" : "text-gray-500 hover:text-gray-300"
              }`}
          >
            Education & Training
            {activeTab === "education" && (
              <motion.div
                layoutId="timelineTabLine"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-primary"
              />
            )}
          </button>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-white/5 ml-3 md:ml-4 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {timelineData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                  className="relative pl-8 md:pl-12 mb-12 last:mb-0 group"
                >
                  {/* TIMELINE DOT (Glowing Accent Color) */}
                  <span className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-accent-primary shadow-[0_0_15px_var(--accent-glow)] ring-4 ring-[#050505] transition-all duration-500" />

                  {/* TIMELINE CARD */}
                  <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-xl hover:border-accent-primary/20 hover:bg-white/[0.02] hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-500 shadow-lg shadow-black/50 relative overflow-hidden">

                    {/* Subtle internal glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-2 tracking-wide group-hover:text-accent-primary transition-colors">
                        {item.role}
                      </h3>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-400 mb-5 font-medium">
                        <span className="flex items-center gap-2">
                          {activeTab === "work" ? (
                            <Briefcase size={15} className="text-accent-primary transition-colors" />
                          ) : (
                            <GraduationCap size={15} className="text-accent-primary transition-colors" />
                          )}
                          {item.company}
                        </span>
                        <span className="hidden sm:block text-white/10">•</span>
                        <span className="flex items-center gap-2 text-accent-primary/80 transition-colors">
                          <Calendar size={15} />
                          {item.period}
                        </span>
                      </div>

                      <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* RESUME PREVIEW MODAL */}
      <AnimatePresence>
        {showPreview && (
          <>
            {/* Backdrop blur */}
            <motion.div
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100] cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPreview(false)}
            />

            {/* Modal window */}
            <motion.div
              className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-none"
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative bg-[#080808] border border-white/10 rounded-3xl shadow-[0_0_50px_var(--accent-glow)] overflow-hidden w-full max-w-4xl h-[85vh] pointer-events-auto flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0c0c0c]/80 backdrop-blur-md">
                  <h3 className="font-extrabold text-white text-base flex items-center gap-2 font-mono uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                    Resume Preview
                  </h3>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="p-2 rounded-full bg-black/60 hover:bg-accent-primary/5 hover:border-accent-primary/30 border border-white/10 transition-colors z-20 group cursor-pointer"
                  >
                    <X size={16} className="text-gray-400 group-hover:text-white" />
                  </button>
                </div>

                {/* PDF Viewer Frame */}
                <div className="flex-1 bg-[#050505]">
                  <iframe
                    src="/Gopalakrishnan_Resume.pdf"
                    title="Resume Preview"
                    className="w-full h-full border-none"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}