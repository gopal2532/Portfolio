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
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiPrisma,
} from "react-icons/si";
import { stagger, fadeUp } from "../utils/motion";

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
];

export default function Skills() {
  return (
    <section className="relative bg-[#0b0b0b] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
            Tools & Technologies
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {skills.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="
                group bg-white/5 border border-white/10
                rounded-2xl p-6 flex flex-col items-center
                justify-center gap-4 backdrop-blur
              "
            >
              {/* Icon */}
              <Icon className="text-4xl text-orange-400 group-hover:scale-110 transition" />

              {/* Label */}
              <span className="text-sm font-medium text-white">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(249,115,22,0.12),transparent_45%)] pointer-events-none" />
    </section>
  );
}
