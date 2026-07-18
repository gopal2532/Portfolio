import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Github, Linkedin, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e, field) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // Simulate database / formspree / emailjs network request
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-[#050505] py-16 md:py-24 flex items-center overflow-hidden">

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }}
      />

      {/* Decorative Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[450px] bg-accent-primary/5 blur-[150px] rounded-full pointer-events-none transition-colors duration-500" />

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

              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Let's Build Something <span className="inline-block text-accent-primary transition-colors duration-500">Together </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                I'm currently open for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 pt-4">
              {/* Direct Info */}
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:gopal994329@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-accent-primary transition-all duration-300 w-fit group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/[0.01] border border-white/5 flex items-center justify-center group-hover:bg-accent-primary/10 group-hover:border-accent-primary/30 transition-all duration-300">
                    <Mail size={18} className="text-gray-400 group-hover:text-accent-primary" />
                  </div>
                  <span className="font-semibold text-lg tracking-wide">gopal994329@gmail.com</span>
                </a>

                <div className="flex items-center gap-4 text-gray-300 w-fit">
                  <div className="w-12 h-12 rounded-full bg-white/[0.01] border border-white/5 flex items-center justify-center">
                    <MapPin size={18} className="text-gray-400" />
                  </div>
                  <span className="font-semibold text-lg tracking-wide">Coimbatore, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4 relative z-20">
                <a
                  href="https://github.com/gopal2532"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white/[0.01] border border-white/5 flex items-center justify-center text-gray-400 hover:text-accent-primary hover:border-accent-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gopalakrishnan-g-310a00358/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white/[0.01] border border-white/5 flex items-center justify-center text-gray-400 hover:text-accent-primary hover:border-accent-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Contact Form Card */}
          <motion.div variants={itemVariants} className="relative z-20">
            <div className="bg-white/[0.01] border border-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl relative min-h-[460px] flex flex-col justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {status !== "success" ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                    onSubmit={handleSubmit}
                    noValidate
                  >

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Your Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange(e, "name")}
                          disabled={status === "submitting"}
                          placeholder="John Doe"
                          className={`w-full bg-black border rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all duration-300 text-sm ${errors.name ? "border-red-500/50" : "border-white/10"
                            }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-400 font-mono mt-1 ml-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange(e, "email")}
                          disabled={status === "submitting"}
                          placeholder="john@example.com"
                          className={`w-full bg-black border rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all duration-300 text-sm ${errors.email ? "border-red-500/50" : "border-white/10"
                            }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-400 font-mono mt-1 ml-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Your Message</label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={(e) => handleInputChange(e, "message")}
                        disabled={status === "submitting"}
                        placeholder="Tell me about your project, timeline, and goals..."
                        className={`w-full bg-black border rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all duration-300 resize-none text-sm ${errors.message ? "border-red-500/50" : "border-white/10"
                          }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400 font-mono mt-1 ml-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-accent-primary hover:bg-accent-secondary text-black font-extrabold text-base transition-all duration-300 shadow-[0_0_20px_var(--accent-glow)] hover:shadow-[0_0_30px_var(--accent-glow)] active:scale-[0.99] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="text-center py-8 space-y-6 flex flex-col items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.15 }}
                    >
                      <CheckCircle2 className="w-16 h-16 text-accent-primary drop-shadow-[0_0_15px_var(--accent-glow)]" />
                    </motion.div>

                    <div className="space-y-2 max-w-sm">
                      <h3 className="text-2xl font-extrabold text-white">Message Sent!</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Thank you for reaching out. Your message has been successfully transmitted. I'll review and respond as soon as possible.
                      </p>
                    </div>

                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-xl border border-accent-primary/30 hover:border-accent-primary text-accent-primary font-bold text-sm bg-accent-primary/5 transition-all duration-300 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}