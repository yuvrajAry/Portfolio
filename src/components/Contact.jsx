import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Smartphone } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    return (
        <section id="contact" className="py-20 px-6 bg-gray-900 relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center">

                {/* Phone Mockup */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-80 h-[600px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl relative overflow-hidden flex-shrink-0"
                >
                    {/* Screen */}
                    <div className="absolute inset-2 bg-cover bg-center rounded-[2.5rem] overflow-hidden flex flex-col" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')" }}>
                        {/* Status Bar */}
                        <div className="h-8 bg-black/50 flex justify-between items-center px-4 text-white text-xs font-bold">
                            <span>12:00</span>
                            <div className="flex gap-1">
                                <span>5G</span>
                                <span>100%</span>
                            </div>
                        </div>

                        {/* App Content */}
                        <div className="flex-grow bg-white/90 p-4 flex flex-col">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-gtaGreen rounded-xl mx-auto mb-2 flex items-center justify-center text-white">
                                    <Smartphone size={32} />
                                </div>
                                <h3 className="font-hud font-bold text-gray-800">iFruit Mail</h3>
                            </div>

                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-gray-100 p-3 rounded-lg text-sm font-hud border border-gray-300"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-gray-100 p-3 rounded-lg text-sm font-hud border border-gray-300"
                                />
                                <textarea
                                    rows="4"
                                    placeholder="Message"
                                    className="w-full bg-gray-100 p-3 rounded-lg text-sm font-hud border border-gray-300 resize-none"
                                ></textarea>
                                <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold font-hud shadow-md">
                                    Send
                                </button>
                            </form>
                        </div>

                        {/* Home Bar */}
                        <div className="h-1 bg-black/20 w-1/3 mx-auto rounded-full mb-2"></div>
                    </div>
                </motion.div>

                {/* Text Content */}
                <div className="text-center md:text-left">
                    <h2 className="text-5xl md:text-7xl text-white font-gta mb-6">
                        CALL <span className="text-gtaGreen">ME</span>
                    </h2>
                    <p className="text-gray-400 font-hud text-xl max-w-md mb-8">
                        Need a developer for your next big score? Hit me up on the iFruit or send a LifeInvader message.
                    </p>

                    <div className="bg-black/50 p-6 border-l-4 border-gtaGreen inline-block text-left">
                        <div className="text-gtaGreen font-gta text-2xl mb-1">Current Objective</div>
                        <div className="text-white font-hud">Respond to new inquiries</div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
