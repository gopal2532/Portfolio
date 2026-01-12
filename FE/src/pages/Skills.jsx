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
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiPrisma,
} from "react-icons/si";
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
  { name: "VsCode", icon:VscVscode },
];

export default function Skills() {
  return (
    <section className="relative bg-[#0b0b0b] ">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* SECTION HEADER — SCROLL ANIMATION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Tools & Technologies
          </h2>
        </motion.div>

        {/* SKILLS GRID — STAGGER ON SCROLL */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {skills.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="
                relative group
                bg-white/5 border border-white/10
                rounded-2xl p-6
                flex flex-col items-center justify-center gap-4
              "
            >
              {/* ICON */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Icon className="text-4xl" />
              </motion.div>

              {/* LABEL */}
              <span className="text-sm font-medium text-white">
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
