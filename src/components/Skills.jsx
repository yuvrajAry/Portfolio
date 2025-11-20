import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
    const categories = [
        { name: 'Languages', items: portfolioData.skills.languages, color: 'text-gammaGreen', border: 'border-gammaGreen' },
        { name: 'Frameworks', items: portfolioData.skills.frameworks, color: 'text-hulkPurple', border: 'border-hulkPurple' },
        { name: 'Tools', items: portfolioData.skills.tools, color: 'text-white', border: 'border-white' },
        { name: 'Concepts', items: portfolioData.skills.concepts, color: 'text-gray-400', border: 'border-gray-400' },
    ];

    return (
        <section id="skills" className="py-20 px-6 bg-black relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-black font-impact text-white mb-16 neon-text tracking-tighter"
                >
                    ARSENAL
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-sm border-l-4 border-gammaGreen hover:bg-white/5 transition-colors duration-300"
                        >
                            <h3 className={`text-3xl font-bold mb-6 ${category.color} font-impact uppercase tracking-wide`}>
                                {category.name}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.items.map((item, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.1, rotate: -2 }}
                                        className={`px-4 py-2 bg-transparent border-2 ${category.border} rounded-sm text-white text-sm font-bold font-mono hover:bg-white/10 transition-all cursor-default uppercase`}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
