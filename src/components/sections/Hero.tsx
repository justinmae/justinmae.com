
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 animate-fade-in">
      <span className="text-accent-primary font-medium mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        Software Engineer
      </span>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        Crafting AI to Simplify Your Life
      </h1>
      <div className="flex gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
        <Button 
          className="bg-accent-primary hover:bg-accent-secondary transition-colors"
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </Button>
      </div>
      <div className="flex gap-6 mt-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
        <a 
          href="https://github.com/justinmae" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-soft-dark/60 hover:text-accent-primary transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <a 
          href="https://linkedin.com/in/justinmae" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-soft-dark/60 hover:text-accent-primary transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a 
          href="https://twitter.com/jmae1" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-soft-dark/60 hover:text-accent-primary transition-colors"
        >
          <Twitter className="w-6 h-6" />
        </a>
        <a href="mailto:hello@justinmae.com" className="text-soft-dark/60 hover:text-accent-primary transition-colors">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};
