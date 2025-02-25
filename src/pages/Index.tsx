
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/sections/Navbar";

const Index = () => {
  return (
    <div className="bg-gradient-to-br from-white to-soft-gray min-h-screen">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
