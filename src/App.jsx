import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Process from './components/Process';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackgroundBlocks from './components/BackgroundBlocks';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`App ${isLoaded ? 'loaded' : ''}`} style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
        <BackgroundBlocks />
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Skills />
        <Process />
        <Projects />
        <Contact />

        <footer style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          borderTop: '1px solid var(--glass-border)',
          background: 'var(--surface-color)'
        }}>
          <p>&copy; {new Date().getFullYear()} Portfolio. Built with React & Vite.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
