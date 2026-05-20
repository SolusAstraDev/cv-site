import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const GRADIENT_STYLE = {
    backgroundImage: 'var(--gradient-accent)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
};

const RotatingText = ({
    texts = [],
    interval = 2800,
    className = '',
    children,
    gradient = false,
    as: Tag = 'span',
}) => {
    const [index, setIndex] = useState(0);

    const longest = useMemo(
        () => texts.reduce((a, b) => (a.length >= b.length ? a : b), texts[0] ?? ''),
        [texts]
    );

    useEffect(() => {
        if (!texts.length) return undefined;
        const id = setInterval(() => setIndex((i) => (i + 1) % texts.length), interval);
        return () => clearInterval(id);
    }, [texts, interval]);

    const current = texts[index] ?? children;
    const textStyle = gradient ? GRADIENT_STYLE : undefined;

    return (
        <Tag
            className={`inline-grid overflow-hidden align-bottom ${className}`}
            style={{ gridTemplateColumns: '1fr' }}
        >
            {/* Size the slot to the longest phrase */}
            <span
                className="invisible col-start-1 row-start-1 whitespace-nowrap select-none"
                aria-hidden="true"
            >
                {longest}
            </span>
            <AnimatePresence mode="sync" initial={false}>
                <motion.span
                    key={index}
                    style={textStyle}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 0.65, 0.3, 0.95] }}
                    className="col-start-1 row-start-1 inline-block whitespace-nowrap will-change-transform"
                >
                    {current}
                </motion.span>
            </AnimatePresence>
        </Tag>
    );
};

export default RotatingText;
