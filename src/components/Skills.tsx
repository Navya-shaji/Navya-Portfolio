import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Cloud, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux", level: 80 }
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "REST APIs", level: 85 },
      { name: "JWT Auth", level: 85 },
      { name: "Clean Architecture", level: 80 }
    ]
  },
  {
    title: "Databases & Cloud",
    icon: Cloud,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "Vercel", level: 85 },
      { name: "AWS", level: 70 },
      { name: "Cloudinary", level: 80 }
    ]
  },
  {
    title: "Tools & Others",
    icon: GitBranch,
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Figma", level: 75 },
      { name: "npm", level: 85 }
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text ">
              Technical Skills
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-border shadow-card hover:shadow-glow transition-smooth h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2 }}
                            viewport={{ once: true }}
                            className="h-full gradient-primary rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 max-w-6xl mx-auto"
        >
          <Card className="border-border shadow-card">
            <CardHeader>
              <CardTitle>Additional Expertise</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Data Structures & Algorithms</h4>
                <p className="text-muted-foreground mb-3">
                  Arrays, Linked Lists, Stacks, Queues, Hash Tables, Trees, Trie, Graphs (50+ problems solved)
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Arrays", "Linked Lists", "Trees", "Graphs", "Hash Tables"].map((ds) => (
                    <Badge key={ds} variant="secondary" className="text-xs">
                      {ds}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Development Practices</h4>
                <div className="flex flex-wrap gap-2">
                  {["OOP", "SOLID Principles", "RESTful APIs", "Clean Code", "MVC", "Repository Pattern"].map((practice) => (
                    <Badge key={practice} variant="secondary" className="text-xs">
                      {practice}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
