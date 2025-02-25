
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-accent-primary font-medium mb-2 block">Contact</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
        
        <div className="flex gap-6 justify-center mb-12">
          <a 
            href="#" 
            className="text-soft-dark/60 hover:text-accent-primary transition-colors"
            aria-label="Github Profile"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="text-soft-dark/60 hover:text-accent-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="text-soft-dark/60 hover:text-accent-primary transition-colors"
            aria-label="Twitter Profile"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a 
            href="mailto:hello@justinmae.com" 
            className="text-soft-dark/60 hover:text-accent-primary transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <Card className="max-w-2xl mx-auto p-8 bg-white/80 backdrop-blur-sm">
          <form className="space-y-6">
            <div>
              <Input type="text" placeholder="Name" className="bg-soft-gray border-0" />
            </div>
            <div>
              <Input type="email" placeholder="Email" className="bg-soft-gray border-0" />
            </div>
            <div>
              <Textarea placeholder="Message" className="bg-soft-gray border-0 min-h-[150px]" />
            </div>
            <Button className="w-full bg-accent-primary hover:bg-accent-secondary transition-colors">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};
