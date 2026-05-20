import React from 'react';
import D20Dice from './D20Dice';
import GradientText from './reactbits/GradientText';
import ScrollReveal from './reactbits/ScrollReveal';
import CountUp from './reactbits/CountUp';
import SpotlightCard from './reactbits/SpotlightCard';
import SplitText from './reactbits/SplitText';

const STATS = [
    { label: 'Coffee consumed', value: Infinity, suffix: '', icon: 'bx-coffee' },
    { label: 'Tabs open', value: 47, suffix: '', icon: 'bx-windows' },
    { label: 'Critical hits rolled', value: 20, suffix: 'x', icon: 'bx-dice-5' },
    { label: 'Episodes binged', value: 1701, suffix: '', icon: 'bx-tv' },
];

const About = () => {
    return (
        <section className="pt-24 pb-16 px-4 relative">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
                    <div>
                        <h2 className="font-display section-header text-3xl md:text-4xl font-bold">
                            About <GradientText className="font-display" colors={['#5B5BD6', '#FF7A6B', '#8B5CF6']}>Me</GradientText>
                        </h2>

                        <ScrollReveal>
                            <h3 className="text-xl font-medium mb-4 text-[var(--text)]">
                                Hey there! I'm Lydia Gketsi — a creative developer, AI enthusiast, and lifelong storyteller who thrives at the intersection of imagination and innovation.
                            </h3>

                            <div className="text-[var(--text-muted)] space-y-4 mb-6 leading-relaxed">
                                <p>
                                    Whether I'm building smart systems or spinning wild fantasy adventures, I'm always chasing that spark of <span className="italic text-[var(--accent)]">what if?</span>
                                </p>
                                <p>
                                    I've got a soft spot for intelligent assistants, machine learning, and designs that just make sense. I love blending art and logic to create experiences that feel intuitive, engaging, and a little bit magical. If it involves tech with heart or stories with teeth, I'm probably already working on it.
                                </p>
                                <p>
                                    Outside of dev life, I'm a proud D&amp;D dungeon master with a flair for the dramatic (sentient libraries and magical conspiracies, anyone?), a game dev tinkerer building a side-scroller powered by cosplay, and a caffeine-fueled idea machine with way too many tabs open.
                                </p>
                                <p className="text-[var(--text)]">
                                    Let's team up and build something clever, meaningful, and maybe even a little legendary.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="flex flex-wrap items-center gap-4 mt-4">
                            <span className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--accent-2)]">
                                <SplitText text="Roll for initiative!" delay={30} duration={0.4} />
                            </span>
                            <D20Dice />
                        </div>
                    </div>

                    {/* Character sheet */}
                    <SpotlightCard
                        className="p-6"
                        spotlightColor="rgba(255, 122, 107, 0.18)"
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <i className="bx bx-id-card text-2xl text-[var(--accent)]"></i>
                            <h3 className="font-display text-lg font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                                Character sheet
                            </h3>
                        </div>
                        <ul className="grid grid-cols-2 gap-4">
                            {STATS.map((stat) => (
                                <li
                                    key={stat.label}
                                    className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)]/40 p-4"
                                >
                                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs uppercase tracking-widest font-mono mb-2">
                                        <i className={`bx ${stat.icon}`}></i>
                                        {stat.label}
                                    </div>
                                    <div className="font-display text-2xl text-[var(--text)]">
                                        <CountUp to={stat.value} suffix={stat.suffix} duration={1.4} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
                            class: dreamer · alignment: chaotic creative
                        </p>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
};

export default About;
