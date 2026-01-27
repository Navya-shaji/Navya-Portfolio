import { GraduationCap, BookOpen, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
  {
    icon: BookOpen,
    title: "MERN Stack Development",
    organization: "Brototype, Kochi",
    period: "Present",
    description: "Intensive full-stack bootcamp focusing on modern engineering practices and scalable system design.",
    highlights: ["MERN Architecture", "System Design Patterns", "Agile Methodologies"]
  },
  {
    icon: Briefcase,
    title: "Freelance Web Developer",
    organization: "Self-Employed",
    period: "2024 - Present",
    description: "Architecting custom digital solutions for clients with a focus on performance and artistic UI.",
    highlights: ["E-commerce Solutions", "API Optimization", "Responsive Design"]
  },
  {
    icon: GraduationCap,
    title: "B.Sc. Mathematics",
    organization: "Little Flower College (CU)",
    period: "Completed",
    description: "Foundational training in analytical thinking, logic, and structural problem solving.",
    highlights: ["Mathematical Logic", "Algorithmic Thinking", "Advanced Analysis"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <div className="inline-block px-4 py-1 glass-panel rounded-full text-[10px] font-mono tracking-[0.4em] text-primary uppercase mb-6">
             // CAREER_MILESTONES
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-primary mb-4 uppercase">
            Career<span className="text-secondary font-handwritten italic lowercase ml-4">Path</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Artistic Single-line Timeline */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/10" />

            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative mb-28 ${isLeft ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:ml-auto"
                    }`}
                >
                  {/* Neon Dot */}
                  <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-[2rem] bg-white border-4 border-secondary shadow-lg flex items-center justify-center z-10 transition-transform hover:scale-110 active:scale-95 cursor-pointer`}>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content Container */}
                  <div className={`ml-24 md:ml-0 ${isLeft ? "md:mr-16" : "md:ml-16"}`}>
                    <div className="bg-white p-12 rounded-[4rem] border border-primary/5 shadow-xl hover:shadow-2xl transition-all group overflow-hidden relative">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className={`flex flex-col gap-4 mb-8 ${isLeft ? "md:items-end" : ""}`}>
                        <span className="text-xs font-black text-secondary uppercase tracking-widest bg-secondary/10 px-6 py-2 rounded-full">
                          {item.period}
                        </span>
                        <div>
                          <h3 className="text-3xl font-black text-primary mb-1 uppercase leading-tight">{item.title}</h3>
                          <p className="text-sm font-handwritten text-secondary italic text-lg">
                            {item.organization}
                          </p>
                        </div>
                      </div>

                      <p className="text-primary/60 mb-10 leading-relaxed font-medium text-lg">
                        {item.description}
                      </p>

                      <div className={`flex flex-wrap gap-3 ${isLeft ? "md:justify-end" : ""}`}>
                        {item.highlights.map((h, i) => (
                          <span key={i} className="text-[10px] font-black uppercase tracking-widest text-primary/40 border border-primary/10 px-4 py-2 rounded-xl">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
