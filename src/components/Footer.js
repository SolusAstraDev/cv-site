import React from 'react';
import ShinyText from './reactbits/ShinyText';
import LogoLoop from './reactbits/LogoLoop';
import TextType from './reactbits/TextType';

const STACK_LOGOS = [
    { icon: 'bxl-react', label: 'React' },
    { icon: 'bx-wind', label: 'Tailwind' },
    { icon: 'bxl-javascript', label: 'JavaScript' },
    { icon: 'bxl-nodejs', label: 'Node.js' },
    { icon: 'bxl-python', label: 'Python' },
    { icon: 'bxl-java', label: 'Java' },
    { icon: 'bxl-sap', label: 'SAP' },
    { icon: 'bxl-git', label: 'Git' },
    { icon: 'bx-cube-alt', label: 'Three.js' },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative mt-24 border-t border-[var(--border)] bg-[var(--bg-elev)]/60 backdrop-blur">
            <div className="container mx-auto px-4 py-10">
                <div className="mb-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)] mb-3 font-mono">{'// stack'}</p>
                    <LogoLoop
                        logos={STACK_LOGOS}
                        speed={28}
                        gap={48}
                        renderLogo={(logo) => (
                            <span className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                                <i className={`bx ${logo.icon} text-2xl`}></i>
                                <span className="text-sm font-medium">{logo.label}</span>
                            </span>
                        )}
                    />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h3 className="font-display text-2xl font-bold mb-1">
                            <ShinyText text="Lydia Gketsi" speed={6} />
                        </h3>
                        <p className="text-[var(--text-muted)] text-sm">
                            Computer Science and Engineering Undergraduate
                        </p>
                    </div>

                    <div className="flex gap-3 items-center">
                        <a
                            href="https://github.com/SolusAstraDev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                            aria-label="GitHub"
                        >
                            <i className="bx bxl-github"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/angelosgketsis1701/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                            aria-label="LinkedIn"
                        >
                            <i className="bx bxl-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col md:flex-row gap-3 justify-between items-center text-sm">
                    <p className="text-[var(--text-muted)]">&copy; {currentYear} Lydia Gketsi. All rights reserved.</p>
                    <TextType
                        text="May the dice roll ever in your favor."
                        speed={32}
                        startDelay={300}
                        className="text-[var(--accent-2)] text-sm"
                    />
                </div>
                <p className="mt-3 text-center text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--text-muted)]">
                    Press <kbd className="px-1.5 py-0.5 rounded border border-[var(--border)]">/</kbd> anywhere for the dev console
                </p>
            </div>
        </footer>
    );
};

export default Footer;
