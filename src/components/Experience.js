import React, { useState } from 'react';
import SoundModal from './SoundModal';
import SplitText from './reactbits/SplitText';
import GradientText from './reactbits/GradientText';
import Stepper from './reactbits/Stepper';
import MagicBento from './reactbits/MagicBento';
import LogoLoop from './reactbits/LogoLoop';

const experiences = [
    {
        id: 'deloitte',
        icon: 'bx-code-alt',
        title: 'Junior SAP Developer',
        company: 'Deloitte',
        period: 'JUNE 2023 — OCTOBER 2025',
        label: 'Deloitte',
        skills: [
            { title: 'SAP ERP Knowledge', description: "Understanding of SAP's ERP software and its modules like Finance, Controlling, Material Management, Sales and Distribution, etc." },
            { title: 'ABAP Programming', description: 'Knowledge of ABAP (Advanced Business Application Programming) language used for developing custom programs and extensions within the SAP environment.' },
            { title: 'JavaScript and HTML5', description: 'Strong proficiency in JavaScript programming language and HTML5 for building user interfaces and web applications within the SAP ecosystem.' },
            { title: 'Version Control', description: 'Familiarity with version control systems like Git for managing source code and collaborating with other developers in a team environment.' },
        ],
    },
    {
        id: 'kotsovolos',
        icon: 'bxs-briefcase',
        title: 'Store Technician',
        company: 'Kotsovolos / Dixons South East',
        period: 'OCT 2022 — JUNE 2023',
        label: 'Kotsovolos',
        skills: [
            { title: 'Technical Knowledge', description: 'A deep understanding of the inner workings of mobile phones and computers, including hardware components, operating systems, and software applications.' },
            { title: 'Diagnostic Skills', description: 'Ability to diagnose hardware and software issues accurately by conducting tests, analyzing symptoms, and troubleshooting problems effectively.' },
            { title: 'Repair and Maintenance', description: 'Proficiency in repairing and replacing faulty components such as screens, batteries, charging ports, keyboards, RAM, hard drives, etc., using appropriate tools and techniques.' },
            { title: 'Software Troubleshooting', description: 'Experience in troubleshooting software issues such as system crashes, software conflicts, malware infections, and operating system errors by performing software updates, system restores, and virus scans.' },
            { title: 'Time Management', description: 'Efficient time management skills to prioritize repair tasks, estimate repair times accurately, and meet deadlines, especially in a fast-paced repair environment.' },
        ],
    },
    {
        id: 'cosmote',
        icon: 'bx-phone-incoming',
        title: 'Customer Support',
        company: 'Cosmote Evalue',
        period: 'JUNE 2022 — AUG 2022',
        label: 'Cosmote',
        skills: [
            { title: 'Customer Service', description: 'Provided support to customers regarding telecommunication services, products, and billing inquiries.' },
            { title: 'Problem Resolution', description: 'Identified and resolved customer issues efficiently and accurately.' },
            { title: 'Technical Support', description: 'Assisted customers with technical troubleshooting for mobile devices and internet connectivity.' },
            { title: 'Communication Skills', description: 'Demonstrated excellent verbal and written communication skills when interacting with customers.' },
        ],
    },
    {
        id: 'gnomi',
        icon: 'bx-news',
        title: 'Tech Support',
        company: 'Gnomi Newspaper',
        period: 'SEPT 2017 — MAY 2018',
        label: 'Gnomi',
        skills: [
            { title: 'Understanding of Publishing Systems', description: 'Proficiency in using and troubleshooting publishing systems specific to the newspaper industry.' },
            { title: 'Digital Publishing Platforms', description: 'Familiarity with digital publishing platforms and technologies used for online content distribution, including websites, mobile apps, social media, and digital editions.' },
            { title: 'Data Security and Privacy', description: 'Understanding of data security best practices and compliance requirements relevant to the newspaper industry, such as protecting sensitive information, securing digital assets, and ensuring data privacy for subscribers and online readers.' },
            { title: 'Documentation and Training', description: 'Creating and maintaining technical documentation, user guides, and training materials to help newspaper staff troubleshoot common issues independently and improve their digital literacy skills.' },
        ],
    },
];

const skillSections = {
    projects: {
        id: 'projects',
        title: 'Projects',
        icon: 'bx-code-block',
        subtitle: 'Things I built',
        content: {
            'Work Projects': [
                { title: 'SAP Development Projects', description: 'Built applications for optimizing government certification processes.', icon: 'bxl-sap' },
                { title: 'SAP Process Integration Project', description: 'Deployed a SAP PI solution for a multinational client, achieving real-time data synchronization across platforms.', icon: 'bxs-data' },
            ],
            'University Projects': [
                { title: 'Unity 3D Game', description: 'Unity based game for the history of Ioannina under Turkish rule', icon: 'bxs-joystick' },
                { title: 'Virtual Reality Labyrinth Game for Android', description: 'Android virtual reality game with sensor controls for navigation.', icon: 'bxl-android' },
                { title: 'Java based Text to Speech', description: 'Created a full-stack library management system using React and Node.js.', icon: 'bxl-java' },
                { title: 'Object oriented movie library', description: 'Based on data from Imdb & Rotten Tomatoes.', icon: 'bxs-movie-play' },
            ],
            Other: [
                { title: 'Polling social media', description: 'Polling social media webapp.', icon: 'bxl-react' },
                { title: 'Unreal Engine 5 Game', description: 'RPG game set in medieval times.', icon: 'bxs-game' },
            ],
        },
    },
    programmingLanguages: {
        id: 'programmingLanguages',
        title: 'Languages',
        icon: 'bx-code-alt',
        subtitle: 'Programming languages',
        content: {
            'Front-end': [
                { name: 'HTML5', icon: 'bxl-html5' },
                { name: 'CSS3', icon: 'bxl-css3' },
                { name: 'JavaScript', icon: 'bxl-javascript' },
            ],
            'Back-end': [
                { name: 'Java', icon: 'bxl-java' },
                { name: 'Python', icon: 'bxl-python' },
                { name: 'C', icon: 'bx-code' },
                { name: 'C++', icon: 'bx-code' },
                { name: 'C#', icon: 'bx-code' },
                { name: 'Kotlin', icon: 'bx-code' },
                { name: 'ABAP', icon: 'bx-code-block' },
            ],
            Other: [
                { name: 'SQL', icon: 'bx-data' },
                { name: 'Bash', icon: 'bx-terminal' },
                { name: 'Prolog', icon: 'bx-code-curly' },
            ],
        },
    },
    frameworks: {
        id: 'frameworks',
        title: 'Frameworks',
        icon: 'bx-layer',
        subtitle: 'Tools & stacks',
        content: {
            Frontend: [
                { name: 'React', icon: 'bxl-react' },
                { name: 'Tailwind CSS', icon: 'bx-wind' },
            ],
            Backend: [
                { name: 'Node.js', icon: 'bxl-nodejs' },
                { name: 'Django', icon: 'bx-code-alt' },
                { name: 'Spring Boot', icon: 'bx-leaf' },
            ],
            Database: [
                { name: 'PostgreSQL', icon: 'bx-data' },
                { name: 'MariaDB', icon: 'bx-data' },
                { name: 'MySQL', icon: 'bx-data' },
            ],
            Other: [
                { name: 'SAP PI/PO', icon: 'bx-transfer' },
                { name: 'SAP HANA', icon: 'bx-data' },
                { name: 'Git', icon: 'bxl-git' },
            ],
        },
    },
    skills: {
        id: 'skills',
        title: 'Skills',
        icon: 'bx-brain',
        subtitle: 'Soft + technical',
        content: {
            'Soft Skills': [
                'Requirements Gathering',
                'Process Mapping',
                'Technical Documentation',
                'Problem Solving',
                'Public Speaking',
                'Teamwork',
                'Adaptability',
            ],
            'Technical Skills': [
                'Familiar with Unix and Linux systems',
                'Familiar with REST Api architecture',
                'Experience in software development practices and design patterns',
                'Agile Methodology',
            ],
        },
    },
};

const renderExperienceStep = (step) => (
    <div className="space-y-4">
        <div className="flex items-start gap-4">
            <div className="bg-[var(--accent)]/15 text-[var(--accent)] p-3 rounded-xl">
                <i className={`bx ${step.icon} text-2xl`}></i>
            </div>
            <div>
                <h3 className="font-display text-xl font-bold">{step.title}</h3>
                <h4 className="text-lg text-[var(--text-muted)]">{step.company}</h4>
                <p className="text-xs uppercase tracking-[0.2em] font-mono text-[var(--accent-2)] mt-1">{step.period}</p>
            </div>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
            {step.skills.slice(0, 4).map((skill, i) => (
                <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)]/40 p-3">
                    <h5 className="font-semibold text-sm mb-1">{skill.title}</h5>
                    <p className="text-xs text-[var(--text-muted)] line-clamp-3">{skill.description}</p>
                </div>
            ))}
        </div>
        {step.skills.length > 4 && (
            <p className="text-xs text-[var(--text-muted)] font-mono">+ {step.skills.length - 4} more — open full details</p>
        )}
    </div>
);

const renderModalContent = (section, content) => {
    if (section === 'projects') {
        return (
            <div className="space-y-8">
                {Object.entries(content).map(([category, projects]) => (
                    <div key={category} className="space-y-4">
                        <h3 className="font-display text-xl font-semibold text-[var(--accent)]">{category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="project-card p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elev)]/50"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <i className={`bx ${project.icon} text-2xl text-[var(--accent)]`}></i>
                                        <h4 className="font-semibold">{project.title}</h4>
                                    </div>
                                    <p className="text-sm text-[var(--text-muted)]">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (section === 'programmingLanguages' || section === 'frameworks') {
        return (
            <div className="space-y-8">
                {Object.entries(content).map(([category, items]) => (
                    <div key={category} className="space-y-3">
                        <h3 className="font-display text-xl font-semibold text-[var(--accent)]">{category}</h3>
                        <LogoLoop
                            logos={items}
                            speed={32}
                            gap={32}
                            renderLogo={(item) => (
                                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-elev)]/60 text-sm font-medium">
                                    <i className={`bx ${item.icon} text-lg text-[var(--accent)]`}></i>
                                    {item.name}
                                </span>
                            )}
                        />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {Object.entries(content).map(([category, items]) => (
                <div key={category} className="space-y-3">
                    <h3 className="font-display text-xl font-semibold text-[var(--accent)]">{category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg-elev)]/40 text-sm font-medium"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

const Experience = () => {
    const [stepIndex, setStepIndex] = useState(0);
    const [activeJob, setActiveJob] = useState(null);
    const [modalContent, setModalContent] = useState({ isOpen: false, title: '', content: null });

    const openExperienceModal = (exp) => {
        setActiveJob(exp);
    };

    const bentoTiles = Object.values(skillSections).map((s) => ({
        id: s.id,
        title: s.title,
        subtitle: s.subtitle,
        icon: s.icon,
    }));

    return (
        <section className="pt-24 pb-16 px-4 relative">
            <div className="container mx-auto">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
                    <SplitText text="My" className="mr-2" delay={30} duration={0.45} />
                    <GradientText className="font-display" colors={['#5B5BD6', '#8B5CF6', '#22D3EE']}>Experience</GradientText>
                </h2>

                <div className="mb-16">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-display text-xl font-bold">Work timeline</h3>
                        <button
                            type="button"
                            onClick={() => openExperienceModal(experiences[stepIndex])}
                            className="px-4 py-2 rounded-md bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition"
                        >
                            Open full details
                        </button>
                    </div>
                    <Stepper
                        steps={experiences}
                        initialStep={0}
                        onStepChange={setStepIndex}
                        renderStep={renderExperienceStep}
                    />
                </div>

                <div className="mb-4">
                    <h3 className="font-display text-xl font-bold mb-6">Skill cards</h3>
                </div>
                <MagicBento
                    tiles={bentoTiles}
                    onSelect={(id) => {
                        const section = skillSections[id];
                        if (!section) return;
                        setModalContent({
                            isOpen: true,
                            title: section.title,
                            content: renderModalContent(id, section.content),
                        });
                    }}
                />

                <SoundModal
                    isOpen={!!activeJob}
                    onClose={() => setActiveJob(null)}
                    title={activeJob ? `${activeJob.title} at ${activeJob.company}` : ''}
                    content={
                        activeJob && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[var(--accent)]/15 text-[var(--accent)] p-3 rounded-xl">
                                        <i className={`bx ${activeJob.icon} text-2xl`}></i>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl font-bold">{activeJob.title}</h3>
                                        <h4 className="text-lg text-[var(--text-muted)]">{activeJob.company}</h4>
                                        <p className="text-xs uppercase tracking-[0.2em] font-mono text-[var(--accent-2)] mt-1">{activeJob.period}</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-display text-xl font-semibold text-[var(--accent)]">Responsibilities &amp; Achievements</h3>
                                    <div className="grid gap-4">
                                        {activeJob.skills.map((skill, index) => (
                                            <div key={index} className="bg-[var(--bg-elev)]/50 border border-[var(--border)] p-4 rounded-xl">
                                                <h4 className="font-semibold text-lg mb-2">{skill.title}</h4>
                                                <p className="text-[var(--text-muted)]">{skill.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                />

                <SoundModal
                    isOpen={modalContent.isOpen}
                    onClose={() => setModalContent({ ...modalContent, isOpen: false })}
                    title={modalContent.title}
                    content={modalContent.content}
                />
            </div>
        </section>
    );
};

export default Experience;
