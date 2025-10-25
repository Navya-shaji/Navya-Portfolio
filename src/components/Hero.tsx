import { Button } from "@/components/ui/button";
import { Github, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import developerAvatar from "@/assets/developer-avatar.png";

export const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img 
                  src={developerAvatar} 
                  alt="Navya Shaji - MERN Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 text-center md:text-left space-y-6"
            >
              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className=" text-white ">
                    Navya Shaji
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
                  MERN Stack Developer
                </h2>
                <p className="text-lg text-accent font-medium">
                  Building Scalable Web Applications
                </p>
              </div>

              <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Passionate about crafting high-performance web applications using MongoDB, Express.js, 
                React, and Node.js. Specialized in clean architecture, RESTful APIs, and responsive UI development.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  asChild
                >
                  <a href="#projects">
                    View Projects
                  </a>
                </Button>
                <Button 
                  variant="heroOutline" 
                  size="lg"
                  asChild
                >
                  <a href="#contact">
                    Contact Me
                  </a>
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  asChild
                >
                  <a href="#about">
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </div>

              <div className="flex gap-6 justify-center md:justify-start pt-4">
                <a 
                  href="https://github.com/Navya-shaji" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-smooth hover:text-primary hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="#contact"
                  className="transition-smooth hover:text-primary hover:scale-110"
                  aria-label="Email Contact"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};
