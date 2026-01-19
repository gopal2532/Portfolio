import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiTailwindcss, SiExpress, SiMysql, SiPrisma } from "react-icons/si";
import { fadeUp, stagger } from "../utils/motion";

const skills = [
  { name: "React", icon: FaReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: FaJs },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MySQL", icon: SiMysql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "VS Code", icon: VscVscode },
];

export default function Skills() {
  return (
    <section className="relative bg-[#0b0b0b] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* SECTION HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Tools & Technologies
          </h2>
        </motion.div>

        {/* SKILLS GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {skills.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="
                relative group
                bg-white/5 border border-white/10
                rounded-2xl p-6
                flex flex-col items-center justify-center gap-4
                overflow-hidden
              "
            >
              {/* HOVER GLOW */}
              <div
                className="
                  absolute inset-0 opacity-0
                  bg-gradient-to-br from-orange-500/20 to-transparent
                  group-hover:opacity-100 transition
                "
              />

              {/* ICON */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative z-10"
              >
                <Icon className="text-4xl" />
              </motion.div>

              {/* LABEL */}
              <span className="relative z-10 text-sm font-medium text-white">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(249,115,22,0.12),transparent_45%)] pointer-events-none" />
    </section>
  );
}
