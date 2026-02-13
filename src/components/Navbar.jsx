
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '1rem 2rem', // Reduced vertical padding slightly for logo alignment
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Logo />
                <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <li>
                        <Link to="/" style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8, color: 'var(--text-primary)' }}>
                            Home
                        </Link>
                    </li>
                    <li>
                        {location.pathname === '/' ? (
                            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8, cursor: 'pointer' }}>
                                About
                            </a>
                        ) : (
                            <Link to="/#about" style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8 }}>About</Link>
                        )}
                    </li>
                    <li>
                        {location.pathname === '/' ? (
                            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8, cursor: 'pointer' }}>
                                Projects
                            </a>
                        ) : (
                            <Link to="/#projects" style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8 }}>Projects</Link>
                        )}
                    </li>
                    <li>
                        <Link to="/contact" style={{
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            color: 'var(--accent-primary)',
                            padding: '0.5rem 1rem',
                            border: '1px solid var(--accent-primary)',
                            borderRadius: '4px',
                            transition: 'all 0.3s ease'
                        }}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
