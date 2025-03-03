'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Message sent successfully! I'll get back to you soon."
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || "Failed to send message. Please try again."
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {submitStatus && (
            <div className={`mb-6 p-4 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {submitStatus.message}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Input 
                type="text" 
                name="name"
                placeholder="Name" 
                className="bg-soft-gray border-0" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input 
                type="email" 
                name="email"
                placeholder="Email" 
                className="bg-soft-gray border-0" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Textarea 
                name="message"
                placeholder="Message" 
                className="bg-soft-gray border-0 min-h-[150px]" 
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-accent-primary hover:bg-accent-secondary transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}; 