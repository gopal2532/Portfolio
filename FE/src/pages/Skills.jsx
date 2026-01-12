import { motion } from "framer-motion";
import { stagger, fadeUp } from "../utils/motion";

const skills = [
  ["HTML", 95],
  ["CSS", 90],
  ["JavaScript", 85],
  ["React", 88],
  ["Tailwind CSS", 92],
];

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible"
        className="text-4xl text-cyan-400 mb-10">Skills</motion.h2>

      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        className="grid md:grid-cols-3 gap-8">
        {skills.map(([name, level]) => (
          <motion.div key={name} variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-xl">
            <div className="flex justify-between">
              <span>{name}</span>
              <span className="text-cyan-400">{level}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded mt-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                className="h-2 bg-cyan-400 rounded"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
