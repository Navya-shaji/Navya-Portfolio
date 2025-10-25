import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import nextickImg from "@/assets/projects/nextick.jpg";
import offwegoImg from "@/assets/projects/offwego.jpg";
import studentSystemImg from "@/assets/projects/student-system.jpg";
import todoAppImg from "@/assets/projects/todo-app.jpg";

const projects = [
  {
    title: "Nextick",
    description: "An online store for watches and accessories, featuring user and admin functionalities with MVC architecture.",
    image: nextickImg,
    highlights: [
      "Built with MongoDB, Express.js, and EJS with 1,500+ lines of code",
      "Implemented OTP-based authentication with nodemailer",
      "Optimized performance with node-cache, reducing API calls by 20%",
      "Admin dashboard with data visualization and product management",
      "Integrated Razorpay payment gateway and Google OAuth"
    ],
    technologies: ["Express.js", "MongoDB", "Node.js", "EJS", "Razorpay", "MVC"],
    github: "#",
    demo: "#"
  },
  {
    title: "OffWeGo",
    description: "A travel package booking website built with clean architecture principles, focusing on modularity and scalability.",
    image: offwegoImg,
    highlights: [
      "Structured backend using Clean Architecture",
      "React and TypeScript frontend with responsive design",
      "RESTful APIs with JWT authentication",
      "MongoDB database for packages and bookings",
      "Modular design for easy feature extension"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "#",
    demo: "#"
  },
  {
    title: "Student Management System",
    description: "A backend application to manage student records using TypeScript and repository design pattern.",
    image: studentSystemImg,
    highlights: [
      "Implemented Repository Design Pattern",
      "CRUD operations for student management",
      "TypeScript for strong typing and maintainability",
      "Clean separation between business logic and data access"
    ],
    technologies: ["Node.js", "TypeScript", "Express", "Repository Pattern"],
    github: "#",
    demo: "#"
  },
  {
    title: "To-Do App",
    description: "A simple and interactive task management app built with React.",
    image: todoAppImg,
    highlights: [
      "Add, edit, complete, and delete tasks",
      "React state and props for dynamic UI",
      "Responsive CSS for mobile-friendly interface"
    ],
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    github: "#",
    demo: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building scalable applications with modern architecture patterns
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-border shadow-card hover:shadow-glow transition-smooth flex flex-col h-full overflow-hidden group">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" size="sm" asChild>
                      <a href={project.github} aria-label="View on GitHub">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="hero" size="sm" asChild>
                      <a href={project.demo} aria-label="View live demo">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4 flex-1">
                    <h4 className="font-semibold text-sm text-primary mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {project.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
