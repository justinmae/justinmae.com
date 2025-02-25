
import { Home, User, Grid, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 py-4 px-6 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-accent-primary font-medium hover:text-accent-secondary transition-colors">
          Portfolio
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
            onClick={() => scrollToSection("about")}
          >
            <User className="w-4 h-4 mr-2" />
            About
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:inline-flex hover:text-accent-primary"
            onClick={() => scrollToSection("projects")}
          >
            <Grid className="w-4 h-4 mr-2" />
            Projects
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
            onClick={() => scrollToSection("about")}
          >
            <User className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => scrollToSection("projects")}
          >
            <Grid className="w-4 h-4" />
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
