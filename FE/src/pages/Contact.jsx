import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative bg-[#0b0b0b]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl mx-auto px-6 py-24"
      >
        {/* Header */}

        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-10">
          Let’s Work Together
        </h2>

        {/* Form Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-8">
          <input
            type="email"
            placeholder="Your email"
            className="
              w-full mb-5 p-4 rounded-lg
              bg-black/40 text-white
              border border-white/10
              focus:outline-none focus:border-orange-400
              transition
            "
          />

          <textarea
            rows="4"
            placeholder="Tell me about your project"
            className="
              w-full mb-6 p-4 rounded-lg
              bg-black/40 text-white
              border border-white/10
              focus:outline-none focus:border-orange-400
              transition resize-none
            "
          />

          <button
            className="
              w-full py-4 rounded-lg font-semibold
              bg-orange-500 text-black
              hover:bg-orange-600 transition
            "
          >
            Send Message
          </button>
        </div>
      </motion.div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(249,115,22,0.10),transparent_45%)] pointer-events-none" />
    </section>
  );
}
