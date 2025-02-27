
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
        Justin Mae, Founder, <a href="https://planlife.ai" target="_blank" rel="noopener noreferrer" className="hover:underline">PlanLife.ai</a>
      </span>
      <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        Engineer building AI to simplify your life
      </h1>
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
