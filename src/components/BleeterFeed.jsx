import React, { useEffect, useState } from 'react';
import { fetchTechNews } from '../services/intelService';
import { MessageCircle, Heart, Repeat, Share } from 'lucide-react';
import { motion } from 'framer-motion';

const BleeterFeed = () => {
    const [bleets, setBleets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadNews = async () => {
            const data = await fetchTechNews();
            setBleets(data);
            setLoading(false);
        };
        loadNews();
    }, []);

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200 max-w-2xl mx-auto">
            {/* Header */}
            <div className="bg-[#1DA1F2] p-4 flex items-center justify-between">
                <h3 className="text-white font-gta text-2xl tracking-wide">BLEETER</h3>
                <div className="text-white/80 text-xs font-hud font-bold">LIVE FEED</div>
            </div>

            {/* Feed */}
            <div className="max-h-[600px] overflow-y-auto bg-gray-50">
                {loading ? (
                    <div className="p-8 text-center text-gray-500 font-hud animate-pulse">
                        Fetching latest bleets...
                    </div>
                ) : (
                    bleets.map((bleet, index) => (
                        <motion.div
                            key={bleet.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-4 border-b border-gray-200 hover:bg-gray-100 transition-colors"
                        >
                            <div className="flex gap-3">
                                {/* Avatar */}
                                <div className="flex-shrink-0">
                                    <img
                                        src={bleet.avatar || `https://ui-avatars.com/api/?name=${bleet.user}&background=random`}
                                        alt={bleet.user}
                                        className="w-12 h-12 rounded-full border border-gray-300"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-gray-900 font-hud">{bleet.user}</span>
                                        <span className="text-gray-500 text-sm font-hud">{bleet.username}</span>
                                        <span className="text-gray-400 text-xs">• {bleet.time}</span>
                                    </div>

                                    <p className="text-gray-800 font-hud text-sm mb-3 leading-relaxed">
                                        {bleet.content}
                                    </p>

                                    {bleet.link !== '#' && (
                                        <a
                                            href={bleet.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#1DA1F2] text-xs font-bold hover:underline mb-3 block"
                                        >
                                            Read full article via Dev.to
                                        </a>
                                    )}

                                    {/* Actions */}
                                    <div className="flex justify-between text-gray-500 max-w-md">
                                        <button className="flex items-center gap-1 hover:text-[#1DA1F2] transition-colors">
                                            <MessageCircle size={16} />
                                            <span className="text-xs">{bleet.comments}</span>
                                        </button>
                                        <button className="flex items-center gap-1 hover:text-green-500 transition-colors">
                                            <Repeat size={16} />
                                            <span className="text-xs">Repost</span>
                                        </button>
                                        <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                                            <Heart size={16} />
                                            <span className="text-xs">{bleet.likes}</span>
                                        </button>
                                        <button className="flex items-center gap-1 hover:text-[#1DA1F2] transition-colors">
                                            <Share size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>
        </div>
    );
};

export default BleeterFeed;
