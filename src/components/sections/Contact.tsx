
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 px-4" id="contact">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
        <p className="text-soft-dark/80 mb-12 text-lg">Have a question or want to work together? Feel free to reach out!</p>
        
        <div className="flex gap-8 justify-center mb-8">
          <a 
            href="#" 
            className="text-soft-dark/60 hover:text-accent-primary transition-colors"
            aria-label="Github Profile"
          >
            <Github className="w-7 h-7" />
          </a>
          <a 
            href="#" 
            className="text-soft-dark/60 hover:text-accent-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          <a 
            href="#" 
            className="text-soft-dark/60 hover:text-accent-primary transition-colors"
            aria-label="Twitter Profile"
          >
            <Twitter className="w-7 h-7" />
          </a>
        </div>

        <a 
          href="mailto:hello@justinmae.com"
          className="inline-flex items-center gap-2 text-soft-dark/80 hover:text-accent-primary transition-colors mb-16"
        >
          <Mail className="w-6 h-6" />
          <span className="text-lg">hello@justinmae.com</span>
        </a>
        
        <Card className="max-w-2xl mx-auto p-8 md:p-10 bg-white/80 backdrop-blur-sm">
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
