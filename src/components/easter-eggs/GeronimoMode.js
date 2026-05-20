import React, { useEffect, useState } from 'react';
import GlitchText from '../reactbits/GlitchText';

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

const GeronimoMode = () => {
    const [active, setActive] = useState(false);
    const [banner, setBanner] = useState(false);

    useEffect(() => {
        let buffer = [];
        const onKey = (e) => {
            if (e.target && /input|textarea/i.test(e.target.tagName)) return;
            buffer.push(e.key.length === 1 ? e.key.toLowerCase() : e.key);
            if (buffer.length > KONAMI.length) buffer = buffer.slice(-KONAMI.length);
            if (buffer.length === KONAMI.length && buffer.every((k, i) => k === KONAMI[i])) {
                setActive((prev) => !prev);
                setBanner(true);
                buffer = [];
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    useEffect(() => {
        if (active) document.body.classList.add('geronimo-mode');
        else document.body.classList.remove('geronimo-mode');
    }, [active]);

    useEffect(() => {
        if (!banner) return undefined;
        const t = setTimeout(() => setBanner(false), 2200);
        return () => clearTimeout(t);
    }, [banner]);

    if (!banner) return null;

    return (
        <div className="geronimo-banner" role="status" aria-live="polite">
            <GlitchText className="text-xl font-display tracking-wide">
                {active ? 'GERONIMO!' : 'Reverse the polarity'}
            </GlitchText>
        </div>
    );
};

export default GeronimoMode;
