import { Button } from "@/components/ui/button";
import { Download, Code2, Database, Sparkles, Eye, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";

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

const TechGrid = () => {
  return (
    <div className="relative w-full p-2 md:p-6 group">
      {/* Refined Glass Container for Tech Stack */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-[3rem] shadow-2xl shadow-gray-200/30 -z-10 transition-all duration-700 group-hover:bg-white/60" />

      {/* Responsive Tech Cards Grid */}
      <div className="relative grid grid-cols-4 sm:grid-cols-5 gap-4 md:gap-5 max-w-2xl mx-auto py-8 px-4">
        {techStack.map((tech, index) => {
          const delay = index * 0.05;

          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay, duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                y: -5,
                zIndex: 30,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="relative group/item cursor-pointer flex flex-col items-center"
            >
              {/* Enhanced Tooltip - Moved to Top */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 transition-all duration-300 pointer-events-none z-50">
                <div className="bg-gray-900 text-white text-[9px] px-3 py-1.5 rounded-full whitespace-nowrap font-bold shadow-2xl uppercase tracking-widest scale-75 group-hover/item:scale-100 transition-transform origin-bottom">
                  {tech.category}
                </div>
              </div>

              {/* Refined Glass Tech Card */}
              <div
                className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-white shadow-sm flex flex-col items-center justify-center gap-1 transition-all duration-300 group-hover/item:shadow-xl group-hover/item:bg-white relative z-10"
              >
                <span className="text-xl md:text-2xl transform group-hover/item:scale-110 transition-transform duration-300">
                  {tech.icon}
                </span>
                <span className="text-[10px] md:text-[11px] font-bold text-gray-600 text-center px-1 uppercase tracking-tight group-hover/item:text-primary">
                  {tech.name}
                </span>
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

  // Live LeetCode Stats Fetching with Failover
  const { data: leetcodeData } = useQuery({
    queryKey: ['leetcodeStats'],
    queryFn: async () => {
      const sources = [
        { url: 'https://leetcode-stats-api.herokuapp.com/Navyacs', key: 'totalSolved' },
        { url: 'https://alfa-leetcode-api.onrender.com/Navyacs/solved', key: 'solvedProblem' },
        { url: 'https://leetcode-api-faisalshohag.vercel.app/Navyacs', key: 'totalSolved' }
      ];

      for (const source of sources) {
        try {
          const response = await fetch(source.url);
          if (response.ok) {
            const data = await response.json();
            if (data && data[source.key]) {
              return { totalSolved: data[source.key] };
            }
          }
        } catch (error) {
          console.warn(`Failed to fetch from ${source.url}:`, error);
        }
      }
      throw new Error('All LeetCode API sources failed');
    },
    refetchInterval: 3600000, // Refetch every hour to minimize rate limiting
    retry: 2,
  });

  const stats = [
    { label: "Projects", value: "20+", icon: <Code2 className="w-4 h-4" /> },
    { label: "Technologies", value: "15+", icon: <Database className="w-4 h-4" /> },
    {
      label: "LeetCode Solved",
      value: leetcodeData?.totalSolved?.toString() || "480",
      icon: <Trophy className="w-4 h-4 text-yellow-500" />
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="pt-44 pb-32 relative overflow-hidden bg-transparent"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            The Masterpiece
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-normal text-gray-900 leading-[1] uppercase font-heading">
            Crafting Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
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
              <span className="font-black text-gray-900">
                Navya Shaji
              </span>
              , a passionate full-stack developer specializing in the MERN stack. I bridge the gap between robust
              backend logic and elegant frontend design, creating{" "}
              <span className="text-primary font-black">
                scalable solutions
              </span>{" "}
              with{" "}
              <span className="text-primary font-black">
                clean architecture
              </span>.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-6 md:p-8 rounded-[2.5rem] bg-white shadow-xl shadow-gray-200/40 group transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-primary/70 mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1 tracking-normal uppercase font-heading">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] whitespace-nowrap">
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
                className="h-16 rounded-2xl px-10 hover:bg-primary/5 transition-all font-black text-lg group"
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
