import React, { useState, useEffect } from 'react';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Presentations from './Presentations';

import BlurText from './reactbits/BlurText';
import SplitText from './reactbits/SplitText';
import TextPressure from './reactbits/TextPressure';
import DecryptedText from './reactbits/DecryptedText';
import RotatingText from './reactbits/RotatingText';
import SpotlightCard from './reactbits/SpotlightCard';
import Magnet from './reactbits/Magnet';
import StarBorder from './reactbits/StarBorder';
import FadeContent from './reactbits/FadeContent';

const ROLES = [
    { icon: 'bx-code-block', title: 'Software Developer', accent: 'text-[var(--accent)]' },
    { icon: 'bx-game', title: 'Game Designer', accent: 'text-[var(--accent-2)]' },
    { icon: 'bx-video-recording', title: 'Drone Enthusiast', accent: 'text-[var(--accent)]' },
    { icon: 'bx-book-bookmark', title: 'DnD Game Master', accent: 'text-[var(--accent-2)]' },
];

const TAGLINES = [
    'Inventor of quirky ideas',
    'Dreamer of improbable dreams',
    'Roller of natural 20s',
    'Plotter of magical conspiracies',
];

const Home = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            <section id="home" className="pt-28 pb-16 md:py-32 px-4 relative">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/2 space-y-5">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--bg-elev)]/60 backdrop-blur text-xs font-mono uppercase tracking-[0.25em] text-[var(--accent)]">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></span>
                                online · est. 1997
    
                            </div>

                            <h3 className="text-lg text-[var(--text-muted)]">
                                <BlurText text="Hello, I am" delay={50} duration={0.5} immediate />
                            </h3>

                            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none">
                                <TextPressure
                                    text="Lydia"
                                    minWeight={500}
                                    maxWeight={900}
                                    radius={160}
                                    gradient
                                />
                            </h1>

                            <p className="text-base md:text-lg font-mono text-[var(--text-muted)]">
                                <DecryptedText
                                    text="Computer Science & Engineering @ University of Ioannina"
                                    speed={35}
                                    maxIterations={18}
                                />
                            </p>

                            <p className="text-lg flex flex-wrap items-baseline gap-x-2 min-h-[2rem]">
                                <span className="text-[var(--text)]">I am the&nbsp;</span>
                                <RotatingText
                                    texts={TAGLINES}
                                    interval={2600}
                                    className="font-display font-semibold"
                                    gradient
                                />
                            </p>

                            <div className="flex gap-4 pt-2">
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

                            <div className="pt-4">
                                <Magnet strength={0.25} radius={140}>
                                    <StarBorder color="var(--accent)" speed="6s">
                                        <a
                                            href={`${process.env.PUBLIC_URL}/Resume.pdf`}
                                            download="resume-Lydia-Gketsi.pdf"
                                            className="inline-flex items-center gap-2 px-6 py-3 font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                                        >
                                            <i className="bx bx-download text-lg"></i>
                                            Download CV
                                        </a>
                                    </StarBorder>
                                </Magnet>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <FadeContent direction="up" delay={0.15} duration={0.7}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {ROLES.map((role) => (
                                        <SpotlightCard
                                            key={role.title}
                                            className="p-5"
                                            spotlightColor="rgba(91, 91, 214, 0.22)"
                                        >
                                            <i className={`bx ${role.icon} text-3xl mb-2 ${role.accent}`}></i>
                                            <h3 className="font-display font-semibold">{role.title}</h3>
                                            <SplitText
                                                text="—"
                                                className="text-xs text-[var(--text-muted)] mt-1 block"
                                                delay={20}
                                                duration={0.3}
                                            />
                                        </SpotlightCard>
                                    ))}
                                </div>
                            </FadeContent>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="relative">
                <About />
            </section>

            <section id="experience" className="relative">
                <Experience />
            </section>

            <section id="presentations" className="relative">
                <Presentations />
            </section>

            <section id="portfolio" className="relative">
                <Portfolio />
            </section>

            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-40 p-3 bg-[var(--accent)] text-white rounded-full shadow-[var(--shadow)] transition-all duration-300 hover:scale-110 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
                aria-label="Scroll to top"
            >
                <i className="bx bx-up-arrow-alt text-2xl"></i>
            </button>
        </>
    );
};

export default Home;
