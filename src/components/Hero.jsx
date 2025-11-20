import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
    return (
        <section className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-vinewood bg-cover bg-center bg-no-repeat bg-fixed">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            <div className="z-10 text-center px-4 relative">
                {/* GTA Logo Style */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    className="mb-8"
                >
                    <h2 className="text-2xl md:text-3xl text-white font-gta tracking-wider drop-shadow-lg mb-2">
                        GRAND THEFT
                    </h2>
                    <h1 className="text-6xl md:text-9xl text-white font-gta tracking-tighter drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] leading-none">
                        <span className="text-gtaGreen">PORT</span>FOLIO
                    </h1>
                    <div className="flex justify-center items-center gap-4 mt-4">
                        <div className="h-1 w-12 bg-white"></div>
                        <span className="text-xl font-gta text-white tracking-widest uppercase">Los Santos Edition</span>
                        <div className="h-1 w-12 bg-white"></div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-black/70 backdrop-blur-md p-6 rounded-lg border-l-4 border-gtaGreen inline-block max-w-2xl"
                >
                    <h3 className="text-gtaGreen font-gta text-2xl mb-2 uppercase">Mission: Get Hired</h3>
                    <p className="text-gray-200 font-hud text-lg">
                        {portfolioData.personalInfo.title} | {portfolioData.personalInfo.location}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-12 flex justify-center gap-6"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-gtaGreen text-white font-gta text-xl tracking-wide rounded-sm hover:bg-green-600 transition-colors shadow-lg uppercase"
                    >
                        Start Heist
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-gtaBlue text-white font-gta text-xl tracking-wide rounded-sm hover:bg-blue-600 transition-colors shadow-lg uppercase"
                    >
                        Call Lester
                    </a>
                </motion.div>
            </div>

            {/* HUD Elements */}
            <div className="absolute top-10 right-10 hidden md:block">
                <div className="bg-black/50 p-4 rounded-lg border-2 border-white/20 backdrop-blur-sm">
                    <div className="text-gtaGreen font-gta text-3xl text-right">$ 1,000,000,000</div>
                    <div className="text-white font-hud text-sm text-right uppercase">Bank Account</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
