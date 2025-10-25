import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Code2, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Following SOLID principles and best practices"
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Building fast, optimized applications"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Strong team player with excellent communication"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text  ">
              About Me
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforming ideas into elegant digital solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-border shadow-card">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  I'm a <span className="text-primary font-semibold">Full-Stack Web Developer</span> specializing 
                  in the MERN stack (MongoDB, Express.js, React.js, Node.js). With expertise in both 
                  <span className="text-accent font-semibold"> MVC and Clean Architecture</span> patterns, I build 
                  organized, maintainable, and scalable applications.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  My passion lies in creating <span className="text-primary font-semibold">high-performance web applications</span> that 
                  deliver exceptional user experiences. I'm proficient in RESTful API design, JWT authentication, 
                  and responsive UI development using TypeScript and Tailwind CSS.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  With a strong foundation in <span className="text-accent font-semibold">Data Structures and Algorithms</span> (50+ problems solved) 
                  and continuous learning mindset, I'm always exploring new technologies and best practices to 
                  improve my craft.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-border shadow-card hover:shadow-glow transition-smooth text-center h-full">
                    <CardContent className="p-6">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="/Resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
