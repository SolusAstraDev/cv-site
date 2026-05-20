import React from 'react';

const LogoLoop = ({
    logos = [],
    speed = 28,
    gap = 48,
    pauseOnHover = true,
    className = '',
    renderLogo,
}) => {
    const doubled = [...logos, ...logos];

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <style>{`
                @keyframes logoLoopScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
                .logo-loop-track { animation: logoLoopScroll ${speed}s linear infinite; }
                .logo-loop-track.paused:hover { animation-play-state: paused; }
            `}</style>
            <div
                className={`logo-loop-track flex w-max items-center ${pauseOnHover ? 'paused' : ''}`}
                style={{ gap: `${gap}px` }}
            >
                {doubled.map((logo, i) => (
                    <div key={i} className="shrink-0 flex items-center opacity-80 hover:opacity-100 transition-opacity">
                        {renderLogo ? renderLogo(logo, i) : (
                            <span className="text-sm text-[var(--text-muted)] font-medium">{logo.label ?? logo}</span>
                        )}
                    </div>
                ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent" />
        </div>
    );
};

export default LogoLoop;
