import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Hello World />";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            background: 'var(--bg-color)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-mono)'
        }}>
            <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                minHeight: '2.5rem'
            }}>
                {text} <span className="animate-blink">_</span>
            </div>

            <div style={{
                width: '200px',
                height: '2px',
                background: 'var(--surface-light)',
                borderRadius: '1px',
                overflow: 'hidden'
            }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'var(--accent-primary)',
                    animation: 'loading-bar 1.5s ease-in-out infinite'
                }} />
            </div>

            <style>
                {`
                @keyframes loading-bar {
                    0% { transform: translateX(-100%); }
                    50% { transform: translateX(0); }
                    100% { transform: translateX(100%); }
                }
                
                .animate-blink {
                    animation: blink 1s infinite;
                }
                `}
            </style>
        </div>
    );
};

export default LoadingScreen;
