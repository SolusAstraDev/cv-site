import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';

const FaultyTerminal = lazy(() => import('../reactbits/FaultyTerminal'));

const CommandPalette = ({ toggleDarkMode }) => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);

    const commands = [
        {
            id: 'roll',
            label: 'roll d20',
            desc: 'Focus the d20 dice',
            run: () => {
                const dice = document.querySelector('[data-d20-trigger]');
                if (dice) {
                    dice.click();
                    dice.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            },
        },
        {
            id: 'engage',
            label: 'engage',
            desc: 'Warp to Experience',
            run: () => {
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
            },
        },
        {
            id: 'tardis',
            label: 'tardis',
            desc: 'Toggle dark mode',
            run: () => toggleDarkMode?.(),
        },
        {
            id: 'lcars',
            label: 'lcars',
            desc: 'Jump to favorite quotes',
            run: () => {
                document.getElementById('presentations')?.scrollIntoView({ behavior: 'smooth' });
            },
        },
        {
            id: 'portfolio',
            label: 'projects',
            desc: 'Jump to Portfolio',
            run: () => {
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
            },
        },
        {
            id: 'home',
            label: 'home',
            desc: 'Beam back to top',
            run: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
        },
    ];

    useEffect(() => {
        const onKey = (e) => {
            if (e.target && /input|textarea/i.test(e.target.tagName) && !open) return;
            if (e.key === '/' && !open) {
                e.preventDefault();
                setOpen(true);
            } else if (e.key === 'Escape' && open) {
                setOpen(false);
                setQuery('');
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    useEffect(() => {
        if (open && inputRef.current) inputRef.current.focus();
        if (open) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

    const runCommand = (cmd) => {
        cmd.run();
        setOpen(false);
        setQuery('');
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (filtered[0]) runCommand(filtered[0]);
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[80] flex items-start justify-center p-6 pt-24 bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-[var(--accent)]/40 shadow-2xl">
                <div className="absolute inset-0 -z-10 opacity-50">
                    <Suspense fallback={<div className="w-full h-full bg-[var(--bg-elev)]" />}>
                        <FaultyTerminal color="#22D3EE" />
                    </Suspense>
                </div>
                <div className="bg-[var(--bg-elev)]/85 backdrop-blur p-5">
                    <div className="text-xs uppercase tracking-[0.3em] text-[var(--accent-2)] mb-3 font-mono">
                        ::lcars / dev console
                    </div>
                    <form onSubmit={onSubmit}>
                        <input
                            ref={inputRef}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="type a command... (try 'roll' or 'tardis')"
                            className="w-full bg-transparent text-lg font-mono focus:outline-none text-[var(--text)] placeholder:text-[var(--text-muted)]"
                        />
                    </form>
                    <ul className="mt-4 space-y-1 max-h-72 overflow-y-auto">
                        {filtered.map((cmd) => (
                            <li key={cmd.id}>
                                <button
                                    type="button"
                                    onClick={() => runCommand(cmd)}
                                    className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-mono hover:bg-[var(--accent)]/10 focus:bg-[var(--accent)]/10 focus:outline-none"
                                >
                                    <span className="text-[var(--text)]">&gt; {cmd.label}</span>
                                    <span className="text-[var(--text-muted)]">{cmd.desc}</span>
                                </button>
                            </li>
                        ))}
                        {filtered.length === 0 && (
                            <li className="text-sm font-mono text-[var(--text-muted)] px-3 py-2">no such command. press Esc.</li>
                        )}
                    </ul>
                    <div className="mt-4 text-[10px] text-[var(--text-muted)] font-mono uppercase tracking-widest">
                        esc to close · enter to run
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;
