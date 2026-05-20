import React, { useEffect, useState } from 'react';
import Shuffle from './reactbits/Shuffle';
import AnimatedList from './reactbits/AnimatedList';
import SpotlightCard from './reactbits/SpotlightCard';
import BlurText from './reactbits/BlurText';
import ScrambledText from './reactbits/ScrambledText';

const PRESENTATIONS = [
    {
        id: 'ep',
        title: '"From Brain Drain to Brain Gain" @ European Parliment',
        date: 'FEB 2018',
        body: (
            <>
                Guest of MEP Stelios Kouloglou at Brussels (
                <a href="https://fb.watch/c1cmADOmhc/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Watch here</a>
                )
            </>
        ),
    },
    {
        id: 'tedx-crete',
        title: 'Tedx Technical University of Crete',
        date: 'MAY 2017',
        body: (
            <>
                A talk about innovation and creativity and the importance of inspiring to create. (
                <a href="https://youtu.be/iQMLE2c9aNY" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Watch here</a>
                )
            </>
        ),
    },
    {
        id: 'maker-faire',
        title: 'Speaker at Athens Mini Maker Faire',
        date: 'OCT 2016',
        body: 'A presentation of P.E.Ace and a discussion on the joy of creating.',
    },
    {
        id: 'silicon-valley',
        title: '"Greece as the Silicon Valley of Europe"',
        date: 'FEB 2015',
        body: 'Guest of the Greek students of the Imperial College of London',
    },
    {
        id: 'tedx-athens',
        title: 'Tedx Athens',
        date: 'NOV 2014',
        body: (
            <>
                A presentation of Portable Evasive Assistance (
                <a href="https://youtu.be/L_O3AF1Bkms" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Watch here</a>
                )
            </>
        ),
    },
];

const AWARDS = [
    {
        id: 'moke',
        title: 'Innovations and Entrepreneurship Competition MOKE — University of Ioannina',
        date: '2024',
        body: 'First place with the prototype of the device P.E.Ace Version 3 (Portable Evasive Assistance).',
    },
    {
        id: 'kotsovolos-tech',
        title: 'Thanks to Tech — Kotsovolos',
        date: '2020',
        body: 'Amongst the Top 10 ideas with the prototype of the device P.E.Ace Version 3 (Portable Evasive Assistance).',
    },
    {
        id: 'google-fair',
        title: 'Google Science Fair',
        date: '2014',
        body: 'Local Award for the idea and prototype of the device P.E.Ace (Portable Evasive Assistance).',
    },
];

const CERTS = [
    {
        id: 'fullstack',
        title: 'Full-Stack Developer',
        date: '',
        body: 'Professional certification from Codecademy covering full-stack web development with JavaScript, React, Node.js, and related technologies.',
    },
];

const QUOTES = [
    { text: 'I am, and always will be, the optimist. The hoper of far-flung hopes, and the dreamer of improbable dreams.', author: 'Eleventh Doctor', isAdAstra: false },
    { text: 'Ad astra per aspera.', author: 'NASA / Starfleet', isAdAstra: true },
    { text: 'Life must be worn gloriously.', author: 'Captain Christopher Pike', isAdAstra: false },
    { text: 'Laugh hard. Run fast. Be kind.', author: 'Twelfth Doctor', isAdAstra: false },
];

const renderEntry = (item) => (
    <SpotlightCard className="p-5 mb-4" spotlightColor="rgba(91, 91, 214, 0.16)">
        <div className="flex justify-between items-start gap-3 mb-2">
            <strong className="font-display text-lg leading-snug">{item.title}</strong>
            {item.date && (
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-2)] whitespace-nowrap">
                    {item.date}
                </span>
            )}
        </div>
        <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.body}</p>
    </SpotlightCard>
);

const QuoteCard = ({ quote }) => (
    <SpotlightCard className="p-8 md:p-10 max-w-3xl mx-auto" spotlightColor="rgba(139, 92, 246, 0.18)">
        <div className="text-5xl text-[var(--accent)]/50 mb-2 leading-none">
            <i className="bx bxs-quote-left"></i>
        </div>
        <blockquote className="font-display text-xl md:text-2xl italic text-[var(--text)] leading-snug mb-4">
            {quote.isAdAstra ? (
                <ScrambledText text={quote.text} radius={80} className="italic" />
            ) : (
                quote.text
            )}
        </blockquote>
        <footer className="font-mono text-sm uppercase tracking-[0.25em] text-[var(--accent-2)] text-right">
            — {quote.author}
        </footer>
    </SpotlightCard>
);

const Presentations = () => {
    const [quoteIndex, setQuoteIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setQuoteIndex((i) => (i + 1) % QUOTES.length), 6200);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="pt-24 pb-16 px-4 relative">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <div>
                        <h2 className="font-display text-2xl font-bold mb-6 text-[var(--accent)]">
                            <Shuffle text="Presentations" duration={900} />
                        </h2>
                        <AnimatedList
                            items={PRESENTATIONS}
                            renderItem={renderEntry}
                            stagger={0.08}
                            className="list-none"
                        />
                    </div>

                    <div>
                        <h2 className="font-display text-2xl font-bold mb-6 text-[var(--accent)]">
                            <Shuffle text="Awards" duration={800} />
                        </h2>
                        <AnimatedList
                            items={AWARDS}
                            renderItem={renderEntry}
                            stagger={0.08}
                            className="list-none"
                        />
                    </div>

                    <div>
                        <h2 className="font-display text-2xl font-bold mb-6 text-[var(--accent)]">
                            <Shuffle text="Certifications" duration={800} />
                        </h2>
                        <AnimatedList
                            items={CERTS}
                            renderItem={renderEntry}
                            stagger={0.08}
                            className="list-none"
                        />
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="font-display text-2xl font-bold mb-6 text-center text-[var(--accent)]">
                        <BlurText text="Favorite Quotes" delay={40} />
                    </h2>
                    <QuoteCard quote={QUOTES[quoteIndex]} />
                    <div className="flex gap-2 justify-center mt-6">
                        {QUOTES.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                aria-label={`Show quote ${i + 1}`}
                                onClick={() => setQuoteIndex(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${i === quoteIndex ? 'bg-[var(--accent)] scale-125' : 'bg-[var(--border)] hover:bg-[var(--accent)]/50'
                                    }`}
                            />
                        ))}
                    </div>
                    <p className="text-center mt-6 text-sm font-mono uppercase tracking-[0.3em] text-[var(--text-muted)]">
                        Live long and prosper.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Presentations;
