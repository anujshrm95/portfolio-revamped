import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    const canvasRef = useRef(null);

    // Initial logo rendering
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Draw initial state
        drawLogo(ctx, width, height, 0);
    }, []);

    const drawLogo = (ctx, width, height, rotation) => {
        ctx.clearRect(0, 0, width, height);
        ctx.save();
        ctx.translate(width / 2, height / 2);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.translate(-width / 2, -height / 2);

        // Styling
        ctx.strokeStyle = '#00F0FF';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00F0FF';

        // Draw "A" shape (Abstract)
        ctx.beginPath();
        ctx.moveTo(width * 0.5, height * 0.2);
        ctx.lineTo(width * 0.2, height * 0.8);
        ctx.moveTo(width * 0.5, height * 0.2);
        ctx.lineTo(width * 0.8, height * 0.8);
        ctx.moveTo(width * 0.35, height * 0.6);
        ctx.lineTo(width * 0.65, height * 0.6);
        ctx.stroke();

        // Draw decorative ring
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, width * 0.45, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 0, 60, 0.5)'; // Secondary color
        ctx.stroke();

        ctx.restore();
    };

    const handleClick = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        let rotation = 0;
        const animate = () => {
            rotation += 20; // Fast spin
            drawLogo(ctx, width, height, rotation);

            if (rotation < 360) {
                requestAnimationFrame(animate);
            } else {
                drawLogo(ctx, width, height, 0); // Reset
            }
        };
        requestAnimationFrame(animate);
    };

    return (
        <Link to="/" onClick={handleClick} style={{ display: 'block', width: 50, height: 50 }}>
            <canvas
                ref={canvasRef}
                width={50}
                height={50}
                style={{ cursor: 'pointer' }}
            />
        </Link>
    );
};

export default Logo;
