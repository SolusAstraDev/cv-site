import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({
    children,
    className = '',
    blur = 8,
    distance = 24,
    duration = 700,
    threshold = 0.2,
}) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { threshold }
        );
        obs.observe(node);
        return () => obs.disconnect();
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                filter: visible ? 'blur(0px)' : `blur(${blur}px)`,
                transform: visible ? 'translateY(0)' : `translateY(${distance}px)`,
                transition: `opacity ${duration}ms ease, filter ${duration}ms ease, transform ${duration}ms ease`,
            }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
