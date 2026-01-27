import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { PageTransition } from "@/components/PageTransition";

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
              <div className="text-3xl font-black tracking-tighter text-gray-900 mb-1 uppercase">
                Navya Shaji
              </div>
              <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                Full Stack Developer • Based in India
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
              <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-2 font-mono">Reach Out</p>
              <a href="mailto:navyacs122511@gmail.com" className="text-xl font-black text-gray-900 hover:text-primary transition-colors border-b-2 border-primary/20 pb-1 uppercase tracking-tighter">
                navyacs122511@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">
              Built with Passion & React Shell
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-primary transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
