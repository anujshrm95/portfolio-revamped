import { useEffect, useRef } from 'react';

const BackgroundBlocks = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let mouseX = -1000;
        let mouseY = -1000;

        const blockSize = 50; // Grid size
        let cols = 0;
        let rows = 0;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            cols = Math.ceil(canvas.width / blockSize);
            rows = Math.ceil(canvas.height / blockSize);
        };

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const drawCross = (x, y, size, opacity) => {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 219, 222, ${opacity})`; // Cyan color
            ctx.lineWidth = 1;

            const halfSize = size / 2;
            const crossSize = 4; // Size of the cross arms

            // Horizontal line
            ctx.moveTo(x - crossSize, y);
            ctx.lineTo(x + crossSize, y);

            // Vertical line
            ctx.moveTo(x, y - crossSize);
            ctx.lineTo(x, y + crossSize);

            ctx.stroke();
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * blockSize + blockSize / 2;
                    const y = j * blockSize + blockSize / 2;

                    const dx = mouseX - x;
                    const dy = mouseY - y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    const maxDist = 300; // Radius of effect
                    let opacity = 0.05; // Base opacity

                    if (distance < maxDist) {
                        const intensity = 1 - (distance / maxDist);
                        opacity = 0.05 + (intensity * 0.8); // Scale up to 0.85
                    }

                    drawCross(x, y, blockSize, opacity);
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        handleResize(); // Initial setup
        render(); // Start loop

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                background: 'var(--bg-color)'
            }}
        >
            <canvas ref={canvasRef} style={{ display: 'block' }} />
        </div>
    );
};

export default BackgroundBlocks;
