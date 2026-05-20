import React, { useEffect, useRef } from 'react';

const Magnet = ({ children, strength = 0.35, radius = 140, className = '' }) => {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;
        let raf = 0;
        const onMove = (e) => {
            const rect = node.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const dist = Math.hypot(dx, dy);
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                if (dist < radius) {
                    node.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
                } else {
                    node.style.transform = 'translate(0, 0)';
                }
            });
        };
        const onLeave = () => {
            cancelAnimationFrame(raf);
            node.style.transform = 'translate(0, 0)';
        };
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerleave', onLeave);
        return () => {
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerleave', onLeave);
            cancelAnimationFrame(raf);
        };
    }, [strength, radius]);

    return (
        <span ref={ref} className={`inline-block transition-transform duration-200 ease-out ${className}`}>
            {children}
        </span>
    );
};

export default Magnet;
