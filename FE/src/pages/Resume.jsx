import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Personal / Project-Based",
    period: "2024 – Present",
    desc: "Built scalable, responsive user interfaces with smooth animations using React, Tailwind CSS, and modern UX principles."
  },
  {
    role: "Web Developer",
    company: "Academic & Freelance Projects",
    period: "2023 – 2024",
    desc: "Developed full-stack web applications, integrated REST APIs, and worked with databases for real-world use cases."
  },
];

export default function Resume() {
  return (
    <section className="relative bg-[#0b0b0b] h-screen">
      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* Section Header */}
        <div className="mb-14">
          {/* <span className="text-sm uppercase tracking-widest text-orange-400/80">
            Resume
          </span> */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mb-12"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[10px] top-2 w-4 h-4 rounded-full bg-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.6)]" />

              {/* Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
                <h3 className="text-xl font-semibold text-white">
                  {exp.role}
                </h3>

                <p className="text-sm text-orange-400 mt-1">
                  {exp.company} • {exp.period}
                </p>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(249,115,22,0.10),transparent_45%)] pointer-events-none" />
    </section>
  );
}
