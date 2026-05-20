import React, { useEffect, useRef, useState } from 'react';

const PillNav = ({ items = [], activeId, onSelect, className = '' }) => {
    const listRef = useRef(null);
    const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });

    useEffect(() => {
        const list = listRef.current;
        if (!list) return;
        const node = list.querySelector(`[data-id="${activeId}"]`);
        if (!node) {
            setPill((p) => ({ ...p, opacity: 0 }));
            return;
        }
        const listRect = list.getBoundingClientRect();
        const rect = node.getBoundingClientRect();
        setPill({ left: rect.left - listRect.left, width: rect.width, opacity: 1 });
    }, [activeId, items]);

    return (
        <div
            ref={listRef}
            className={`relative inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg-elev)]/80 backdrop-blur p-1 ${className}`}
        >
            <span
                className="absolute top-1 bottom-1 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/40 transition-all duration-300 ease-out"
                style={{ left: pill.left, width: pill.width, opacity: pill.opacity }}
                aria-hidden
            />
            {items.map((item) => {
                const active = item.id === activeId;
                return (
                    <button
                        key={item.id}
                        type="button"
                        data-id={item.id}
                        onClick={() => onSelect?.(item.id)}
                        className={`relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors ${active ? 'text-[var(--accent)]' : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                            }`}
                    >
                        {item.label}
                    </button>
                );
            })}
        </div>
    );
};

export default PillNav;
