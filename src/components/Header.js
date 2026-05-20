import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SoundButton from './SoundButton';
import PillNav from './reactbits/PillNav';
import ShinyText from './reactbits/ShinyText';
import RotatingText from './reactbits/RotatingText';

const SECTIONS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'presentations', label: 'Presentations' },
    { id: 'portfolio', label: 'Portfolio' },
];

const DOCTOR_QUOTES = ['Geronimo!', 'Allons-y!', 'Fantastic!', 'Spoilers.', 'Bow ties are cool.'];

const Header = ({ darkMode, toggleDarkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [logoBoost, setLogoBoost] = useState(false);
    const clickCount = useRef(0);
    const clickReset = useRef(0);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');

        clickCount.current += 1;
        clearTimeout(clickReset.current);
        clickReset.current = setTimeout(() => {
            clickCount.current = 0;
        }, 1200);
        if (clickCount.current >= 5) {
            clickCount.current = 0;
            setLogoBoost(true);
            setTimeout(() => setLogoBoost(false), 4500);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = SECTIONS.map((s) => s.id);
            const scrollPosition = window.scrollY + 120;
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offset = element.offsetTop;
                    if (scrollPosition >= offset && scrollPosition < offset + element.offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={handleLogoClick}
                        className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-elev)]/70 backdrop-blur font-display text-xl font-bold text-[var(--accent)] shadow-[var(--shadow)] hover:border-[var(--accent)] transition-colors"
                    >
                        <ShinyText text="Solus" speed={6} className="font-display tracking-wide" />
                        {logoBoost && (
                            <RotatingText
                                texts={DOCTOR_QUOTES}
                                interval={900}
                                className="text-xs font-mono uppercase tracking-widest text-[var(--accent-2)]"
                            />
                        )}
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-3">
                        <PillNav
                            items={SECTIONS}
                            activeId={activeSection}
                            onSelect={(id) => scrollToSection(id)}
                        />
                        <SoundButton
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full border border-[var(--border)] bg-[var(--bg-elev)]/70 backdrop-blur hover:border-[var(--accent)] transition-colors"
                            aria-label="Toggle dark mode"
                            clickVolume={0.4}
                            hoverVolume={0.2}
                        >
                            <i className={`bx ${darkMode ? 'bx-sun text-yellow-400' : 'bx-moon text-[var(--accent)]'} text-xl`}></i>
                        </SoundButton>
                    </div>

                    {/* Mobile */}
                    <div className="flex md:hidden items-center gap-2">
                        <SoundButton
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full border border-[var(--border)] bg-[var(--bg-elev)]/70 backdrop-blur"
                            aria-label="Toggle dark mode"
                            clickVolume={0.4}
                            hoverVolume={0.2}
                        >
                            <i className={`bx ${darkMode ? 'bx-sun text-yellow-400' : 'bx-moon text-[var(--accent)]'} text-xl`}></i>
                        </SoundButton>
                        <SoundButton
                            className="p-2 rounded-full border border-[var(--border)] bg-[var(--bg-elev)]/70 backdrop-blur"
                            onClick={() => setMenuOpen((o) => !o)}
                            aria-label="Toggle menu"
                            clickVolume={0.4}
                            hoverVolume={0.2}
                        >
                            <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'} text-2xl text-[var(--text)]`}></i>
                        </SoundButton>
                    </div>
                </div>

                {/* Mobile menu */}
                {menuOpen && (
                    <div className="md:hidden mt-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)]/95 backdrop-blur overflow-hidden">
                        {SECTIONS.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${activeSection === section.id
                                        ? 'text-[var(--accent)] bg-[var(--accent)]/10'
                                        : 'text-[var(--text)] hover:bg-[var(--accent)]/5'
                                    }`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
