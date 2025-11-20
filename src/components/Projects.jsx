import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchGitHubProjects } from '../services/githubService';
import { Github, Star, MapPin, DollarSign } from 'lucide-react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProjects = async () => {
            const data = await fetchGitHubProjects();
            setProjects(data);
            setLoading(false);
        };
        loadProjects();
    }, []);

    return (
        <section id="projects" className="py-20 px-6 bg-gray-900 relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-5xl md:text-7xl text-white font-gta tracking-wide mb-4">
                        HEIST <span className="text-gtaOrange">SETUP</span>
                    </h2>
                    <p className="text-gray-400 font-hud uppercase tracking-widest">Select a mission to view details</p>
                </div>

                {loading ? (
                    <div className="text-center text-gtaGreen font-gta text-2xl animate-pulse">
                        PLANNING HEIST...
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-[#f0f0f0] p-1 rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl relative group"
                            >
                                {/* Tape effect */}
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-yellow-200/80 rotate-[-2deg] shadow-sm z-10"></div>

                                <div className="bg-white h-full p-6 flex flex-col relative overflow-hidden">
                                    {/* Map Marker Icon */}
                                    <div className="absolute top-4 right-4 text-red-600 opacity-20 group-hover:opacity-100 transition-opacity">
                                        <MapPin size={40} />
                                    </div>

                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-gta text-black uppercase leading-none max-w-[80%]">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <div className="mb-4 flex-grow">
                                        <p className="text-gray-600 font-hud text-sm leading-relaxed font-bold">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack as "Crew" */}
                                    <div className="mb-4">
                                        <span className="text-xs font-bold text-gray-400 uppercase mb-1 block">Crew / Tech:</span>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, i) => (
                                                <span key={i} className="px-2 py-1 bg-gray-200 text-gray-800 text-xs font-bold font-hud uppercase rounded-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer / Actions */}
                                    <div className="mt-auto pt-4 border-t-2 border-dashed border-gray-300 flex justify-between items-center">
                                        <div className="flex items-center gap-1 text-gtaGreen font-bold font-hud">
                                            <DollarSign size={16} />
                                            <span>POTENTIAL: HIGH</span>
                                        </div>

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-black hover:text-gtaOrange transition-colors font-bold font-hud uppercase"
                                        >
                                            <Github size={18} />
                                            <span>View Intel</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
