import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
    return (
        <section id="about" className="py-20 px-6 bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Character Switch Wheel Visual */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
                    >
                        <div className="absolute inset-0 rounded-full border-8 border-black/50 bg-black/20 backdrop-blur-sm overflow-hidden">
                            {/* Slices */}
                            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gtaGreen/80 hover:bg-gtaGreen transition-colors cursor-pointer flex items-center justify-center border-r-2 border-b-2 border-black/50">
                                <span className="text-white font-gta text-2xl transform -rotate-45">F</span>
                            </div>
                            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gtaBlue/80 hover:bg-gtaBlue transition-colors cursor-pointer flex items-center justify-center border-l-2 border-b-2 border-black/50">
                                <span className="text-white font-gta text-2xl transform rotate-45">M</span>
                            </div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gtaOrange/80 hover:bg-gtaOrange transition-colors cursor-pointer flex items-center justify-center border-t-2 border-black/50 clip-path-triangle">
                                <span className="text-white font-gta text-2xl mt-8">T</span>
                            </div>

                            {/* Center Avatar */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-800 rounded-full border-4 border-white overflow-hidden z-10">
                                <div className="w-full h-full bg-gray-600 flex items-center justify-center text-white font-bold">YA</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-grow">
                        <h2 className="text-5xl text-white font-gta mb-6">
                            CHARACTER <span className="text-gtaGreen">BIO</span>
                        </h2>

                        <div className="bg-black/60 p-8 rounded-sm border-l-4 border-gtaGreen">
                            <h3 className="text-2xl text-white font-gta mb-4 uppercase">{portfolioData.personalInfo.name}</h3>
                            <p className="text-gray-300 font-hud text-lg leading-relaxed mb-6">
                                {portfolioData.personalInfo.summary}
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 p-4 rounded-sm">
                                    <span className="block text-gray-500 text-xs font-bold uppercase mb-1">Location</span>
                                    <span className="text-white font-hud font-bold">{portfolioData.personalInfo.location}</span>
                                </div>
                                <div className="bg-gray-800/50 p-4 rounded-sm">
                                    <span className="block text-gray-500 text-xs font-bold uppercase mb-1">Role</span>
                                    <span className="text-white font-hud font-bold">{portfolioData.personalInfo.title}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
