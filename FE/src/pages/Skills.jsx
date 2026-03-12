import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiPrisma,
} from "react-icons/si";

// Strictly the 10 requested technologies with their exact official brand colors
const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Prisma", icon: SiPrisma, color: "#5A67D8" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-[#000000] py-32 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Ultra-subtle background dot matrix */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15]" 
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">
              Tech Stack
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-tight"
          >
            Tools of the Trade
          </motion.h2>
        </div>

        {/* 5x2 GRID LAYOUT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="
                  group relative h-36 sm:h-44 
                  bg-[#0a0a0a] border border-white/5 
                  rounded-2xl overflow-hidden cursor-crosshair
                  transition-all duration-500 ease-out
                  hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl
                "
                style={{ 
                  // Dynamically injecting the brand color shadow on hover
                  boxShadow: '0 10px 40px -10px transparent' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 40px -10px ${skill.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 40px -10px transparent';
                }}
              >
                
                {/* DYNAMIC RADIAL GLOW BACKGROUND */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
                  style={{ 
                    background: `radial-gradient(circle at center, ${skill.color}25 0%, transparent 70%)` 
                  }}
                />

                {/* CONTENT CONTAINER */}
                <div className="absolute inset-0 flex flex-col items-center justify-center transform group-hover:-translate-y-3 transition-transform duration-500 ease-out">
                  
                  {/* ICON (Grayscale to Brand Color) */}
                  <Icon 
                    className="text-5xl sm:text-6xl text-white/20 transition-all duration-500 ease-out filter grayscale group-hover:grayscale-0" 
                    style={{ 
                      color: 'inherit' // Inherits from the wrapper, overridden below on hover
                    }}
                  />
                  {/* Invisible color layer to force the color transition smoothly */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Icon className="text-5xl sm:text-6xl drop-shadow-lg" style={{ color: skill.color }} />
                  </div>

                </div>

                {/* TEXT LABEL (Slides up from bottom) */}
                <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <span className="text-sm font-bold tracking-wide" style={{ color: skill.color }}>
                    {skill.name}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}