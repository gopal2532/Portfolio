import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql, SiPrisma } from "react-icons/si";

const skills = [
  { name: "React",       icon: FaReact,      color: "#61DAFB", desc: "UI Library"      },
  { name: "JavaScript",  icon: FaJs,         color: "#F7DF1E", desc: "Core Language"   },
  { name: "Tailwind",    icon: SiTailwindcss,color: "#38BDF8", desc: "CSS Framework"   },
  { name: "HTML5",       icon: FaHtml5,      color: "#E34F26", desc: "Markup"          },
  { name: "CSS3",        icon: FaCss3Alt,    color: "#1572B6", desc: "Styling"         },
  { name: "Node.js",     icon: FaNodeJs,     color: "#339933", desc: "Runtime"         },
  { name: "Express",     icon: SiExpress,    color: "#FFFFFF", desc: "Web Framework"   },
  { name: "MySQL",       icon: SiMysql,      color: "#4479A1", desc: "Database"        },
  { name: "Prisma",      icon: SiPrisma,     color: "#5A67D8", desc: "ORM"             },
  { name: "GitHub",      icon: FaGithub,     color: "#FFFFFF", desc: "Version Control" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 24, scale: 0.93 },
  visible: { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <section className="relative bg-[#030303] py-28 overflow-hidden min-h-screen flex flex-col justify-center">

      {/* ── background ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, var(--accent-primary)08 0%, transparent 55%), " +
            "radial-gradient(circle at 80% 20%, var(--accent-secondary)05 0%, transparent 50%)",
        }}
      />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">

        {/* ── header ── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">02. Tech Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            <span className="text-white">Tools of </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
              the Trade
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 mt-4 max-w-md mx-auto text-base"
          >
            Technologies I use every day to craft fast, scalable, and beautiful products.
          </motion.p>
        </div>

        {/* ── skills grid ── */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                variants={cardVariants}
                key={skill.name}
                className="group relative flex flex-col items-center justify-center gap-4 h-40 sm:h-48
                  rounded-2xl border border-white/5 bg-white/[0.015]
                  hover:border-white/10 cursor-default overflow-hidden
                  transition-all duration-500 hover:-translate-y-2"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 50px -12px ${skill.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* radial brand glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 50% 80%, ${skill.color}14 0%, transparent 65%)` }}
                />

                {/* top accent line */}
                <div
                  className="absolute top-0 left-[20%] right-[20%] h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)` }}
                />

                {/* icon wrapper */}
                <div className="relative flex items-center justify-center w-14 h-14">
                  {/* glow ring */}
                  <div
                    className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                    style={{ backgroundColor: skill.color }}
                  />
                  <Icon
                    className="relative text-5xl transition-all duration-500 text-white/20 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                </div>

                {/* name + desc */}
                <div className="text-center transition-all duration-500 group-hover:-translate-y-1">
                  <p className="text-sm font-extrabold text-white/80 group-hover:text-white transition-colors">
                    {skill.name}
                  </p>
                  <p className="text-[10px] text-gray-600 group-hover:text-gray-400 font-mono transition-colors mt-0.5">
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}