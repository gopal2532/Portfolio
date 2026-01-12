import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center bg-[#0b0b0b] px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* TEXT CONTENT */}
        <div className="text-center md:text-left">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className=" inline-block mb-6 rounded-full bg-orange-500/10 px-5 py-2 text-sm text-orange-400 border border-orange-500/20 items-center "
          >
            Web Developer
          </motion.span>

          {/* NAME (Running Animation) */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-4xl font-extrabold text-white"
          >
            <motion.span
              className="block"
              animate={{ x: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                text: "sm",
              }}
            >
              GOPALAKRISHNAN G
            </motion.span>
          </motion.h1>

          {/* TAGLINE */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-3xl md:text-4xl font-bold text-orange-400"
          >
            build clean web experiences
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-gray-400 mt-6 max-w-xl text-lg"
          >
            I create modern, animated, and scalable user interfaces using React,
            Tailwind CSS, and clean UX principles.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex justify-center md:justify-start gap-4"
          >
            <button className="bg-orange-500 hover:bg-orange-600 transition px-7 py-3 rounded-lg text-black font-semibold">
              Let’s Talk
            </button>

            <button className="border border-gray-700 hover:border-orange-400 transition px-7 py-3 rounded-lg text-gray-300 hover:text-orange-400">
              View Work
            </button>
          </motion.div>
        </div>
        {/* PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* ROTATING ORANGE RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
      absolute
      w-[410px] h-[410px]
      rounded-full
      border-2 border-dashed border-orange-400/80
    "
          />

          {/* SOFT GLOW */}
          <div className="absolute w-[440px] h-[440px] rounded-full bg-orange-500/20 blur-3xl" />

          {/* IMAGE */}
          <img
            src={profile}
            alt="Gopalakrishnan"
            className="
      relative z-10
      w-72 h-72
      md:w-96 md:h-96
      rounded-full
      object-cover
      border border-orange-400/40
      bg-black
    "
          />
        </motion.div>
      </div>
    </section>
  );
}
