// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Cursor() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     window.addEventListener("mousemove", e =>
//       setPos({ x: e.clientX, y: e.clientY })
//     );
//   }, []);

//   return (
//     <motion.div
//       animate={{ x: pos.x - 12, y: pos.y - 12 }}
//       className="fixed w-6 h-6 rounded-full bg-cyan-400 mix-blend-difference pointer-events-none z-[999]"
//     />
//   );
// }
