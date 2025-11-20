import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchGitHubProjects } from '../services/githubService';
import { Github, Code, Star, Calendar } from 'lucide-react';

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
        <section id="projects" className="py-20 px-6 relative overflow-hidden bg-black">
            {/* Background Elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gammaGreen opacity-10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-hulkPurple opacity-10 blur-[100px] rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-black font-impact text-white mb-16 neon-text text-center tracking-tighter"
                >
                    PROJECTS
                </motion.h2>

                {loading ? (
                    <div className="text-center text-gammaGreen font-mono animate-pulse">
                        SCANNING REPOSITORIES...
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="hulk-smash glass-panel p-6 rounded-sm border-2 border-gray-800 hover:border-gammaGreen transition-all duration-300 group flex flex-col h-full bg-black/60"
                            >
                                <div className="mb-4 flex justify-between items-start">
                                    <div className="p-3 bg-gammaGreen/10 rounded-sm text-gammaGreen group-hover:text-black group-hover:bg-gammaGreen transition-colors duration-300">
                                        <Code size={24} />
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        {project.stars > 0 && (
                                            <span className="flex items-center gap-1 text-yellow-500 text-xs font-mono">
                                                <Star size={14} fill="currentColor" />
                                                {project.stars}
                                            </span>
                                        )}
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gammaGreen transition-colors font-futuristic truncate">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-xs font-bold font-mono bg-hulkPurple/20 rounded-sm text-hulkPurple border border-hulkPurple/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.updatedAt && (
                                    <div className="mt-4 pt-4 border-t border-gray-800 flex items-center gap-2 text-xs text-gray-500 font-mono">
                                        <Calendar size={12} />
                                        Updated: {project.updatedAt}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
