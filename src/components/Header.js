import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSounds } from '../context/SoundContext';
import SoundButton from './SoundButton';

const Header = ({ darkMode, toggleDarkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    const { playClick } = useSounds();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setMenuOpen(false);
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setActiveSection('home');
    };

    const handleDarkModeToggle = () => {
        playClick();
        toggleDarkMode();
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'portfolio'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect();
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
        <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={handleLogoClick}
                        className="text-2xl font-bold text-purple-600 dark:text-purple-400"
                    >
                        Solus
                    </Link>

                    <div className="flex items-center gap-4">
                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-4">
                            {['Home', 'About', 'Experience', 'Presentations', 'Portfolio'].map((section) => (
                                <SoundButton
                                    key={section}
                                    onClick={() => scrollToSection(section.toLowerCase())}
                                    className={`px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${activeSection === section.toLowerCase() ? 'text-fuchsia-900 dark:text-fuchsia-200 font-medium' : ''
                                        }`}
                                >
                                    {section}
                                </SoundButton>
                            ))}
                        </nav>

                        {/* Dark Mode Toggle using SoundButton */}
                        <SoundButton
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle dark mode"
                            clickVolume={0.4}
                            hoverVolume={0.2}
                        >
                            <i className={`bx ${darkMode ? 'bx-sun text-yellow-400' : 'bx-moon text-gray-600'} text-xl`}></i>
                        </SoundButton>

                        {/* Mobile Menu Button */}
                        <SoundButton
                            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            clickVolume={0.4}
                            hoverVolume={0.2}
                        >
                            <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'} text-2xl`}></i>
                        </SoundButton>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {menuOpen && (
                    <div className="md:hidden py-2">
                        {['Home', 'About', 'Experience', 'Portfolio'].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section.toLowerCase())}
                                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 ${activeSection === section.toLowerCase() ? 'text-purple-600 dark:text-purple-400' : ''
                                    }`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header; 