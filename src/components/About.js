import React from 'react';
import D20Dice from './D20Dice';

const About = () => {
    return (
        <section className="pt-24 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
                    <div className="md:w-3/5">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            About <span className="text-purple-600 dark:text-purple-400">Me</span>
                        </h2>

                        <h3 className="text-xl font-medium mb-4 text-gray-700 dark:text-gray-300">
                            Hey there! I'm Lydia Gketsi — a creative developer, AI enthusiast, and lifelong storyteller who thrives at the intersection of imagination and innovation.
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Whether I'm building smart systems or spinning wild fantasy adventures, I'm always chasing that spark of what if?<br />
                            <br />
                            I've got a soft spot for intelligent assistants, machine learning, and designs that just make sense. I love blending art and logic to create experiences that feel intuitive, engaging, and a little bit magical. If it involves tech with heart or stories with teeth, I'm probably already working on it.<br />
                            <br />
                            Outside of dev life, I'm a proud D&D dungeon master with a flair for the dramatic (sentient libraries and magical conspiracies, anyone?), a game dev tinkerer building a side-scroller powered by cosplay, and a caffeine-fueled idea machine with way too many tabs open.<br />
                            <br />
                            Let's team up and build something clever, meaningful, and maybe even a little legendary.
                        </p>
                        <span className="inline-flex items-center gap-2">Roll for initiative! <D20Dice /></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 