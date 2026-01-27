import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Intersection Observer for active section tracking
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`rounded-2xl md:rounded-3xl flex justify-between items-center px-6 md:px-10 py-3 md:py-5 transition-all duration-500 ${isScrolled ? "glass-panel shadow-xl scale-[0.98]" : "bg-transparent md:bg-transparent"}`}>
          <div className="flex-1">
            <a href="#home" className="inline-block transition-transform duration-300 hover:scale-105">
              <img src="/navya-title.png" alt="Logo" className="h-16 md:h-32 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-sm font-bold tracking-tight transition-all duration-300 hover:text-secondary ${activeTab === link.href ? "text-secondary" : "text-primary/70"}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-primary hover:text-secondary transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div className="hidden lg:flex w-24"></div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              <nav className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      handleClick(e, link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-8 py-4 text-sm font-bold tracking-tight transition-all duration-300 ${activeTab === link.href ? "text-secondary bg-primary/5" : "text-primary/70"}`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
