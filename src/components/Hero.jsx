
import { useState, useEffect } from 'react';
import RevealOnScroll from './RevealOnScroll';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const roles = ["Consultant Data Scientist", "Gen AI Engineer", "Product Developer", "Frontend Architect"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, roles]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: 'var(--header-height)'
        }}>
            {/* Background Effects */}
            <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: `
                    radial-gradient(circle at 20% 30%, rgba(0, 240, 255, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 70%, rgba(255, 0, 60, 0.08) 0%, transparent 50%)
                `,
                zIndex: -1,
                pointerEvents: 'none'
            }} />

            <div className="container" style={{
                zIndex: 1,
                textAlign: 'center',
                transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                transition: 'transform 0.1s ease-out',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <RevealOnScroll>
                    <span style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1rem',
                        fontWeight: 500,
                        letterSpacing: '0.2rem',
                        textTransform: 'uppercase',
                        marginBottom: '2rem',
                        display: 'block',
                        animation: 'fadeIn 1s ease-out'
                    }}>
                        Portfolio.2026 // Anuj Sharma
                    </span>

                    <h1 style={{
                        fontSize: 'clamp(4rem, 10vw, 9rem)',
                        lineHeight: 0.9,
                        marginBottom: '2.5rem',
                        letterSpacing: '-0.04em',
                        fontWeight: 800
                    }}>
                        CREATIVE <br />
                        <span className="text-gradient-animated">DEVELOPER</span>
                    </h1>

                    <div style={{
                        height: '2rem',
                        marginBottom: '3rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)'
                    }}>
                        <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>&gt;</span>
                        {text}
                        <span style={{
                            marginLeft: '2px',
                            animation: 'blink 1s infinite',
                            color: 'var(--accent-primary)'
                        }}>_</span>
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        justifyContent: 'center',
                        marginTop: '1rem'
                    }}>
                        <a href="#projects" className="btn btn-primary">
                            Selected Works
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Let's Talk
                        </a>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Hero;

