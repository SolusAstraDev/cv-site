import React, { useEffect, useRef, useState } from 'react';

const formatNumber = (value, decimals) => {
    if (!Number.isFinite(value)) return '∞';
    return value.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });
};

const CountUp = ({
    to = 0,
    from = 0,
    duration = 1.6,
    decimals = 0,
    className = '',
    prefix = '',
    suffix = '',
}) => {
    const ref = useRef(null);
    const [display, setDisplay] = useState(from);
    const [armed, setArmed] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setArmed(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.4 }
        );
        obs.observe(node);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        if (!armed) return undefined;
        if (!Number.isFinite(to)) {
            setDisplay(to);
            return undefined;
        }
        const start = performance.now();
        let raf = 0;
        const tick = (t) => {
            const p = Math.min(1, (t - start) / (duration * 1000));
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(from + (to - from) * eased);
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [armed, to, from, duration]);

    return (
        <span ref={ref} className={`font-mono tabular-nums ${className}`}>
            {prefix}
            {Number.isFinite(display) ? formatNumber(display, decimals) : '∞'}
            {suffix}
        </span>
    );
};

export default CountUp;
