import React, { useRef } from 'react';

const BentoTile = ({ tile, onClick }) => {
    const ref = useRef(null);

    const onMove = (e) => {
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        node.style.setProperty('--mb-x', `${x}px`);
        node.style.setProperty('--mb-y', `${y}px`);
        const rx = ((y / rect.height) - 0.5) * -6;
        const ry = ((x / rect.width) - 0.5) * 6;
        node.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };

    const onLeave = () => {
        const node = ref.current;
        if (!node) return;
        node.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    };

    return (
        <button
            ref={ref}
            type="button"
            onClick={onClick}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-6 text-left transition-transform duration-200 hover:border-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            style={{ minHeight: 160 }}
        >
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background:
                        'radial-gradient(280px circle at var(--mb-x, 50%) var(--mb-y, 50%), rgba(91, 91, 214, 0.18), transparent 60%)',
                }}
            />
            <div className="relative flex items-start gap-4">
                <span className="bg-[var(--accent)]/15 text-[var(--accent)] p-3 rounded-xl">
                    <i className={`bx ${tile.icon} text-2xl`}></i>
                </span>
                <div>
                    <h3 className="font-display text-lg font-semibold mb-1">{tile.title}</h3>
                    <p className="text-sm text-[var(--text-muted)]">{tile.subtitle ?? 'Click to view details'}</p>
                </div>
            </div>
            {tile.footer && <div className="relative mt-4 text-xs text-[var(--text-muted)]">{tile.footer}</div>}
        </button>
    );
};

const MagicBento = ({ tiles = [], onSelect = () => { }, className = '' }) => {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ${className}`}>
            {tiles.map((tile) => (
                <BentoTile key={tile.id} tile={tile} onClick={() => onSelect(tile.id)} />
            ))}
        </div>
    );
};

export default MagicBento;
