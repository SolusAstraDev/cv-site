import React, { useCallback, useEffect, useRef } from 'react';

const ClickSpark = ({
    children,
    sparkColor = '#5B5BD6',
    sparkSize = 8,
    sparkRadius = 26,
    sparkCount = 10,
    duration = 480,
}) => {
    const canvasRef = useRef(null);
    const sparksRef = useRef([]);
    const rafRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return undefined;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth * window.devicePixelRatio;
            canvas.height = window.innerHeight * window.devicePixelRatio;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
        };
        resize();
        window.addEventListener('resize', resize);

        const tick = (t) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const dpr = window.devicePixelRatio;
            sparksRef.current = sparksRef.current.filter((s) => {
                const elapsed = t - s.start;
                if (elapsed >= duration) return false;
                const p = elapsed / duration;
                const ease = 1 - (1 - p) * (1 - p);
                const dist = sparkRadius * ease + sparkSize;
                const x1 = (s.x + Math.cos(s.angle) * dist) * dpr;
                const y1 = (s.y + Math.sin(s.angle) * dist) * dpr;
                const x2 = (s.x + Math.cos(s.angle) * (dist - sparkSize)) * dpr;
                const y2 = (s.y + Math.sin(s.angle) * (dist - sparkSize)) * dpr;
                ctx.strokeStyle = sparkColor;
                ctx.globalAlpha = 1 - p;
                ctx.lineWidth = 2 * dpr;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
                return true;
            });
            ctx.globalAlpha = 1;
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(rafRef.current);
        };
    }, [duration, sparkColor, sparkRadius, sparkSize]);

    const handleClick = useCallback(
        (e) => {
            const now = performance.now();
            const x = e.clientX;
            const y = e.clientY;
            for (let i = 0; i < sparkCount; i += 1) {
                sparksRef.current.push({
                    x,
                    y,
                    angle: (i / sparkCount) * Math.PI * 2,
                    start: now,
                });
            }
        },
        [sparkCount]
    );

    useEffect(() => {
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, [handleClick]);

    return (
        <>
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    inset: 0,
                    pointerEvents: 'none',
                    zIndex: 9999,
                }}
            />
            {children}
        </>
    );
};

export default ClickSpark;
