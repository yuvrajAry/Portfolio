import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { text: "Listen, I've dug up some info on Yuvraj. What do you want to know? Projects? Skills?", isBot: true }
    ]);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const generateResponse = (query) => {
        const lowerQuery = query.toLowerCase();

        if (lowerQuery.includes('project') || lowerQuery.includes('work')) {
            return "Alright, check the board. He's pulled off 'Adverse Weather Safe Segmentation' and 'Fraud Detection'. Big scores. Which one interests you?";
        }
        if (lowerQuery.includes('skill') || lowerQuery.includes('stack')) {
            return `His stats are maxed out in ${portfolioData.skills.languages.join(', ')}. He's dangerous with ${portfolioData.skills.frameworks[0]} too.`;
        }
        if (lowerQuery.includes('experience') || lowerQuery.includes('job')) {
            return "He did time at DeepCytes as a Cyber Fellow. Also worked a job at Project Human City. Clean records.";
        }
        if (lowerQuery.includes('contact')) {
            return "Use the iFruit. Send him an email. Don't bring any heat.";
        }

        return "I don't have intel on that. Stick to the plan: Projects, Skills, Experience.";
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { text: input, isBot: false };
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        setTimeout(() => {
            const botResponse = { text: generateResponse(input), isBot: true };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };

    return (
        <>
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 p-4 bg-gtaGreen rounded-full text-white shadow-lg border-2 border-white ${isOpen ? 'hidden' : 'block'}`}
            >
                <MessageSquare size={24} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        className="fixed bottom-6 right-6 z-50 w-80 md:w-96 h-[500px] bg-white rounded-t-xl rounded-b-md shadow-2xl flex flex-col overflow-hidden border border-gray-300"
                    >
                        {/* Header - LifeInvader style */}
                        <div className="p-3 bg-[#bf0000] flex justify-between items-center text-white shadow-md">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden border border-white">
                                    <img src="https://ui-avatars.com/api/?name=Lester+Crest&background=random" alt="Lester" />
                                </div>
                                <span className="font-hud font-bold">Lester Crest</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:text-gray-200">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg text-sm font-hud shadow-sm ${msg.isBot
                                                ? 'bg-white text-gray-800 border border-gray-200'
                                                : 'bg-gtaGreen text-white'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-200">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Message Lester..."
                                    className="flex-1 bg-gray-100 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gtaGreen font-hud"
                                />
                                <button
                                    type="submit"
                                    className="p-2 bg-gtaGreen text-white rounded-full hover:bg-green-600 transition-colors"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
