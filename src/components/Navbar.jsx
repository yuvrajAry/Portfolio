import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Map, User, Briefcase, Phone, Cpu } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Map', href: '#experience', icon: Map, color: 'text-gtaBlue' },
        { name: 'Stats', href: '#skills', icon: User, color: 'text-gtaGreen' },
        { name: 'Heists', href: '#projects', icon: Briefcase, color: 'text-gtaOrange' },
        { name: 'Contact', href: '#contact', icon: Phone, color: 'text-white' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 left-0 p-4">
            {/* Desktop HUD Menu */}
            <div className="hidden md:flex justify-between items-start max-w-7xl mx-auto">
                <div className="flex gap-2">
                    {/* Mini-map placeholder vibe */}
                    <div className="w-12 h-12 rounded-full border-4 border-black bg-gray-800 flex items-center justify-center text-white font-gta text-xl shadow-lg">
                        YA
                    </div>
                </div>

                <div className="flex gap-4 bg-black/80 p-2 rounded-full border-2 border-gray-700 backdrop-blur-md">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/10 transition-colors group"
                        >
                            <link.icon size={18} className={`${link.color} group-hover:scale-110 transition-transform`} />
                            <span className="text-white font-hud text-sm font-bold uppercase tracking-wide">{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Phone Menu Button */}
            <div className="md:hidden fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-14 h-14 bg-black border-4 border-gray-800 rounded-full flex items-center justify-center text-white shadow-2xl"
                >
                    {isOpen ? <X size={24} /> : <Phone size={24} />}
                </button>
            </div>

            {/* Mobile Menu (iFruit style) */}
            {isOpen && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="md:hidden fixed bottom-24 right-6 w-64 bg-black border-4 border-gray-800 rounded-xl overflow-hidden shadow-2xl"
                >
                    <div className="bg-gray-900 p-4 text-center border-b border-gray-800">
                        <h3 className="text-white font-gta text-xl">iFruit</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-1 p-1 bg-gray-800">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="bg-black p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-900 transition-colors aspect-square"
                            >
                                <link.icon size={24} className={link.color} />
                                <span className="text-white text-xs font-hud font-bold uppercase">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
