
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 animate-fade-in">
      <span className="text-accent-primary font-medium mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        Justin Mae, Founder, PlanLife.ai
      </span>
      <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        Engineer building AI to simplify your life
      </h1>
      <a 
        href="https://planlife.ai" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-xl md:text-2xl text-accent-primary hover:text-accent-secondary flex items-center gap-2 transition-all duration-300 mb-12 animate-fade-up font-medium"
        style={{ animationDelay: "0.4s" }}
      >
        PlanLife.ai—Your AI Life Planner
        <ExternalLink className="w-5 h-5 inline-block" />
      </a>
      <div className="flex gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
        <Button 
          className="bg-accent-primary hover:bg-accent-secondary transition-colors px-8 py-6 text-base"
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </Button>
      </div>
    </section>
  );
};
