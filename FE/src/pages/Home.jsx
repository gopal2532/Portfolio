import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0b0b0b] px-6">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="max-w-3xl text-center"
      >
        {/* Badge */}
        <span className="inline-block mb-6 rounded-full bg-orange-500/10 px-5 py-2 text-sm text-orange-400 border border-orange-500/20">
          Web Developer
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
          GOPALAKRISHNAN G <br />
          <span className="text-orange-400">
            delight and perform
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg">
          I create modern, animated, and scalable user interfaces using
          React, Tailwind CSS, and clean UX principles.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 transition px-7 py-3 rounded-lg text-black font-semibold">
            Let’s Talk
          </button>

          <button className="border border-gray-700 hover:border-orange-400 transition px-7 py-3 rounded-lg text-gray-300 hover:text-orange-400">
            View Work
          </button>
        </div>
      </motion.div>
    </section>
  );
}
