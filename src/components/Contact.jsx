import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            setIsSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 3000);
        }, 1000);
    };

    return (
        <section id="contact" className="py-20 px-6 relative bg-black">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-black font-impact text-white mb-16 neon-text text-center tracking-tighter"
                >
                    ASSEMBLE
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 md:p-12 rounded-sm relative overflow-hidden border-2 border-gammaGreen/50"
                >
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gammaGreen text-sm mb-2 font-bold font-mono uppercase">NAME</label>
                                <input
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-black/80 border-2 border-gray-800 rounded-sm px-4 py-3 text-white focus:border-gammaGreen focus:outline-none transition-colors font-mono"
                                    placeholder="TONY STARK"
                                />
                            </div>
                            <div>
                                <label className="block text-gammaGreen text-sm mb-2 font-bold font-mono uppercase">EMAIL</label>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-black/80 border-2 border-gray-800 rounded-sm px-4 py-3 text-white focus:border-gammaGreen focus:outline-none transition-colors font-mono"
                                    placeholder="IRONMAN@AVENGERS.COM"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gammaGreen text-sm mb-2 font-bold font-mono uppercase">MESSAGE</label>
                            <textarea
                                required
                                rows="5"
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="w-full bg-black/80 border-2 border-gray-800 rounded-sm px-4 py-3 text-white focus:border-gammaGreen focus:outline-none transition-colors resize-none font-mono"
                                placeholder="WE HAVE A HULK..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-gammaGreen text-black font-bold font-futuristic rounded-sm hover:bg-white hover:text-gammaGreen transition-all flex justify-center items-center gap-2 uppercase tracking-wider text-lg"
                        >
                            {isSubmitted ? (
                                <>
                                    <CheckCircle size={24} />
                                    TRANSMISSION SENT
                                </>
                            ) : (
                                <>
                                    <Send size={24} />
                                    SEND TRANSMISSION
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
