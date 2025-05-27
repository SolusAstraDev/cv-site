import React, { useState, useEffect } from 'react';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Presentations from './Presentations';
const Home = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <section id="home" className="pt-24 pb-16 md:py-32 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/2">
                            <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-2">Hello, I am</h3>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-pink-400 dark:text-pink-600">Lydia</h1>
                            <p className="text-lg mb-8">
                                Computer Science and Engineering Undergraduate @University of Ioannina.<br />
                                Inventor of quirky ideas and dreamer of improbable dreams
                            </p>

                            <div className="flex gap-4 mb-8">
                                <a
                                    href="https://github.com/AngelGketsis"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl hover:text-purple-300 dark:hover:text-purple-500 transition-colors"
                                    aria-label="GitHub"
                                >
                                    <i className="bx bxl-github"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/angelosgketsis1701/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl hover:text-purple-300 dark:hover:text-purple-500 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <i className="bx bxl-linkedin"></i>
                                </a>
                            </div>

                            <a
                                href={`${process.env.PUBLIC_URL}/Resume.pdf`}
                                download="resume-Angelos-Gketsis.pdf"
                                className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium rounded-md transition-colors"
                            >
                                Download CV
                            </a>
                        </div>

                        <div className="md:w-1/2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                                    <i className="bx bx-code-block text-3xl text-blue-600 dark:text-blue-400 mb-1"></i>
                                    <h3 className="font-medium">Software Developer</h3>
                                </div>

                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                                    <i className="bx bx-game text-3xl text-green-600 dark:text-green-400 mb-1"></i>
                                    <h3 className="font-medium">Game Designer</h3>
                                </div>

                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                                    <i className="bx bx-video-recording text-3xl text-red-600 dark:text-red-400 mb-1"></i>
                                    <h3 className="font-medium">Drone Enthusiast</h3>
                                </div>

                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                                    <i className="bx bx-book-bookmark text-3xl text-purple-600 dark:text-purple-400 mb-1"></i>
                                    <h3 className="font-medium">DnD Game Master</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about">
                <About />
            </section>

            <section id="experience">
                <Experience />
            </section>

            <section id="presentations">
                <Presentations />
            </section>

            <section id="portfolio">
                <Portfolio />
            </section>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 p-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-full shadow-lg transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                aria-label="Scroll to top"
            >
                <i className="bx bx-up-arrow-alt text-2xl"></i>
            </button>
        </>
    );
};

export default Home; 