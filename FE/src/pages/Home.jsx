import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

/* 
   Animated Name (Hover-triggered Letter Animation – ORANGE ONLY)
*/
function AnimatedName({ text }) {
  const letters = text.split("");

  return (
    <motion.span
      className="inline-flex flex-wrap cursor-pointer"
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={{
        hover: {
          transition: {
            staggerChildren: 0.06,
          },
        },
      }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={{
            rest: {
              y: 0,
              color: "#fdba74", // orange-300
              textShadow:
                "0 0 6px rgba(251,146,60,0.5), 0 0 18px rgba(251,146,60,0.3)",
            },
            hover: {
              y: [0, -14, 0],
              color: "#fb923c", // orange-400
              textShadow:
                "0 0 8px rgba(251,146,60,0.9), 0 0 30px rgba(251,146,60,0.7)",
              transition: {
                duration: 0.45,
                ease: "easeOut",
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* 
   Home Component
*/
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
            className="inline-block mb-6 rounded-full bg-orange-500/10 px-5 py-2 text-sm text-orange-400 border border-orange-500/20"
          >
            Web Developer
          </motion.span>

          {/* NAME – ORANGE NEON */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-extrabold leading-tight"
          >
            <AnimatedName text="GOPALAKRISHNAN G" />
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-gray-400 mt-6 max-w-xl text-lg"
          >
            Create modern, animated, and scalable user interfaces using React,
            Tailwind CSS, and clean UX principles.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex justify-center md:justify-start"
          >
            <button
              className="
              border border-gray-700
              hover:border-orange-400
              hover:text-orange-400
              transition
              px-7 py-3
              rounded-lg
              text-gray-300
            "
            >
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
              border-2 border-dashed
              border-orange-400/80
            "
          />

          {/* ORANGE GLOW */}
          <div className="absolute w-[380px] h-[380px] rounded-full bg-orange-500/20 blur-3xl" />

          {/* IMAGE */}
          <div
            className="
            relative z-10
            p-1
            rounded-full
            bg-orange-400
          "
          >
            <img
              src={profile}
              alt="Gopalakrishnan"
              className="
                w-72 h-72
                md:w-96 md:h-96
                rounded-full
                object-contain
                bg-black
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
