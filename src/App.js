import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import ParticlesComponent from "./ParticlesComponent"; // Adjust the path if necessary
import Experience from "./components/Experience";
export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font relative">
      <ParticlesComponent id="tsparticles" />
      <div className="relative z-10">
        <Navbar />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </div>
    </main>
  );
}
