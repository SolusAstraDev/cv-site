import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">Lydia Gketsi</h3>
                        <p className="text-gray-600 dark:text-gray-400">Computer Science and Engineering Undergraduate</p>
                    </div>

                    <div className="flex gap-2 mb-2 md:mb-0">
                        <a
                            href="https://github.com/SolusAstraDev"
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
                            className="text-2xl hover:text-purple-700 dark:hover:text-purple-500 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <i className="bx bxl-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6 text-center">
                    <p className="text-gray-600 dark:text-gray-400">
                        &copy; {currentYear} Lydia Gketsi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 