import React from 'react';
import { SplashIntro } from './components/SplashIntro';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0E0E0E] text-[#F4F1E8]">
      <SplashIntro />
      <CursorGlow />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
