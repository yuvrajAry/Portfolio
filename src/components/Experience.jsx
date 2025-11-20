import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6 bg-black">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl text-white font-gta tracking-wide mb-12 text-center">
                    MISSION <span className="text-white">PASSED</span>
                </h2>

                <div className="space-y-8">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative"
                        >
                            {/* Mission Row */}
                            <div className="bg-gradient-to-r from-gray-900 to-black p-6 border-l-8 border-gtaOrange flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-lg">
                                <div>
                                    <h3 className="text-2xl text-white font-gta uppercase tracking-wide">{exp.role}</h3>
                                    <div className="text-gtaOrange font-hud font-bold uppercase text-sm">{exp.company}</div>
                                </div>

                                <div className="text-right">
                                    <div className="text-gray-400 font-hud font-bold text-sm">{exp.date}</div>
                                    <div className="text-gray-500 text-xs font-bold uppercase">{exp.type}</div>
                                </div>
                            </div>

                            {/* Details (like mission objectives) */}
                            <div className="bg-gray-900/50 p-6 mt-1 ml-2 border-l-2 border-gray-700">
                                <ul className="space-y-2">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="text-gray-300 font-hud text-sm flex items-start gap-2">
                                            <span className="text-gtaOrange">•</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
