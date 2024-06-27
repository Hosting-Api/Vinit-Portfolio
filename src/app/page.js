import Image from "next/image";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";

export default function Home() {
  return (
    <div className="pt-24">
      {/* hero */}
      <div className="py-8">
        <Hero />
      </div>

      {/* about */}
      <div id="about" className="pt-32 px-2">
        <h1 className="text-default-text text-center py-2">About me</h1>
        <About />
      </div>

      {/* projects */}
      <div id="projects" className="pt-32 px-2">
        <h1 className="text-default-text text-center py-1"></h1>
        <Projects />
      </div>

      {/* Experience */}
      <div id="experience" className="pt-32 px-2">
        <h1 className="text-default-text text-center py-1"></h1>
        <Experience />
      </div>

      <div id="achievements" className="pt-32 px-2">
        <h1 className="text-default-text text-center py-1"></h1>
        <Achievements />
      </div>

      <div id="contact" className="pt-32 px-2">
        <h1 className="text-default-text text-center py-1">Contact me</h1>
        <Contact />
      </div>
    </div>
  );
}
