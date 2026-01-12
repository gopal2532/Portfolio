import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative bg-[#0b0b0b]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-6 py-24"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-8">
          Who I Am
        </h2>

        {/* Content card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-8 md:p-10">
          <p className="text-gray-400 leading-relaxed text-lg">
            I’m a passionate{" "}
            <span className="text-orange-400">Frontend Developer</span> with
            strong experience in building responsive, scalable, and
            user-friendly web applications.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-6">
            I enjoy crafting clean UI, smooth animations, and writing
            maintainable code using <span className="text-white">React</span>,{" "}
            <span className="text-white">Tailwind CSS</span>, and modern
            frontend tools.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
