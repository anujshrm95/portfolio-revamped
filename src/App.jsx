import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundBlocks from './components/BackgroundBlocks';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import { useEffect } from 'react';

// Wrapper to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div className={`App ${isLoaded ? 'loaded' : ''}`} style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
        <BackgroundBlocks />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <footer style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          borderTop: '1px solid var(--glass-border)',
          background: 'var(--surface-color)',
          marginTop: 'auto'
        }}>
          <p>&copy; {new Date().getFullYear()} Portfolio. Built with React & Vite.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
