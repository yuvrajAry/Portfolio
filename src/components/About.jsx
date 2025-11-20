import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 px-6 relative bg-black">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-black font-impact text-white mb-16 neon-text tracking-tighter"
                >
                    ORIGIN STORY
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-sm relative overflow-hidden group border-2 border-gray-800"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gammaGreen to-hulkPurple transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                        <p className="text-gray-300 text-lg leading-relaxed mb-6 font-mono">
                            {portfolioData.personalInfo.summary}
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4 text-gray-400 hover:text-gammaGreen transition-colors font-bold">
                                <MapPin className="w-5 h-5" />
                                <span>{portfolioData.personalInfo.location}</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-400 hover:text-gammaGreen transition-colors font-bold">
                                <Mail className="w-5 h-5" />
                                <span>{portfolioData.personalInfo.email}</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-400 hover:text-gammaGreen transition-colors font-bold">
                                <Phone className="w-5 h-5" />
                                <span>{portfolioData.personalInfo.phone}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gammaGreen opacity-20 blur-3xl rounded-full"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-hulkPurple opacity-20 blur-3xl rounded-full"></div>

                        <div className="glass-panel p-1 rounded-sm border border-gammaGreen/30">
                            <div className="bg-black/80 rounded-sm p-6">
                                <h3 className="text-2xl font-impact text-gammaGreen mb-6 tracking-wide">POWER LEVELS</h3>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-gray-400 font-bold uppercase">Innovation</span>
                                            <span className="text-sm text-gammaGreen font-mono">100%</span>
                                        </div>
                                        <div className="w-full bg-gray-800 h-4 skew-x-12">
                                            <div className="bg-gammaGreen h-4" style={{ width: '100%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-gray-400 font-bold uppercase">Problem Solving</span>
                                            <span className="text-sm text-hulkPurple font-mono">95%</span>
                                        </div>
                                        <div className="w-full bg-gray-800 h-4 skew-x-12">
                                            <div className="bg-hulkPurple h-4" style={{ width: '95%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-gray-400 font-bold uppercase">Collaboration</span>
                                            <span className="text-sm text-white font-mono">98%</span>
                                        </div>
                                        <div className="w-full bg-gray-800 h-4 skew-x-12">
                                            <div className="bg-white h-4" style={{ width: '98%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
