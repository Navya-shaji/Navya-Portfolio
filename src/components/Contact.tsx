import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Mail, Linkedin, Send, Sparkles, MessageSquare, Phone, Twitter, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

// Configuration for EmailJS
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
};

export const Contact = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) return;

    if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
      toast({
        title: "Configuration Missing",
        description: "Email service is not properly configured. Please check environment variables.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast({
        title: "Message Sent! 🚀",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ user_name: "", user_email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[11px] font-black tracking-[0.2em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Let's Sync Up
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 leading-[1] uppercase font-heading">
            Start A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">Conversation</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Card */}
              <div className="p-10 rounded-[2.5rem] bg-white shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />

                <h3 className="text-3xl font-black text-gray-900 mb-10 tracking-tighter uppercase flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full" />
                  Details
                </h3>

                <div className="space-y-6">
                  {[
                    { label: "Direct Call", value: "+91 8590834303", href: "tel:+918590834303", icon: Phone, color: "text-primary" },
                    { label: "Email Me", value: "navyacs122511@gmail.com", href: "mailto:navyacs122511@gmail.com", icon: Mail, color: "text-secondary" },
                    { label: "Location", value: "Kerala, India", href: "#", icon: MapPin, color: "text-orange-500" }
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-6 p-4 rounded-3xl hover:bg-gray-50 transition-all group"
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-white shadow-lg border border-gray-50 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="text-gray-900 font-bold text-lg">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Connect Card */}
              <div className="p-10 rounded-[2.5rem] bg-gray-900 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                <h4 className="text-2xl font-black mb-6 tracking-tighter uppercase">Follow My Journey</h4>
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
                      className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-white hover:text-gray-900 flex items-center justify-center transition-all duration-300"
                    >
                      <social.Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-100 relative">
              <div className="absolute top-10 right-10 opacity-5">
                <Send className="w-32 h-32" />
              </div>

              <form ref={form} onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Identifying As</label>
                    <Input
                      name="user_name"
                      placeholder="Your Name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      className="h-16 rounded-2xl border-2 border-gray-50 bg-gray-50/30 focus:bg-white focus:border-primary transition-all text-gray-900 font-bold px-6 text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Digital Address</label>
                    <Input
                      name="user_email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      className="h-16 rounded-2xl border-2 border-gray-50 bg-gray-50/30 focus:bg-white focus:border-primary transition-all text-gray-900 font-bold px-6 text-lg"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">The Mission</label>
                  <Textarea
                    name="message"
                    placeholder="Briefly describe your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="rounded-[2rem] border-2 border-gray-50 bg-gray-50/30 focus:bg-white focus:border-primary transition-all text-gray-900 font-bold p-8 text-lg resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-20 bg-gray-900 text-white hover:bg-primary rounded-[1.5rem] font-black text-xl shadow-2xl shadow-black/10 transition-all flex gap-4 active:scale-[0.98] group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">Initiating Uplink...</span>
                  ) : (
                    <>
                      Transmit Message
                      <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
