import React, { useEffect, useState } from 'react';
import GradientText from './reactbits/GradientText';
import SplitText from './reactbits/SplitText';
import Masonry from './reactbits/Masonry';
import TiltedCard from './reactbits/TiltedCard';
import PixelTransition from './reactbits/PixelTransition';
import Magnet from './reactbits/Magnet';
import FadeContent from './reactbits/FadeContent';

const portfolioItems = [
    {
        id: 'climate',
        image: '/images/climate.webp',
        title: 'Climate Data Visualization Tool',
        description:
            'A data-driven tool for exploring, analyzing and visualizing complex datasets — focused on climatic data.',
        link: 'https://github.com/SolusAstraDev/Adv-topics-db-tech-app',
        tags: ['React', 'D3', 'Data'],
    },
    {
        id: 'arcade',
        image: '/images/arcade.webp',
        title: 'Lydium Arcade',
        description: 'A collection of retro-style arcade games built with JavaScript.',
        link: 'https://github.com/SolusAstraDev/lydium-arcade',
        tags: ['Games', 'JS', 'Retro'],
    },
    {
        id: 'vr',
        image: '/images/vr-img.webp',
        title: 'Interactive VR Labyrinth',
        description:
            'A VR Android game using phone sensors to navigate a labyrinth, built with Unity.',
        link: 'https://github.com/SolusAstraDev/Interactive-VR-Focused-Labyrinth-Game',
        tags: ['Unity', 'VR', 'Android'],
    },
    {
        id: 'leave',
        image: '/images/employees-leave.webp',
        title: 'Leave Management System',
        description:
            'A simple system for employees to submit leave requests and managers to approve or decline them.',
        link: 'https://github.com/SolusAstraDev/Simple-Leave-Submission-and-Managment-for-Companies',
        tags: ['Web', 'Forms', 'CRUD'],
    },
    {
        id: 'soon-1',
        image: '/images/under-construction-1.webp',
        title: 'Coming Soon',
        description: 'New projects will be added soon.',
        link: '#',
        comingSoon: true,
    },
    {
        id: 'soon-2',
        image: '/images/under-construction-1.webp',
        title: 'Coming Soon',
        description: 'Stay tuned — building something legendary.',
        link: '#',
        comingSoon: true,
    },
];

const ComingSoonFront = () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-[var(--bg-elev)] p-6">
        <i className="bx bx-cog bx-spin text-4xl text-[var(--accent)] mb-3"></i>
        <h3 className="font-display text-lg font-bold mb-1">Coming Soon</h3>
        <p className="text-sm text-[var(--text-muted)]">Stay tuned.</p>
    </div>
);

const ComingSoonBack = () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-[var(--accent)] p-6 text-white">
        <i className="bx bxs-rocket text-4xl mb-3"></i>
        <h3 className="font-display text-lg font-bold mb-1">soon&trade;</h3>
        <p className="text-sm opacity-90 font-mono uppercase tracking-widest">in development</p>
    </div>
);

const PortfolioCard = ({ item, columns }) => {
    if (item.comingSoon) {
        return (
            <TiltedCard max={6}>
                <PixelTransition
                    className="aspect-[4/3] w-full surface overflow-hidden relative"
                    pixelColor="#1B1B2F"
                    gridSize={10}
                    duration={380}
                    firstContent={<ComingSoonFront />}
                    secondContent={<ComingSoonBack />}
                />
            </TiltedCard>
        );
    }

    return (
        <TiltedCard max={8}>
            <div className="surface overflow-hidden flex flex-col h-full">
                <div className="relative overflow-hidden">
                    <img
                        src={`${process.env.PUBLIC_URL}${item.image}`}
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                    />
                    {item.tags && (
                        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                            {item.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest rounded-full bg-[var(--bg-elev)]/90 backdrop-blur text-[var(--accent)] border border-[var(--border)]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--text-muted)] mb-4 flex-1">{item.description}</p>
                    {item.link && item.link !== '#' && (
                        <Magnet strength={0.2} radius={120}>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)] hover:opacity-90 text-white text-sm font-medium transition self-start"
                            >
                                View Project
                                <i className="bx bx-link-external"></i>
                            </a>
                        </Magnet>
                    )}
                </div>
            </div>
        </TiltedCard>
    );
};

const Portfolio = () => {
    const [columns, setColumns] = useState(3);

    useEffect(() => {
        const compute = () => {
            const w = window.innerWidth;
            if (w < 640) setColumns(1);
            else if (w < 1024) setColumns(2);
            else setColumns(3);
        };
        compute();
        window.addEventListener('resize', compute);
        return () => window.removeEventListener('resize', compute);
    }, []);

    return (
        <section className="pt-24 pb-16 px-4 relative">
            <div className="container mx-auto">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
                    <SplitText text="My" delay={30} duration={0.45} className="mr-2" />
                    <GradientText className="font-display" colors={['#5B5BD6', '#FF7A6B', '#22D3EE']}>
                        Portfolio
                    </GradientText>
                </h2>

                <FadeContent direction="up" duration={0.7}>
                    <Masonry
                        items={portfolioItems}
                        columns={columns}
                        gap={24}
                        renderItem={(item) => <PortfolioCard item={item} columns={columns} />}
                    />
                </FadeContent>
            </div>
        </section>
    );
};

export default Portfolio;
