import { motion } from "framer-motion";
import { Download, Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Personal / Project-Based",
    period: "2024 – Present",
    desc: "Built scalable, responsive user interfaces with smooth animations using React, Tailwind CSS, and modern UX principles. Architected reusable component libraries and optimized performance.",
  },
  {
    role: "Web Developer",
    company: "Academic & Freelance Projects",
    period: "2023 – 2024",
    desc: "Developed full-stack web applications, integrated REST APIs, and worked with databases for real-world use cases. Managed application state and deployed end-to-end solutions.",
  },
];

export default function Resume() {
  return (
    <section className="relative bg-[#050505] py-24 min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* Subtle Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      {/* Decorative Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-cyan-400"></span>
              <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase font-semibold">
                04. Journey
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Experience<span className="text-cyan-400">.</span>
            </h2>
          </div>

          {/* GLOWING DOWNLOAD BUTTON */}
          <motion.a
            href="/Gopalakrishnan_Resume.pdf"
            download
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] w-full md:w-auto"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative border-l border-white/10 ml-3 md:ml-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              className="relative pl-8 md:pl-12 mb-12 last:mb-0 group"
            >
              {/* TIMELINE DOT (Glowing Cyan) */}
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.15 + 0.2 }}
                className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] ring-4 ring-[#050505]"
              />

              {/* EXPERIENCE CARD */}
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-xl hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-500 shadow-lg shadow-black/50 relative overflow-hidden">
                
                {/* Subtle internal glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-wide group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-400 mb-5 font-medium">
                    <span className="flex items-center gap-2">
                      <Briefcase size={16} className="text-cyan-500" />
                      {exp.company}
                    </span>
                    <span className="hidden sm:block text-white/20">•</span>
                    <span className="flex items-center gap-2 text-cyan-400/80">
                      <Calendar size={16} />
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}