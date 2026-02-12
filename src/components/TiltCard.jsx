import { useRef, useState } from 'react';

const TiltCard = ({ children, className = '', style = {} }) => {
    const ref = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10; // Max 10 deg
        const rotateY = ((centerX - x) / centerX) * 10; // Max 10 deg

        setRotation({ x: rotateX, y: rotateY });
        setGlowPos({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100
        });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setOpacity(0);
    };

    return (
        <div
            ref={ref}
            className={`tilt-card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                ...style,
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: 'transform 0.1s ease-out',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px' // Ensure radius matches border
            }}
        >
            {/* Animated Border Gradient */}
            <div style={{
                position: 'absolute',
                inset: '-1px',
                background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                zIndex: 0,
                opacity: opacity ? 1 : 0.3,
                transition: 'opacity 0.3s ease'
            }} />

            {/* Content Container */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                background: 'rgba(10, 10, 10, 0.6)', // Slightly darker inner background
                backdropFilter: 'blur(20px)',
                height: '100%',
                borderRadius: '15px'
            }}>
                {children}
            </div>

            {/* Mouse Follow Glow */}
            <div
                className="glow-effect"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, rgba(0, 240, 255, 0.15), transparent 60%)`,
                    zIndex: 1,
                    pointerEvents: 'none',
                    mixBlendMode: 'screen'
                }}
            />
        </div>
    );
};

export default TiltCard;
