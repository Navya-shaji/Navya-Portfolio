import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
  {
    icon: BookOpen,
    title: "MERN Stack Development Program",
    organization: "Brototype, Kochi",
    period: "Present",
    type: "education",
    description: "Intensive full-stack development bootcamp focusing on MongoDB, Express.js, React, and Node.js with real-world project experience.",
    highlights: [
      "Built 6+ full-stack applications",
      "Learned Clean Architecture and design patterns",
      "Collaborated on team projects using Git/GitHub"
    ]
  },
  {
    icon: Briefcase,
    title: "Freelance Web Developer",
    organization: "Self-Employed",
    period: "2024 - Present",
    type: "experience",
    description: "Developed custom web solutions for clients, specializing in MERN stack applications.",
    highlights: [
      "Built responsive e-commerce platforms",
      "Implemented RESTful APIs and authentication systems",
      "Delivered projects on time with 100% client satisfaction"
    ]
  },
  {
    icon: GraduationCap,
    title: "B.Sc. Mathematics",
    organization: "Little Flower College (CU)",
    period: "Completed",
    type: "education",
    description: "Strong foundation in analytical thinking, problem-solving, and logical reasoning.",
    highlights: [
      "Developed strong analytical skills",
      "Excellence in mathematical problem-solving",
      "Foundation for algorithmic thinking"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent gradient-primary">
              Experience & Education
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in software development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

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
                  className={`relative mb-12 ${
                    isLeft ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary/10 border-4 border-background shadow-glow flex items-center justify-center z-10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="ml-24 md:ml-0 md:w-[calc(50%-3rem)]">
                    <Card className="border-border shadow-card hover:shadow-glow transition-smooth">
                      <CardHeader>
                        <div className={`flex items-start justify-between ${isLeft ? "md:flex-row-reverse" : ""}`}>
                          <div className={isLeft ? "md:text-right" : ""}>
                            <CardTitle className="text-xl mb-1">{item.title}</CardTitle>
                            <CardDescription className="text-sm font-medium text-primary">
                              {item.organization}
                            </CardDescription>
                          </div>
                          <span className="text-xs text-muted-foreground whitespace-nowrap ml-2 md:ml-0">
                            {item.period}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className={isLeft ? "md:text-right" : ""}>
                        <p className="text-sm text-muted-foreground mb-3">
                          {item.description}
                        </p>
                        <ul className={`space-y-1 text-sm text-muted-foreground ${isLeft ? "md:mr-0" : ""}`}>
                          {item.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className={`text-accent ${isLeft ? "md:order-2 md:ml-2" : "mr-2"}`}>•</span>
                              <span className="flex-1">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
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
