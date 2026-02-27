import { Github, Twitter, Linkedin, ChevronDown, Sparkles, Send, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafaf8] pt-24"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] opacity-40" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-12 lg:py-0">
        <div className="grid grid-cols-12 gap-8 items-center">

          {/* Left Content: Name & Socials */}
          <div className="col-span-12 lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-2">
                <Sparkles className="w-3 h-3" />
                Available for Projects
              </div>
              <h2 className="text-3xl md:text-4xl font-handwritten text-secondary opacity-80">
                Hi! I Am
              </h2>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-normal leading-[0.8] text-gray-900 uppercase font-heading">
                NAVYA<br />
                <span className="text-primary relative">
                  SHAJI.
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-2 left-0 h-2 bg-primary/20 -z-10"
                  />
                </span>
              </h1>
            </motion.div>

            {/* Social Icons & Location */}
            <div className="flex flex-col items-center lg:items-start gap-6 pt-10">
              <div className="flex gap-4">
                {[
                  { Icon: Github, href: "https://github.com/Navya-shaji", label: "Github" },
                  { Icon: Twitter, href: "https://x.com/navyacs122511", label: "Twitter" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/navya-shaji-b3b81b325/", label: "Linkedin" }
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                      backgroundColor: 'rgba(var(--primary), 0.1)'
                    }}
                    className="group relative w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                  >
                    <item.Icon className="w-6 h-6 group-hover:text-primary transition-colors" />
                    <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-gray-900 text-white text-[10px] px-2 py-1 rounded-md font-bold">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest"
              >
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  India
                </div>
              </motion.div>
            </div>
          </div>

          {/* Center: Profile Image Container */}
          <div className="col-span-12 lg:col-span-4 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative w-full aspect-square max-w-[320px] md:max-w-[450px] group"
            >
              {/* Layered Decorative Elements */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700 -z-10" />
              <div className="absolute inset-[-15px] rounded-full border-[1.5px] border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-[-30px] rounded-full border-[1px] border-solid border-secondary/10" />

              {/* Main Image Frame */}
              <div className="w-full h-full rounded-full overflow-hidden border-[16px] border-white relative z-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="/navya-cs.jpeg"
                  alt="Navya Shaji"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 md:-right-4 bottom-[15%] md:bottom-auto md:top-[20%] z-20 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl flex items-center gap-2 md:gap-3 backdrop-blur-md"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <div className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-tighter shadow-black">Developer</div>
                  <div className="text-base md:text-lg font-black text-gray-900 leading-none">Full Stack</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content: Quote & CTA */}
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-center items-center lg:items-end text-center lg:text-right space-y-12 order-3">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-[320px] relative"
            >
              <div className="absolute -left-4 -top-4 text-6xl text-primary/10 font-black">"</div>
              <p className="text-xl md:text-2xl font-bold text-gray-800 leading-[1.3] relative z-10">
                I build <span className="text-primary">scalable</span> backends and <span className="text-secondary">elegant</span> interfaces for the modern web.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-6 flex flex-col items-center lg:items-end"
            >
              <div className="flex flex-col items-center lg:items-end">
                <span className="text-4xl md:text-5xl font-black text-gray-900 leading-none tracking-tighter font-heading">Software</span>
                <div className="relative">
                  <span className="text-4xl md:text-5xl font-handwritten text-primary mt-[-5px]">Developer</span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="h-1 bg-secondary/30 absolute -bottom-1 right-0"
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Hero Footer: Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full"
          />
        </div>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Scroll Down</span>
      </motion.div>
    </section>
  );
};
