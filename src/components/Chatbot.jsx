import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { text: "HULK SMASH BUGS! I mean... Hello! I'm Yuvraj's AI Assistant. Ask me about his projects!", isBot: true }
    ]);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const generateResponse = (query) => {
        const lowerQuery = query.toLowerCase();

        if (lowerQuery.includes('project') || lowerQuery.includes('work')) {
            return "Yuvraj has smashed many projects! 'Adverse Weather Safe Segmentation', 'Fraud Detection System', and 'AI-Auto-Scaling' are some of the strongest. Which one do you want to investigate?";
        }
        if (lowerQuery.includes('skill') || lowerQuery.includes('stack') || lowerQuery.includes('technology')) {
            return `His arsenal includes ${portfolioData.skills.languages.join(', ')} and frameworks like ${portfolioData.skills.frameworks.join(', ')}.`;
        }
        if (lowerQuery.includes('experience') || lowerQuery.includes('job')) {
            return "He served as a Cyber Developer Fellow at DeepCytes and a Web Development Intern at Project Human City.";
        }
        if (lowerQuery.includes('contact') || lowerQuery.includes('email')) {
            return `Send a transmission to ${portfolioData.personalInfo.email} or check his LinkedIn.`;
        }

        return "I am programmed to assist. Ask about projects, skills, or experience. Don't make me angry.";
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
                className={`fixed bottom-6 right-6 z-50 p-4 bg-gammaGreen rounded-full text-black shadow-[0_0_20px_#76b900] ${isOpen ? 'hidden' : 'block'}`}
            >
                <MessageSquare size={24} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="fixed bottom-6 right-6 z-50 w-80 md:w-96 h-[500px] glass-panel rounded-sm flex flex-col overflow-hidden border-2 border-gammaGreen/50 shadow-[0_0_30px_rgba(118,185,0,0.3)]"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gammaGreen flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Bot className="text-black" size={24} />
                                <span className="font-impact text-black text-lg tracking-wide">AI ASSISTANT</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-black hover:text-white transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/90">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                                    <div
                                        className={`max-w-[80%] p-3 rounded-sm text-sm font-mono ${msg.isBot
                                                ? 'bg-gray-800 text-gammaGreen border border-gammaGreen/30'
                                                : 'bg-hulkPurple text-white border border-hulkPurple/30'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-4 border-t border-gammaGreen/20 bg-black">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about projects..."
                                    className="flex-1 bg-gray-900 border border-gray-700 rounded-sm px-3 py-2 text-white text-sm focus:border-gammaGreen focus:outline-none font-mono"
                                />
                                <button
                                    type="submit"
                                    className="p-2 bg-gammaGreen text-black rounded-sm hover:bg-white transition-colors"
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
