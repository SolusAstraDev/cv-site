import React, { useEffect, useRef } from 'react';

const Noise = ({ opacity = 0.05, className = '' }) => {
    const ref = useRef(null);

    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return undefined;
        const ctx = canvas.getContext('2d');
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        const resize = () => {
            canvas.width = Math.floor(window.innerWidth * dpr);
            canvas.height = Math.floor(window.innerHeight * dpr);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
        };
        resize();
        window.addEventListener('resize', resize);

        let raf = 0;
        const tick = () => {
            const img = ctx.createImageData(canvas.width, canvas.height);
            const buf = img.data;
            for (let i = 0; i < buf.length; i += 4) {
                const v = (Math.random() * 255) | 0;
                buf[i] = v;
                buf[i + 1] = v;
                buf[i + 2] = v;
                buf[i + 3] = 255;
            }
            ctx.putImageData(img, 0, 0);
            raf = setTimeout(() => requestAnimationFrame(tick), 100);
        };
        tick();

        return () => {
            window.removeEventListener('resize', resize);
            clearTimeout(raf);
        };
    }, []);

    return (
        <canvas
            ref={ref}
            className={className}
            style={{ position: 'fixed', inset: 0, pointerEvents: 'none', opacity }}
        />
    );
};

export default Noise;
