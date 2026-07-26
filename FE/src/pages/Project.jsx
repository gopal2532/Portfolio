import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink, Github, Trophy } from "lucide-react";
import Tilt from "../components/Tilt.jsx";

const projects = [
  {
    title: "Smart Reel Rack System",
    category: "systems",
    desc: "Maintains real-time inventory of component reels across racks. Supports adding/withdrawing reels, dispatching operator picklists, managing user-specific access roles, and tracking real-time quantity adjustments.",
    tech: ["React", "Node.js", "Express", "MySQL", "Tailwind"],
    image: "/smart_reel_rack.png",
    link: "#",
    github: "#",
    metrics: "Optimized picklist workflows and real-time reel tracking by location",
    challenges: "Handling concurrent transactions when multiple operators withdraw components from the same rack locations.",
    solutions: "Developed relational database tables with transaction locks in MySQL and designed Express API controllers to validate quantity balances in real-time.",
    results: "Operators trace reel positions instantly and update inventory counts on checkout, eliminating component location mismatches."
  },
  {
    title: "Job Portal Platform",
    category: "fullstack",
    desc: "An HR portal designed to schedule and manage candidate interviews, post vacancy announcements to social media channels, and coordinate or reschedule candidate meetings in real-time.",
    tech: ["React", "Node.js", "Express", "MySQL", "Tailwind"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1470&auto=format&fit=crop",
    link: "#",
    github: "#",
    metrics: "Streamlines scheduling and automates candidate meeting notifications",
    challenges: "Coordinating real-time calendar updates, rescheduling parameters, and integrating social media dispatch channels dynamically.",
    solutions: "Designed structured MySQL transactional tables and developed calendar scheduling routing with Express APIs to coordinate candidate reschedule slots.",
    results: "Automated candidate dispatch notifications and meeting links, significantly reducing HR recruitment coordination efforts."
  },
  {
    title: "Hostel Management System",
    category: "fullstack",
    desc: "Implemented comprehensive tracking for rooms, food & kitchen management, kitchen inventory, electricity bills, 2/3 sharing configurations, rent, advance payments, daily/weekly food menus, resident attendance, complaint raising, and separated role-based access for maintenance staff.",
    tech: ["React", "Node.js", "Express", "MySQL", "Tailwind"],
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1469&auto=format&fit=crop",
    link: "#",
    github: "#",
    metrics: "Features dedicated roles for admins, residents, and maintenance",
    challenges: "Designing a highly normalized MySQL database schema to handle roommates, kitchen inventory, electricity bills, attendance tracking, and complaint tickets without lag.",
    solutions: "Created relational SQL tables with optimized index paths and transactional REST API endpoints in Express to coordinate payments, complaints, and meal logs.",
    results: "Hostel administrators now manage room assignments, menus, billing, and member concerns in real-time, eliminating manual spreadsheets."
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  // Prevent background scrolling when modal is open
  if (typeof document !== "undefined") {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <section className="relative bg-[#050505] px-6 py-24 min-h-screen overflow-hidden">

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }}
      />

      {/* Decorative Glows */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none transition-colors duration-500" />
      <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-accent-secondary/5 blur-[120px] rounded-full pointer-events-none transition-colors duration-500" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-accent-primary transition-colors duration-500"></span>
            <span className="text-accent-primary font-mono text-sm tracking-widest uppercase font-semibold transition-colors duration-500">
              03. Featured Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            <span className="inline-block text-white">
              My Projects<span className="text-accent-primary transition-colors duration-500">.</span>
            </span>
          </h2>
        </motion.div>

        {/* PROJECT GRID */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => {
              const originalIndex = projects.findIndex((p) => p.title === project.title);
              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setActiveIndex(originalIndex)}
                  className="group relative cursor-pointer rounded-3xl overflow-hidden h-full"
                >
                  <Tilt className="w-full h-full p-5 bg-white/[0.01] border border-white/5 hover:border-accent-primary/30 hover:bg-white/[0.03] hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-500 shadow-lg shadow-black/50 flex flex-col">
                    {/* Card Image */}
                    <div className="relative h-48 w-full mb-6 overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-accent-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-100 group-hover:text-accent-primary transition-colors mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                        {project.desc}
                      </p>

                      {/* Performance metrics display */}
                      <div className="flex items-center gap-2 mb-6 bg-white/[0.02] border border-white/5 px-3 py-2 rounded-xl">
                        <Trophy size={14} className="text-accent-primary shrink-0" />
                        <span className="text-[11px] text-gray-300 font-medium truncate">
                          {project.metrics}
                        </span>
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.slice(0, 3).map((t, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-md bg-white/[0.02] text-accent-primary border border-accent-primary/15"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-3 py-1 text-[10px] font-bold rounded-md bg-white/[0.02] text-gray-400 border border-white/5">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {projects.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3.5 rounded-xl border border-white/10 hover:border-accent-primary hover:text-accent-primary text-gray-300 font-semibold transition-all duration-300 bg-white/[0.02] backdrop-blur-sm cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_var(--accent-glow)]"
            >
              {showAll ? "Show Less" : "View All Projects"}
            </button>
          </div>
        )}
      </div>

      {/* CENTER MODAL */}
      <AnimatePresence>
        {activeIndex !== null && (
          <>
            {/* Blur Background */}
            <motion.div
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-40 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveIndex(null)}
            />

            {/* Modal Box */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative bg-[#080808] border border-white/10 rounded-3xl shadow-[0_0_50px_var(--accent-glow)] overflow-hidden w-full max-w-5xl pointer-events-auto flex flex-col md:flex-row max-h-[92vh]">

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setActiveIndex(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 rounded-full bg-black/60 hover:bg-accent-primary/5 hover:border-accent-primary/30 border border-white/10 transition-colors z-20 backdrop-blur-md group cursor-pointer"
                >
                  <X size={18} className="text-gray-400 group-hover:text-white" />
                </button>

                {/* Modal Image */}
                <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-auto relative shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#080808] via-transparent to-transparent z-10 pointer-events-none" />
                  <img
                    src={projects[activeIndex].image}
                    alt={projects[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Modal Content */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col overflow-y-auto max-h-[50vh] md:max-h-[92vh]">
                  <span className="text-accent-primary font-mono text-sm tracking-widest uppercase font-semibold mb-3">
                    Case Study
                  </span>
                  <h2 className="text-3xl font-extrabold text-white mb-6 leading-tight">
                    {projects[activeIndex].title}
                  </h2>

                  {/* Highlights Banner */}
                  <div className="mb-6 p-4 rounded-2xl bg-accent-primary/5 border border-accent-primary/20">
                    <span className="text-[10px] uppercase tracking-widest text-accent-secondary font-bold font-mono">Key Accomplishment</span>
                    <p className="text-sm font-semibold text-white mt-1">{projects[activeIndex].metrics}</p>
                  </div>

                  {/* Breakdown sections */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-xs uppercase font-extrabold tracking-widest text-gray-500 mb-1">The Challenge</h4>
                      <p className="text-sm text-gray-300 leading-relaxed">{projects[activeIndex].challenges}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-extrabold tracking-widest text-gray-500 mb-1">Our Approach</h4>
                      <p className="text-sm text-gray-300 leading-relaxed">{projects[activeIndex].solutions}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-extrabold tracking-widest text-gray-500 mb-1">Results</h4>
                      <p className="text-sm text-gray-300 leading-relaxed">{projects[activeIndex].results}</p>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex gap-2 flex-wrap mb-8">
                    {projects[activeIndex].tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-lg bg-accent-primary/10 text-accent-primary border border-accent-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons (Commented out)
                  <div className="flex flex-wrap items-center gap-4 mt-auto pt-4 border-t border-white/5">
                    <a
                      href={projects[activeIndex].link}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-primary hover:bg-accent-secondary text-black font-extrabold transition-all duration-300 shadow-[0_0_15px_var(--accent-glow)] hover:shadow-[0_0_20px_var(--accent-glow)] cursor-pointer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={projects[activeIndex].github}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-accent-primary hover:text-accent-primary text-gray-300 font-bold transition-all duration-300 bg-white/[0.01]"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                  */}
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}