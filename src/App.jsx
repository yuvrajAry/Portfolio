import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-gammaGreen selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Chatbot />

      <footer className="py-8 text-center text-gray-500 text-sm font-mono">
        <p>© {new Date().getFullYear()} Yuvraj Aryan. All rights reserved.</p>
        <p className="mt-2 text-gammaGreen font-bold">BUILT TO SMASH.</p>
      </footer>
    </div>
  );
}

export default App;
