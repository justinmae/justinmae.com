
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack application built with React and Node.js",
      tech: ["React", "Node.js", "PostgreSQL"],
      github: "#",
      live: "#",
    },
    {
      title: "Project Two",
      description: "Real-time data visualization dashboard",
      tech: ["TypeScript", "D3.js", "Socket.io"],
      github: "#",
      live: "#",
    },
    {
      title: "Project Three",
      description: "Mobile-first e-commerce platform",
      tech: ["Next.js", "Stripe", "Tailwind CSS"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="py-20 px-4 bg-soft-gray" id="projects">
      <div className="max-w-6xl mx-auto">
        <span className="text-accent-primary font-medium mb-2 block">Projects</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Work</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-soft-dark/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 bg-soft-gray rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={project.github} className="text-soft-dark/60 hover:text-accent-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={project.live} className="text-soft-dark/60 hover:text-accent-primary transition-colors">
                  <Link className="w-5 h-5" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
