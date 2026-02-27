import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const mainProjects = [
  {
    title: "Nextick",
    description: "A high-performance e-commerce ecosystem for luxury timepieces. Built with Node.js and MongoDB, featuring real-time inventory tracking, secure Razorpay checkout, and a sleek administrative command center.",
    image: "/Nextick.jpg",
    technologies: ["Node.js", "MongoDB", "Express", "Razorpay", "EJS"],
    github: "https://github.com/Navya-shaji/NextTIck-E-Commerce",
    demo: "https://nextick.offwego.online"
  },
  {
    title: "OffWeGo",
    description: "A sophisticated travel-tech platform engineered with Clean Architecture. Seamlessly manages global tour packages with a focus on type-safety, modularity, and an intuitive booking UX.",
    image: "/offwego-cover.jpg",
    technologies: ["React", "TypeScript", "Express", "Clean Architecture", "MongoDB"],
    github: "https://github.com/Navya-shaji/OffWeGo",
    demo: "https://offwego.online"
  }
];

const subProjects = [
  {
    title: "Occasia",
    description: "A world-class event management platform designed for prestigious events. Connects discerning clients with luxury service providers like exclusive venues and gourmet caterers using a seamless booking ecosystem.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/Navya-shaji",
    demo: "https://occasia-app-new.vercel.app/"
  },
  {
    title: "AI Studio",
    description: "Next-gen image enhancement suite leveraging neural networks for smart object removal and generative fill.",
    image: "/ai-studio.png",
    technologies: ["React", "AI APIs", "Tailwind"],
    github: "https://github.com/Navya-shaji/Ai-Image-genarator",
    demo: "https://ai-image-genarator-nu.vercel.app"
  },
  {
    title: "HOHO",
    description: "Festive real-time simulation tracking Santa's journey with interactive Christmas mini-games.",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&q=80",
    technologies: ["React", "Firebase", "Framer Motion"],
    github: "https://github.com/Navya-shaji/HoHo",
    demo: "https://app-for-santa.vercel.app"
  },
  {
    title: "Student System",
    description: "Enterprise-grade academic record manager implementing the Repository Pattern for rock-solid data integrity.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80",
    technologies: ["TypeScript", "PostgreSQL", "Node.js"],
    github: "https://github.com/Navya-shaji/StudentManagement-typescript",
    demo: "#"
  },
  {
    title: "Task Harmony",
    description: "Minimalist productivity engine designed to eliminate digital clutter through intuitive priority grouping.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80",
    technologies: ["React", "Vite", "Tailwind"],
    github: "https://github.com/Navya-shaji/to-do-list",
    demo: "#"
  }
];

export const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="pt-24 md:pt-44 pb-20 md:pb-32 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-[11px] font-black tracking-[0.2em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            The Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] uppercase font-heading">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Solutions</span>
          </h2>
        </motion.div>

        {/* Main Projects */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto mb-20 md:mb-32">
          {mainProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-white shadow-2xl shadow-gray-200/50 transition-all duration-500 hover:shadow-primary/5 flex flex-col h-full">

                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Floating Tech Stack Overlay */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-4 py-1.5 bg-gray-900/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest rounded-full border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Button
                      size="lg"
                      className="h-14 rounded-2xl bg-white text-gray-900 hover:bg-white/90 font-black shadow-2xl"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="w-5 h-5" />
                        Source
                      </a>
                    </Button>
                    {project.demo !== "#" && (
                      <Button
                        size="lg"
                        className="h-14 rounded-2xl bg-primary text-white hover:bg-primary/90 font-black shadow-2xl shadow-primary/20"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink className="w-5 h-5" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 md:p-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors tracking-normal uppercase font-heading">{project.title}</h3>
                    <div className="w-12 h-0.5 bg-primary/20" />
                  </div>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-medium line-clamp-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] font-black text-primary/80 uppercase tracking-widest mr-4">
                        # {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sub Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex items-end justify-between mb-12 px-2">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-normal uppercase font-heading">More Work</h3>
              <p className="text-gray-400 font-bold uppercase text-[10px] md:text-xs tracking-widest mt-2">Experimental & Side Projects</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => scroll("left")}
                className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-primary group hover:bg-primary/5 transition-all active:scale-90"
              >
                <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-primary group hover:bg-primary/5 transition-all active:scale-90"
              >
                <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="relative group/gallery">
            <div
              ref={scrollRef}
              className="flex gap-4 md:gap-8 overflow-x-auto pb-12 px-2 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollBehavior: 'smooth' }}
            >
              {subProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[300px] md:w-[380px] group/card snap-start"
                >
                  <div className="rounded-[1.5rem] md:rounded-[2rem] bg-white p-5 md:p-6 shadow-xl shadow-gray-200/40 transition-all duration-300 flex flex-col h-full">
                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 flex-shrink-0">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white text-gray-900 flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                          <Github className="w-6 h-6" />
                        </a>
                        {project.demo !== "#" && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                            <ExternalLink className="w-6 h-6" />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h4 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tighter">{project.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium line-clamp-2 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-50 text-primary/90 text-[9px] font-black rounded-lg uppercase tracking-widest border border-primary/5">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};
