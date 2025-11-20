import React from 'react';
import BleeterFeed from './BleeterFeed';
import JobMap from './JobMap';
import { hotSkills } from '../services/intelService';
import { TrendingUp, TrendingDown, Globe, Radio } from 'lucide-react';

const Intel = () => {
    return (
        <section id="intel" className="py-20 px-6 bg-gray-900 min-h-screen">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-5xl md:text-7xl text-white font-gta tracking-wide mb-4">
                        INSIDER <span className="text-red-500">INTEL</span>
                    </h2>
                    <p className="text-gray-400 font-hud uppercase tracking-widest">Market Trends & Global Opportunities</p>
                </div>

                {/* Stock Ticker (BAWSAQ Style) */}
                <div className="mb-12 bg-black border-y-4 border-gray-800 overflow-hidden whitespace-nowrap py-3 relative">
                    <div className="animate-marquee inline-block">
                        {hotSkills.map((skill, i) => (
                            <span key={i} className="mx-8 font-hud text-xl font-bold">
                                <span className="text-white uppercase">{skill.symbol}</span>
                                <span className={`ml-2 ${skill.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                                    {skill.trend === 'up' ? '▲' : '▼'} {skill.price}
                                </span>
                            </span>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {hotSkills.map((skill, i) => (
                            <span key={`dup-${i}`} className="mx-8 font-hud text-xl font-bold">
                                <span className="text-white uppercase">{skill.symbol}</span>
                                <span className={`ml-2 ${skill.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                                    {skill.trend === 'up' ? '▲' : '▼'} {skill.price}
                                </span>
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column: Bleeter Feed */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <Radio className="text-blue-400 animate-pulse" />
                            <h3 className="font-gta text-2xl uppercase">Live Feed</h3>
                        </div>
                        <BleeterFeed />
                    </div>

                    {/* Right Column: Job Map */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <Globe className="text-gtaGreen" />
                            <h3 className="font-gta text-2xl uppercase">Job Heatmap</h3>
                        </div>
                        <JobMap />

                        {/* Additional Info Box */}
                        <div className="mt-6 bg-black/50 border-l-4 border-gtaOrange p-6 backdrop-blur-sm">
                            <h4 className="text-gtaOrange font-gta text-xl mb-2 uppercase">Lester's Note</h4>
                            <p className="text-gray-300 font-hud">
                                "Listen, the market is volatile. San Andreas pays the most, but the cost of living will kill you.
                                Bangalore is booming if you can handle the heat. Remote work? That's the real heist.
                                Keep an eye on the ticker, kid."
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Intel;
