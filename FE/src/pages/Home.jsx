import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

/* 
   Animated Name (Letter Jump Effect)
 */
function AnimatedName({ text }) {
  const letters = text.split("");

  return (
    <motion.span
      className="inline-flex flex-wrap"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.08,
            repeat: Infinity,
            repeatDelay: 2,
          },
        },
      }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={{
            hidden: { y: 0, scale: 1 },
            visible: {
              y: [0, -12, 0],
              scale: [1, 1.08, 1],
              transition: {
                duration: 0.4,
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

/* ---------------------------------
   Home Component
---------------------------------- */
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

          {/* NAME (LETTER JUMP ANIMATION) */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
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
              object-contain
              border border-orange-400/40
              bg-black
              
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
