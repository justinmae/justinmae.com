
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 animate-fade-in relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <span className="text-accent-primary font-medium text-lg md:text-xl mb-6 inline-block animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Justin Mae, Founder, <a href="https://planlife.ai" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">PlanLife.ai</a>
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Building AI <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">to simplify your life.</span>
        </h1>
        
        <div className="flex justify-center items-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <Button 
            className="bg-accent-primary hover:bg-accent-secondary transition-colors px-8 py-6 text-base"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};
