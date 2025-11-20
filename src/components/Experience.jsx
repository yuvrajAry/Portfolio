import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-black font-impact text-white mb-16 neon-text text-right tracking-tighter"
                >
                    MISSIONS
                </motion.h2>

                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-2 bg-gray-800"></div>

                    <div className="space-y-12">
                        {portfolioData.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center gap-8 relative`}
                            >
                                {/* Dot on line */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black border-4 border-gammaGreen rounded-full z-10 hidden md:flex items-center justify-center">
                                    <div className="w-2 h-2 bg-gammaGreen rounded-full"></div>
                                </div>

                                {/* Content */}
                                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-12">
                                    <div className="glass-panel p-6 rounded-sm border-l-8 border-gammaGreen hover:bg-white/5 transition-colors duration-300">
                                        <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                                            <h3 className="text-2xl font-bold text-white font-futuristic">{exp.role}</h3>
                                            <span className="text-gammaGreen text-sm font-mono flex items-center gap-2 font-bold">
                                                <Calendar size={14} />
                                                {exp.date}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2 text-gray-400 mb-4 text-sm font-bold uppercase">
                                            <Briefcase size={16} />
                                            <span>{exp.company}</span>
                                            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                                            <span>{exp.type}</span>
                                        </div>

                                        <ul className="space-y-2">
                                            {exp.points.map((point, i) => (
                                                <li key={i} className="text-gray-300 text-sm flex items-start gap-2 font-mono">
                                                    <span className="text-hulkPurple mt-1 font-bold">>></span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
