import { motion } from "framer-motion";
import { Download } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Personal / Project-Based",
    period: "2024 – Present",
    desc: "Built scalable, responsive user interfaces with smooth animations using React, Tailwind CSS, and modern UX principles.",
  },
  {
    role: "Web Developer",
    company: "Academic & Freelance Projects",
    period: "2023 – 2024",
    desc: "Developed full-stack web applications, integrated REST APIs, and worked with databases for real-world use cases.",
  },
];

export default function Resume() {
  return (
    <section className="relative bg-[#0b0b0b] py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Experience
          </h2>

          {/* DOWNLOAD BUTTON */}
          <motion.a
            href="/Gopalakrishnan_Resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              mt-6 md:mt-0 inline-flex items-center gap-3
              px-6 py-3 rounded-lg
              bg-orange-500/10 text-orange-400
              border border-orange-500/20
              hover:bg-orange-500 hover:text-black
              transition
            "
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative border-l border-white/10 pl-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="relative mb-14"
            >
              {/* TIMELINE DOT */}
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="absolute -left-[10px] top-2 w-4 h-4 rounded-full bg-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.6)]"
              />

              {/* CARD */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>

                <p className="text-sm text-orange-400 mt-1">
                  {exp.company} • {exp.period}
                </p>

                <p className="text-gray-400 mt-4 leading-relaxed">{exp.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(249,115,22,0.10),transparent_45%)] pointer-events-none" />
    </section>
  );
}
