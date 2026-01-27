import { Button } from "@/components/ui/button";
import { Download, Code2, Database, Sparkles, Eye, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const techStack = [
  { name: "MongoDB", color: "#47A248", icon: "🍃", category: "Database" },
  { name: "Express", color: "#000000", icon: "⚡", category: "Backend" },
  { name: "React", color: "#61DAFB", icon: "⚛️", category: "Frontend" },
  { name: "Node.js", color: "#68A063", icon: "🟢", category: "Backend" },
  { name: "TypeScript", color: "#3178C6", icon: "📘", category: "Language" },
  { name: "HTML", color: "#E34F26", icon: "🌐", category: "Frontend" },
  { name: "CSS", color: "#1572B6", icon: "🎨", category: "Frontend" },
  { name: "Bootstrap", color: "#7952B3", icon: "🅱️", category: "Frontend" },
  { name: "Tailwind", color: "#06B6D4", icon: "💨", category: "Frontend" },
  { name: "Git", color: "#F05032", icon: "📦", category: "Tools" },
  { name: "GitHub", color: "#181717", icon: "🐙", category: "Tools" },
  { name: "CI/CD", color: "#2088FF", icon: "🔄", category: "DevOps" },
  { name: "Docker", color: "#2496ED", icon: "🐳", category: "DevOps" },
  { name: "SQL", color: "#4479A1", icon: "🗄️", category: "Database" },
  { name: "DSA", color: "#FF6B6B", icon: "🧮", category: "Core" },
];

const stats = [
  { label: "Projects", value: "20+", icon: <Code2 className="w-4 h-4" /> },
  { label: "Technologies", value: "15+", icon: <Database className="w-4 h-4" /> },
  { label: "LeetCode Solved", value: "397+", icon: <Trophy className="w-4 h-4 text-yellow-500" /> },
];

const TechGrid = () => {
  return (
    <div className="relative w-full flex items-center justify-center p-4 md:p-12">
      {/* Premium Background Layer */}
      <div className="absolute inset-x-0 inset-y-8 bg-gradient-to-br from-primary/10 via-white to-secondary/10 rounded-[2.5rem] blur-[2px] shadow-2xl shadow-gray-200/50" />

      {/* Responsive Tech Cards Grid */}
      <div className="relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6 max-w-2xl px-2">
        {techStack.map((tech, index) => {
          const delay = index * 0.05;

          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay, duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.15,
                rotate: index % 2 === 0 ? 3 : -3,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="relative group cursor-pointer"
            >
              {/* Premium Glass Tech Card */}
              <div
                className="relative w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-white/60 backdrop-blur-md shadow-lg border border-white flex flex-col items-center justify-center gap-2 overflow-hidden transition-all group-hover:bg-white group-hover:shadow-2xl group-hover:border-primary/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-2xl md:text-3xl relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </span>
                <span className="text-[9px] md:text-[10px] font-black text-gray-500 relative z-10 text-center px-1 group-hover:text-primary uppercase tracking-tighter">
                  {tech.name}
                </span>
              </div>

              {/* Enhanced Tooltip */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 translate-y-2 group-hover:translate-y-0">
                <div className="bg-gray-900 text-white text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap font-bold shadow-2xl shadow-black/20 border border-white/10 uppercase tracking-widest">
                  {tech.category}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-32 relative overflow-hidden bg-transparent"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            The Masterpiece
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 leading-[1] uppercase font-heading">
            Crafting Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">
              Experiences
            </span>{" "}
            That Matter
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Narrative & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              I'm{" "}
              <span className="font-black text-gray-900 border-b-4 border-primary/20 bg-primary/5 px-2">
                Navya Shaji
              </span>
              , a passionate full-stack developer specializing in the MERN stack. I bridge the gap between robust
              backend logic and elegant frontend design, creating{" "}
              <span className="text-primary font-black italic">
                scalable solutions
              </span>{" "}
              with{" "}
              <span className="text-secondary font-black italic">
                clean architecture
              </span>.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 group transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-primary/70 mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">{stat.icon}</div>
                  <div className="text-4xl font-black text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.15em]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="h-16 rounded-2xl px-10 bg-gray-900 hover:bg-primary text-white font-black text-lg transition-all shadow-2xl shadow-black/10 group"
              >
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  View Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-16 rounded-2xl px-10 border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all font-black text-lg group"
              >
                <a href="/Resume.pdf" download className="flex items-center gap-3">
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  Download
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Tech Stack Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TechGrid />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
