
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <span className="text-accent-primary font-medium mb-2 block">About Me</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Background & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-soft-dark/80 leading-relaxed">
              With a passion for creating innovative solutions, I specialize in building robust and scalable applications. My approach combines technical expertise with a keen eye for user experience.
            </p>
            <p className="text-soft-dark/80 leading-relaxed">
              I thrive on challenging projects that push the boundaries of what's possible in web development, always staying current with the latest technologies and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 bg-white/50 backdrop-blur-sm border border-soft-gray hover:border-accent-primary transition-colors">
              <h3 className="font-bold mb-2">Frontend</h3>
              <p className="text-soft-dark/60 text-sm">React, TypeScript, Next.js</p>
            </Card>
            <Card className="p-6 bg-white/50 backdrop-blur-sm border border-soft-gray hover:border-accent-primary transition-colors">
              <h3 className="font-bold mb-2">Backend</h3>
              <p className="text-soft-dark/60 text-sm">Node.js, Python, APIs</p>
            </Card>
            <Card className="p-6 bg-white/50 backdrop-blur-sm border border-soft-gray hover:border-accent-primary transition-colors">
              <h3 className="font-bold mb-2">Database</h3>
              <p className="text-soft-dark/60 text-sm">PostgreSQL, MongoDB</p>
            </Card>
            <Card className="p-6 bg-white/50 backdrop-blur-sm border border-soft-gray hover:border-accent-primary transition-colors">
              <h3 className="font-bold mb-2">DevOps</h3>
              <p className="text-soft-dark/60 text-sm">Docker, AWS, CI/CD</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
