import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-6xl font-extrabold">
          Frontend <span className="text-cyan-400">Developer</span>
        </h1>
        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          I build animated, high-performance interfaces using React,
          Tailwind CSS & modern UX.
        </p>
      </motion.div>
    </section>
  );
}
