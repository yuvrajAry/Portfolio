import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 left-0 px-6 py-4">
            <div className="max-w-7xl mx-auto glass-panel rounded-none border-2 border-gammaGreen/30 px-6 py-3 flex justify-between items-center bg-black/80">
                <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl font-impact font-bold text-gammaGreen tracking-tighter"
                >
                    YA
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-gray-300 hover:text-gammaGreen transition-colors duration-300 text-sm uppercase tracking-widest font-bold font-futuristic"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                {/* Social Icons */}
                <div className="hidden md:flex items-center space-x-4">
                    <motion.a
                        href="https://github.com/yuvrajAry"
                        target="_blank"
                        whileHover={{ scale: 1.2, color: '#76b900' }}
                        className="text-white transition-colors"
                    >
                        <Github size={24} />
                    </motion.a>
                    <motion.a
                        href="https://linkedin.com/in/yuvraj-aryan"
                        target="_blank"
                        whileHover={{ scale: 1.2, color: '#76b900' }}
                        className="text-white transition-colors"
                    >
                        <Linkedin size={24} />
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gammaGreen">
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-20 left-0 w-full px-6"
                >
                    <div className="glass-panel rounded-none border-2 border-gammaGreen/30 p-6 flex flex-col space-y-4 bg-black/90">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-gammaGreen text-center py-2 font-futuristic font-bold uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
