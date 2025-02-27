
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
          Engineer building AI <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">to simplify your life</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <Button 
            className="bg-accent-primary hover:bg-accent-secondary transition-colors px-8 py-6 text-base w-full sm:w-auto"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
          
          <Button 
            variant="outline"
            className="border-accent-primary text-accent-primary hover:bg-accent-primary/10 transition-colors px-8 py-6 text-base w-full sm:w-auto"
            onClick={() => window.open("https://planlife.ai", "_blank")}
          >
            Visit PlanLife.ai <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
