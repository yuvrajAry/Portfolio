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
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-gtaGreen selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Chatbot />

      <footer className="py-8 text-center text-gray-600 text-sm font-hud bg-black">
        <p>© {new Date().getFullYear()} Yuvraj Aryan. Los Santos, SA.</p>
        <p className="mt-2 text-gtaGreen font-bold uppercase">Wasted? Respawn.</p>
      </footer>
    </div>
  );
}

export default App;
