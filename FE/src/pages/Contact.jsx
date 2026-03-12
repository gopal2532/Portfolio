import { motion } from "framer-motion";
import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-[#050505] py-24 min-h-screen flex items-center overflow-hidden">
      
      {/* Subtle Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      {/* Decorative Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          
          {/* LEFT: Text & Contact Info */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-cyan-400"></span>
                <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase font-semibold">
                  05. What's Next?
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Let's Build Something <span className="text-cyan-400">Together.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                I'm currently open for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 pt-4">
              {/* Direct Info */}
              <div className="flex flex-col gap-4">
                <a href="mailto:hello@example.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors w-fit group">
                  <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium text-lg tracking-wide">hello@example.com</span>
                </a>
                
                <div className="flex items-center gap-4 text-gray-300 w-fit">
                  <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center">
                    <MapPin size={20} className="text-gray-400" />
                  </div>
                  <span className="font-medium text-lg tracking-wide">Coimbatore, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <a href="#" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all hover:-translate-y-1">
                  <Github size={22} />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-all hover:-translate-y-1">
                  <Linkedin size={22} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Contact Form Card */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/[0.02] border border-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Your Message</label>
                  <textarea
                    rows="5"
                    placeholder="Tell me about your project, timeline, and budget..."
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-[0.98]"
                >
                  <Send size={20} />
                  Send Message
                </button>

              </form>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}