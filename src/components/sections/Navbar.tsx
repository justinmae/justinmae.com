
import { Home, Mail, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 py-4 px-6 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a 
          href="#" 
          className="flex items-center gap-2 group hover:text-accent-primary transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          <Code className="w-5 h-5 text-accent-primary" />
          <div className="flex flex-col">
            <span className="text-lg font-medium">Justin Mae</span>
            <span className="text-xs text-soft-dark/60 group-hover:text-accent-primary transition-colors">
              Founder, PlanLife.ai—Your AI Life Planner
            </span>
          </div>
        </a>
        
        <div className="flex gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:inline-flex hover:text-accent-primary"
            onClick={() => scrollToSection("home")}
          >
            <Home className="w-4 h-4 mr-2" />
            Home
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:inline-flex hover:text-accent-primary"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact
          </Button>

          {/* Mobile icons only */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => scrollToSection("home")}
          >
            <Home className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
