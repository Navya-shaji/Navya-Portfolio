import { useState } from "react";
import { Download, Eye, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";

export const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Navya_Shaji_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            My Resume
          </h2>
          <div className="w-24 h-1 bg-foreground mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Take a look at my professional background, skills, and experience. Download my resume to learn more about my qualifications.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <Card className="overflow-hidden border border-border shadow-lg bg-card">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Navya Shaji
                </h3>
                <p className="text-muted-foreground">
                  Full Stack Developer | UI/UX Enthusiast
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  <Button
                    onClick={() => setShowPreview(true)}
                    className="gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-full px-8"
                  >
                    <Eye className="w-4 h-4" />
                    View Resume
                  </Button>
                </motion.div>

                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <Button
                    onClick={handleDownload}
                    variant="outline"
                    className="gap-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-8"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Button>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Experience</p>
                  <p className="text-xl font-bold text-foreground">
                    2+ Years
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Skills</p>
                  <p className="text-xl font-bold text-foreground">
                    15+ Tech Stack
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Projects</p>
                  <p className="text-xl font-bold text-foreground">
                    10+ Completed
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6 font-light">
            Interested in working together?
          </p>
          <Button
            asChild
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </div>

      {/* Resume Modal */}
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-6xl w-full h-[90vh] p-0">
          <DialogHeader className="p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-semibold text-foreground">
                Resume Preview
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPreview(false)}
                className="h-8 w-8 p-0 hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>
          <div className="flex-1 p-6 overflow-hidden">
            <div className="w-full h-full bg-white rounded-lg shadow-inner">
              <iframe
                src="/Resume.pdf"
                className="w-full h-full border-0 rounded-lg"
                title="Resume Preview"
              />
            </div>
          </div>
          <div className="p-6 border-t border-border">
            <Button
              onClick={handleDownload}
              className="w-full gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-full"
            >
              <Download className="w-4 h-4" />
              Download Resume PDF
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
