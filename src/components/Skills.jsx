import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const SkillBar = ({ name, level = 100, color = 'bg-hudGreen' }) => (
    <div className="mb-4">
        <div className="flex justify-between mb-1">
            <span className="text-white font-hud font-bold uppercase tracking-wide text-sm">{name}</span>
        </div>
        <div className="h-3 w-full bg-gray-800 rounded-sm overflow-hidden border border-gray-600">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className={`h-full ${color}`}
            ></motion.div>
        </div>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-6 bg-black relative">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-5xl md:text-7xl text-white font-gta tracking-wide mb-12 text-right">
                    PLAYER <span className="text-gtaBlue">STATS</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Column 1: Languages (Franklin Style) */}
                    <div className="bg-black/50 p-8 border-l-4 border-gtaGreen backdrop-blur-sm">
                        <h3 className="text-2xl text-gtaGreen font-gta mb-6 uppercase">Special Abilities</h3>
                        {portfolioData.skills.languages.map((skill, i) => (
                            <SkillBar key={i} name={skill} level={90 - (i * 5)} color="bg-gtaGreen" />
                        ))}
                    </div>

                    {/* Column 2: Frameworks (Michael Style) */}
                    <div className="bg-black/50 p-8 border-l-4 border-gtaBlue backdrop-blur-sm">
                        <h3 className="text-2xl text-gtaBlue font-gta mb-6 uppercase">Weapon Proficiency</h3>
                        {portfolioData.skills.frameworks.map((skill, i) => (
                            <SkillBar key={i} name={skill} level={95 - (i * 5)} color="bg-gtaBlue" />
                        ))}
                    </div>

                    {/* Column 3: Tools (Trevor Style) */}
                    <div className="bg-black/50 p-8 border-l-4 border-gtaOrange backdrop-blur-sm">
                        <h3 className="text-2xl text-gtaOrange font-gta mb-6 uppercase">Driving Skill</h3>
                        {portfolioData.skills.tools.map((skill, i) => (
                            <SkillBar key={i} name={skill} level={85} color="bg-gtaOrange" />
                        ))}
                    </div>

                    {/* Column 4: Concepts (HUD Style) */}
                    <div className="bg-black/50 p-8 border-l-4 border-white backdrop-blur-sm">
                        <h3 className="text-2xl text-white font-gta mb-6 uppercase">Stamina</h3>
                        {portfolioData.skills.concepts.map((skill, i) => (
                            <SkillBar key={i} name={skill} level={90} color="bg-white" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
