import React from 'react';

const Presentations = () => {
    return (
        <section className="pt-16 pb-16 px-4">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">Presentations</h2>

                        <ul className="space-y-6">
                            <li className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                                <div className="flex justify-between items-start mb-2">
                                    <strong className="text-lg font-medium">"From Brain Drain to Brain Gain" @ European Parliment</strong>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">FEB 2018</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Guest of MEP Stelios Kouloglou at Brussels (<a href="https://fb.watch/c1cmADOmhc/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Watch here</a>)
                                </p>
                            </li>

                            <li className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                                <div className="flex justify-between items-start mb-2">
                                    <strong className="text-lg font-medium">Tedx Technical University of Crete</strong>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">MAY 2017</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">
                                    A talk about innovation and creativity and the importance of inspiring to create. (<a href="https://youtu.be/iQMLE2c9aNY" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Watch here</a>)
                                </p>
                            </li>

                            <li className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                                <div className="flex justify-between items-start mb-2">
                                    <strong className="text-lg font-medium">Speaker at Athens Mini Maker Faire</strong>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">OCT 2016</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">
                                    A presentation of P.E.Ace and a discussion on the joy of creating.
                                </p>
                            </li>

                            <li className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                                <div className="flex justify-between items-start mb-2">
                                    <strong className="text-lg font-medium">"Greece as the Silicon Valley of Europe"</strong>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">FEB 2015</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Guest of the Greek students of the Imperial College of London
                                </p>
                            </li>

                            <li className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                                <div className="flex justify-between items-start mb-2">
                                    <strong className="text-lg font-medium">Tedx Athens</strong>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">NOV 2014</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">
                                    A presentation of Portable Evasive Assistance (<a href="https://youtu.be/L_O3AF1Bkms" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Watch here</a>)
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">Awards</h2>

                        <ul className="space-y-6">
                            <li className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                                <div className="flex justify-between items-start mb-2">
                                    <strong className="text-lg font-medium">Innovations and Entrepreneurship Competition MOKE University of Ioannina</strong>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">2024</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">
                                    First place with the prototype of the device P.E.Ace Version 3 (Portable Evasive Assistance).
                                </p>
                            </li>

                            <li className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                                <div className="flex justify-between items-start mb-2">
                                    <strong className="text-lg font-medium">Thanks to Tech Kotsovolos</strong>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">2020</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Amongst the Top 10 ideas with the prototype of the device P.E.Ace Version 3 (Portable Evasive Assistance).
                                </p>
                            </li>

                            <li className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                                <div className="flex justify-between items-start mb-2">
                                    <strong className="text-lg font-medium">Google Science Fair</strong>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">2014</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Local Award for the idea and prototype of the device P.E.Ace (Portable Evasive Assistance).
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Favorite Quotes Section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">Favorite Quotes</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <blockquote className="relative">
                                <div className="absolute -top-4 -left-2 text-4xl text-purple-300 dark:text-purple-700">
                                    <i className='bx bxs-quote-left'></i>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 italic pl-8 mb-4">
                                    I am, and always will be, the optimist. The hoper of far-flung hopes, and the dreamer of improbable dreams.
                                </p>
                                <footer className="text-right text-gray-500 dark:text-gray-400">
                                    — Eleventh Doctor
                                </footer>
                            </blockquote>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <blockquote className="relative">
                                <div className="absolute -top-4 -left-2 text-4xl text-purple-300 dark:text-purple-700">
                                    <i className='bx bxs-quote-left'></i>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 italic pl-8 mb-4">
                                    Ad astra per aspera.
                                </p>
                                <footer className="text-right text-gray-500 dark:text-gray-400">
                                    — NASA / Starfleet
                                </footer>
                            </blockquote>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <blockquote className="relative">
                                <div className="absolute -top-4 -left-2 text-4xl text-purple-300 dark:text-purple-700">
                                    <i className='bx bxs-quote-left'></i>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 italic pl-8 mb-4">
                                    Life Must Be Worn Gloriously.
                                </p>
                                <footer className="text-right text-gray-500 dark:text-gray-400">
                                    — Captain Christopher Pike
                                </footer>
                            </blockquote>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <blockquote className="relative">
                                <div className="absolute -top-4 -left-2 text-4xl text-purple-300 dark:text-purple-700">
                                    <i className='bx bxs-quote-left'></i>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 italic pl-8 mb-4">
                                    Laugh hard. Run fast. Be kind.
                                </p>
                                <footer className="text-right text-gray-500 dark:text-gray-400">
                                    — Twelfth Doctor
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Presentations;
