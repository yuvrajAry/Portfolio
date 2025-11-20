import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const GammaField = (props) => {
    const ref = useRef();
    const [sphere] = React.useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#76b900"
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const Hero = () => {
    return (
        <section className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <GammaField />
                </Canvas>
            </div>

            <div className="z-10 text-center px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-gammaGreen font-futuristic text-lg md:text-xl mb-4 tracking-widest uppercase font-bold"
                >
                    Gamma Radiation Levels: Critical
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-9xl font-black font-impact text-white mb-6 neon-text tracking-tighter"
                >
                    {portfolioData.personalInfo.name.toUpperCase()}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto mb-8 font-futuristic"
                >
                    {portfolioData.personalInfo.title}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex justify-center gap-6"
                >
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-gammaGreen text-black font-bold font-futuristic hover:bg-white hover:text-gammaGreen transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(118,185,0,0.5)] hover:shadow-[0_0_30px_rgba(118,185,0,0.8)] transform hover:scale-105"
                    >
                        SMASH PROJECTS
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-transparent border-2 border-hulkPurple text-hulkPurple font-bold font-futuristic hover:bg-hulkPurple hover:text-white transition-all duration-300 rounded-sm"
                    >
                        CONTACT ME
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
