import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-6 text-cyan-400">About Me</h2>
      <p className="text-gray-400 leading-relaxed">
        I’m a passionate frontend developer with strong experience in
        building responsive, scalable, and user-friendly web applications.
        I enjoy crafting clean UI, smooth animations, and writing
        maintainable code using React and Tailwind CSS.
      </p>
    </motion.section>
  );
}
