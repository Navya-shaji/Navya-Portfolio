import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { PageTransition } from "@/components/PageTransition";
import { Github, Twitter, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-[#fafafc] overflow-hidden">
      {/* Premium Background Design */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Soft Decorative Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full blur-[160px] bg-primary/10 opacity-40 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full blur-[180px] bg-secondary/10 opacity-40" />
        <div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] rounded-full blur-[140px] bg-primary/5 opacity-30" />

        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.015] brightness-50" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/p6-dark.png')" }} />
      </div>

      <PageTransition>
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </PageTransition>

      {/* Footer */}
      <footer className="py-20 relative z-10 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-3xl font-black tracking-tighter text-gray-900 mb-1 uppercase font-heading">
                Navya Shaji
              </div>
              <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                Full Stack Developer • Based in India
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
              <div className="flex gap-4">
                {[
                  { Icon: Github, href: "https://github.com/Navya-shaji" },
                  { Icon: Twitter, href: "https://x.com/navyacs122511" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/navya-shaji-b3b81b325/" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300"
                  >
                    <social.Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="flex flex-col items-center md:items-end gap-1">
                <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest font-mono">Reach Out</p>
                <a href="mailto:navyacs122511@gmail.com" className="text-xl font-black text-gray-900 hover:text-primary transition-colors border-b-2 border-primary/20 pb-0.5 uppercase tracking-tighter font-heading">
                  navyacs122511@gmail.com
                </a>
              </div>
            </div>
          </div>


        </div>
      </footer>
    </div>
  );
};

export default Index;
