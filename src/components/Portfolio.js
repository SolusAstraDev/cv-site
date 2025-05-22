import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const PortfolioItem = ({ image, title, description, link }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <img
                src={`${process.env.PUBLIC_URL}${image}`}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {description}
                </p>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium rounded-md transition-colors"
                    >
                        View Project
                    </a>
                )}
            </div>
        </div>
    );
};

const Portfolio = () => {
    const portfolioItems = [
        {
            image: '/images/climate.jpg',
            title: 'Climate Data Visualization Tool',
            description: 'This application is a data-driven tool designed to facilitate the exploration, analysis, and visualization of complex datasets, particularly focusing on climatic data. ',
            link: 'https://github.com/AngelGketsis/Adv-topics-db-tech-app/blob/main/README.md'
        },
        {
            image: '/images/arcade.png',
            title: 'Lydium Arcade',
            description: 'A collection of retro-style arcade games built with JavaScript.',
            link: 'https://angelgketsis.github.io/lydium-arcade/'
        },
        {
            image: '/images/vr-img.jpg',
            title: 'Interactive VR Focused Labyrinth Game',
            description: 'A simple interactive VR game for Android phones that utilizes basic phone sensors to get input from the player to move the character through a labyrinth, built with Unity.',
            link: 'https://github.com/AngelGketsis/Interactive-VR-Focused-Labyrinth-Game'
        },
        {
            image: '/images/employees-leave.jpeg',
            title: 'Simple Leave Submission and Management System',
            description: 'A very simplistic system for a hypothetical employees to submit leave requests and for managers to either accept them or decline them.',
            link: 'https://github.com/AngelGketsis/Simple-Leave-Submission-and-Managment-for-Companies'
        },
        {
            image: '/images/under-construction-1.jpg',
            title: 'Comming Soon',
            description: 'New projects will be added soon!',
            link: '#'
        },
        {
            image: '/images/under-construction-1.jpg',
            title: 'Comming Soon',
            description: 'New projects will be added soon!',
            link: '#'
        }
    ];

    return (
        <section className="pt-24 pb-16 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    My <span className="text-purple-600 dark:text-purple-400">Portfolio</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <PortfolioItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio; 