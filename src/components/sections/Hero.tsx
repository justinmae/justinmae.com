
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
        Software Developer
      </span>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        Crafting Digital Experiences Through Code
      </h1>
      <p className="text-lg md:text-xl text-soft-dark/80 max-w-2xl mb-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
        I build elegant solutions to complex problems, focusing on clean code and exceptional user experiences.
      </p>
      <div className="flex gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
        <Button 
          className="bg-accent-primary hover:bg-accent-secondary transition-colors"
          onClick={() => scrollToSection("projects")}
        >
          View Projects
        </Button>
        <Button 
          variant="outline" 
          className="border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white transition-colors"
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </Button>
      </div>
      <div className="flex gap-6 mt-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
        <a href="#" className="text-soft-dark/60 hover:text-accent-primary transition-colors">
          <Github className="w-6 h-6" />
        </a>
        <a href="#" className="text-soft-dark/60 hover:text-accent-primary transition-colors">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="#" className="text-soft-dark/60 hover:text-accent-primary transition-colors">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="mailto:hello@justinmae.com" className="text-soft-dark/60 hover:text-accent-primary transition-colors">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};
