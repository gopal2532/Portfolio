import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "SMT Rack System", tech: ["React", "MQTT", "Prisma"] },
    { title: "Job Portal", tech: ["React", "REST API"] },
    { title: "E-Commerce UI", tech: ["Tailwind", "Responsive"] },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-cyan-400 mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="relative bg-gray-900 p-6 rounded-2xl overflow-hidden"
          >
            <motion.div
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-cyan-500/10 opacity-0 transition"
            />
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <div className="flex gap-2 flex-wrap text-xs text-cyan-400">
              {p.tech.map((t, j) => (
                <span key={j} className="border border-cyan-400 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
