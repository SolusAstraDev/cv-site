import React, { useState, useEffect, useRef } from 'react';


const Experience = () => {
    const [modalContent, setModalContent] = useState({ isOpen: false, title: '', content: null });

    const experiences = [
        {
            icon: 'bx-code-alt',
            title: 'Junior SAP Developer',
            company: 'Deloitte',
            period: 'JUNE 2023 - Present',
            skills: [
                {
                    title: 'SAP ERP Knowledge',
                    description: 'Understanding of SAP\'s ERP software and its modules like Finance, Controlling, Material Management, Sales and Distribution, etc.'
                },
                {
                    title: 'ABAP Programming',
                    description: 'Knowledge of ABAP (Advanced Business Application Programming) language used for developing custom programs and extensions within the SAP environment.'
                },
                {
                    title: 'JavaScript and HTML5',
                    description: 'Strong proficiency in JavaScript programming language and HTML5 for building user interfaces and web applications within the SAP ecosystem.'
                },
                {
                    title: 'Version Control',
                    description: 'Familiarity with version control systems like Git for managing source code and collaborating with other developers in a team environment.'
                }
            ]
        },
        {
            icon: 'bxs-briefcase',
            title: 'Store Technician',
            company: 'Kotsovolos/Dixons South East',
            period: 'OCT 2022 - JUNE 2023',
            skills: [
                {
                    title: 'Technical Knowledge',
                    description: 'A deep understanding of the inner workings of mobile phones and computers, including hardware components, operating systems, and software applications.'
                },
                {
                    title: 'Diagnostic Skills',
                    description: 'Ability to diagnose hardware and software issues accurately by conducting tests, analyzing symptoms, and troubleshooting problems effectively.'
                },
                {
                    title: 'Repair and Maintenance',
                    description: 'Proficiency in repairing and replacing faulty components such as screens, batteries, charging ports, keyboards, RAM, hard drives, etc., using appropriate tools and techniques.'
                },
                {
                    title: 'Software Troubleshooting',
                    description: 'Experience in troubleshooting software issues such as system crashes, software conflicts, malware infections, and operating system errors by performing software updates, system restores, and virus scans.'
                },
                {
                    title: 'Time Management',
                    description: 'Efficient time management skills to prioritize repair tasks, estimate repair times accurately, and meet deadlines, especially in a fast-paced repair environment.'
                }
            ]
        },
        {
            icon: 'bx-phone-incoming',
            title: 'Customer Support',
            company: 'Cosmote Evalue',
            period: 'JUNE 2022 - AUG 2022',
            skills: [
                {
                    title: 'Customer Service',
                    description: 'Provided support to customers regarding telecommunication services, products, and billing inquiries.'
                },
                {
                    title: 'Problem Resolution',
                    description: 'Identified and resolved customer issues efficiently and accurately.'
                },
                {
                    title: 'Technical Support',
                    description: 'Assisted customers with technical troubleshooting for mobile devices and internet connectivity.'
                },
                {
                    title: 'Communication Skills',
                    description: 'Demonstrated excellent verbal and written communication skills when interacting with customers.'
                }
            ]
        },
        {
            icon: 'bx-news',
            title: 'Tech Support',
            company: 'Gnomi Newspaper',
            period: 'SEPT 2017 - MAY 2018',
            skills: [
                {
                    title: 'Understanding of Publishing Systems',
                    description: 'Proficiency in using and troubleshooting publishing systems specific to the newspaper industry.'
                },
                {
                    title: 'Digital Publishing Platforms',
                    description: 'Familiarity with digital publishing platforms and technologies used for online content distribution, including websites, mobile apps, social media, and digital editions.'
                },
                {
                    title: 'Data Security and Privacy',
                    description: 'Understanding of data security best practices and compliance requirements relevant to the newspaper industry, such as protecting sensitive information, securing digital assets, and ensuring data privacy for subscribers and online readers.'
                },
                {
                    title: 'Documentation and Training',
                    description: 'Creating and maintaining technical documentation, user guides, and training materials to help newspaper staff troubleshoot common issues independently and improve their digital literacy skills.'
                }
            ]
        }
    ];

    const skillSections = {
        projects: {
            title: "Projects",
            icon: "bx-code-block",
            content: {
                "Work Projects": [
                    {
                        title: "SAP Development Projects",
                        description: "Built applications for optimizing government certification processes.",
                        icon: "bxl-sap"
                    },
                    {
                        title: "SAP Process Integration Project",
                        description: "Deployed a SAP PI solution for a multinational client, achieving real-time data synchronization across platforms.",
                        icon: "bxs-data"
                    }
                ],
                "University Projects": [
                    {
                        title: "Unity 3D Game",
                        description: "Unity based game for the history of Ioannina under Turkish rule",
                        icon: "bxs-joystick"
                    },
                    {
                        title: "Virtual Reality Labyrinth Game for Android.",
                        description: "Android virtual reality game with sensor controls for navigation.",
                        icon: "bxl-android"
                    },
                    {
                        title: "Java based Text to Speech",
                        description: "Created a full-stack library management system using React and Node.js.",
                        icon: "bxl-java"
                    },
                    {
                        title: "Object oriented movie library",
                        description: "Based on data from Imdb & Rotten Tomatoes.",
                        icon: "bxs-movie-play"
                    },
                ],
                "Other": [
                    {
                        title: "Polling social media",
                        description: "Polling social media webapp.",
                        icon: "bxl-react"
                    },
                    {
                        title: "Unreal Engine 5 Game",
                        description: "RPG game set in medieval times.",
                        icon: "bxs-game"
                    },
                ]
            }
        },
        programmingLanguages: {
            title: "Programming Languages",
            icon: "bx-code-alt",
            content: {
                "Front-end": [
                    { name: "HTML5", icon: "bxl-html5" },
                    { name: "CSS3", icon: "bxl-css3" },
                    { name: "JavaScript", icon: "bxl-javascript" }
                ],
                "Back-end": [
                    { name: "Java", icon: "bxl-java" },
                    { name: "Python", icon: "bxl-python" },
                    { name: "C", icon: "bx-code" },
                    { name: "C++", icon: "bx-code" },
                    { name: "C#", icon: "bx-code" },
                    { name: "Kotlin", icon: "bx-code" },
                    { name: "ABAP", icon: "bx-code-block" }
                ],
                "Other": [
                    { name: "SQL", icon: "bx-data" },
                    { name: "Bash", icon: "bx-terminal" },
                    { name: "Prolog", icon: "bx-code-curly" }
                ]
            }
        },
        frameworks: {
            title: "Frameworks",
            icon: "bx-layer",
            content: {
                "Frontend": [
                    { name: "React", icon: "bxl-react" },
                    { name: "Tailwind CSS", icon: "bx-wind" }
                ],
                "Backend": [
                    { name: "Node.js", icon: "bxl-nodejs" },
                    { name: "Django", icon: "bx-code-alt" },
                    { name: "Spring Boot", icon: "bx-leaf" }
                ],
                "Database": [
                    { name: "PostgreSQL", icon: "bx-data" },
                    { name: "MariaDB", icon: "bx-data" },
                    { name: "MySQL", icon: "bx-data" }
                ],
                "Other": [
                    { name: "SAP PI/PO", icon: "bx-transfer" },
                    { name: "SAP HANA", icon: "bx-data" },
                    { name: "Git", icon: "bxl-git" }
                ]
            }
        },
        skills: {
            title: "Skills",
            icon: "bx-brain",
            content: {
                "Soft Skills": [
                    "Requirements Gathering",
                    "Process Mapping",
                    "Technical Documentation",
                    "Problem Solving",
                    "Public Speaking",
                    "Teamwork",
                    "Adaptability"
                ],
                "Technical Skills": [
                    "Familiar with Unix and Linux systems",
                    "Familiar with REST Api architecture",
                    "Experience in software development practices and design patterns",
                    "Agile Methodology"
                ]
            }
        }
    };

    const ExperienceBox = ({ icon, title, company, period, skills }) => {
        const [showModal, setShowModal] = useState(false);

        return (
            <>
                <div className="timeline-item bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all min-h-[200px] max-h-[200px]">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-md">
                            <i className={`bx ${icon} text-2xl text-purple-600 dark:text-purple-400`}></i>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">{title}</h3>
                            <h4 className="text-lg text-gray-700 dark:text-gray-300">{company}</h4>
                            <p className="text-gray-500 dark:text-gray-400">{period}</p>
                        </div>
                    </div>

                    <button
                        onClick={() => setShowModal(true)}
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium rounded-md transition-colors"
                    >
                        Read More
                    </button>
                </div>

                <Modal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    title={`${title} at ${company}`}
                    content={
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-md">
                                    <i className={`bx ${icon} text-2xl text-purple-600 dark:text-purple-400`}></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{title}</h3>
                                    <h4 className="text-lg text-gray-700 dark:text-gray-300">{company}</h4>
                                    <p className="text-gray-500 dark:text-gray-400">{period}</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">Responsibilities & Achievements</h3>
                                <div className="grid gap-4">
                                    {skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                                        >
                                            <h4 className="font-semibold text-lg mb-2">{skill.title}</h4>
                                            <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    }
                />
            </>
        );
    };

    const Modal = ({ isOpen, onClose, title, content }) => {
        const modalRef = useRef(null);

        useEffect(() => {
            const handleClickOutside = (event) => {
                if (modalRef.current && !modalRef.current.contains(event.target)) {
                    onClose();
                }
            };

            const handleEscapeKey = (event) => {
                if (event.key === 'Escape') {
                    onClose();
                }
            };

            if (isOpen) {
                document.addEventListener('mousedown', handleClickOutside);
                document.addEventListener('keydown', handleEscapeKey);
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            }

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
                document.removeEventListener('keydown', handleEscapeKey);
                document.body.style.overflow = 'unset'; // Restore scrolling when modal is closed
            };
        }, [isOpen, onClose]);

        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div
                    ref={modalRef}
                    className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-modal-enter"
                >
                    <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <button
                            onClick={onClose}
                            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 dark:text-gray-500 opacity-75"
                            aria-label="Close modal"
                        >
                            <i className='bx bx-x text-xl'></i>
                        </button>
                    </div>
                    <div className="p-6">
                        {content}
                    </div>
                </div>
            </div>
        );
    };

    const SkillCard = ({ title, icon, onClick }) => (
        <div
            onClick={onClick}
            className="project-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
        >
            <div className="flex items-center gap-4 mb-2">
                <i className={`bx ${icon} text-3xl text-purple-600 dark:text-purple-400`}></i>
                <h3 className="text-xl font-bold">{title}</h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400">Click to view details</p>
        </div>
    );

    const renderModalContent = (section, content) => {
        if (section === 'projects') {
            return (
                <div className="space-y-8">
                    {Object.entries(content).map(([category, projects]) => (
                        <div key={category} className="space-y-4">
                            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">{category}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {projects.map((project, index) => (
                                    <div
                                        key={index}
                                        className="project-card p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <i className={`bx ${project.icon} text-2xl text-purple-600 dark:text-purple-400`}></i>
                                            <h4 className="font-semibold">{project.title}</h4>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
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
                <div className="space-y-6">
                    {Object.entries(content).map(([category, items]) => (
                        <div key={category} className="space-y-4">
                            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">{category}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-50/80 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/70 transition-colors border border-gray-100 dark:border-gray-700"
                                    >
                                        <i className={`bx ${item.icon} text-xl text-gray-600 dark:text-gray-400`}></i>
                                        <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        // Default render for skills section
        return (
            <div className="space-y-6">
                {Object.entries(content).map(([category, items]) => (
                    <div key={category} className="space-y-4">
                        <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">{category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-3 rounded-lg bg-gray-50/80 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/70 transition-colors border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300"
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

    return (
        <section className="pt-24 pb-16 px-4">
            <div className="container mx-auto">
                <h2 className="section-header text-3xl md:text-4xl font-bold mb-16 text-center">
                    My <span className="text-purple-600 dark:text-purple-400">Experience</span>
                </h2>

                {/* Work Experience Timeline */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8">Work Experience</h3>
                    <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-4">
                        {experiences.map((exp, index) => (
                            <div key={index} className="md:w-[350px] flex-shrink-0 ">
                                <ExperienceBox {...exp} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Sections */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skillSections).map(([key, section]) => (
                        <SkillCard
                            key={key}
                            title={section.title}
                            icon={section.icon}
                            onClick={() => setModalContent({
                                isOpen: true,
                                title: section.title,
                                content: renderModalContent(key, section.content)
                            })}
                        />
                    ))}
                </div>

                <Modal
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