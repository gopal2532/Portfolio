import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-4xl text-cyan-400 mb-10">Experience</h2>

      {["Frontend Developer", "Web Developer"].map((role, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="border-l-2 border-cyan-400 pl-6 mb-8"
        >
          <h3 className="font-semibold">{role}</h3>
          <p className="text-gray-400 text-sm">
            Built scalable UI, animations & APIs.
          </p>
        </motion.div>
      ))}
    </section>
  );
}
