import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Smooth spring animation (less jitter)
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="
        fixed top-0 left-0 right-0 h-[3px]
        origin-left z-[60]
        bg-accent-primary
        shadow-[0_0_12px_var(--accent-glow)]
      "
    />
  );
}
