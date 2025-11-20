import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { jobHubs, fetchLiveJobs } from '../services/intelService';
import L from 'leaflet';
import { Wifi, WifiOff, Loader2 } from 'lucide-react';

// Fix for default marker icon in React Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const JobMap = () => {
    const [liveMode, setLiveMode] = useState(false);
    const [liveData, setLiveData] = useState({});
    const [loading, setLoading] = useState(false);

    const toggleLiveMode = async () => {
        if (!liveMode) {
            setLoading(true);
            const newLiveData = {};

            // Fetch data for all hubs
            const promises = jobHubs.map(async (hub) => {
                const jobs = await fetchLiveJobs('developer', hub.name.split(' ')[0]); // Use city name only
                if (jobs && jobs.length > 0) {
                    // Calculate max salary safely
                    const count = jobs.length;
                    const salaries = jobs.map(j => j.salary_max).filter(s => s && s > 0);
                    const maxSalary = salaries.length > 0 ? Math.max(...salaries) : null;

                    newLiveData[hub.id] = {
                        count: count,
                        salary: maxSalary ? `₹${(maxSalary / 100000).toFixed(1)} LPA (Max)` : 'N/A'
                    };
                }
            });

            await Promise.all(promises);
            setLiveData(newLiveData);
            setLoading(false);
        }
        setLiveMode(!liveMode);
    };

    return (
        <div className="h-[500px] w-full rounded-xl overflow-hidden border-4 border-gray-800 shadow-2xl relative">
            {/* Map Overlay UI */}
            <div className="absolute top-4 left-4 z-[1000] flex flex-col gap-2">
                <div className="bg-black/80 p-2 rounded border border-gtaGreen backdrop-blur-sm">
                    <h4 className="text-gtaGreen font-gta text-lg uppercase">India Heatmap</h4>
                    <div className="text-xs text-white font-hud">Job Demand & Salary Intel</div>
                </div>

                <button
                    onClick={toggleLiveMode}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded border backdrop-blur-sm transition-all ${liveMode
                        ? 'bg-red-500/80 border-red-400 text-white animate-pulse'
                        : 'bg-gray-900/80 border-gray-600 text-gray-400 hover:bg-gray-800'
                        }`}
                >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : (liveMode ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />)}
                    <span className="font-hud text-xs uppercase font-bold">
                        {liveMode ? 'LIVE DATA: ON' : 'LIVE DATA: OFF'}
                    </span>
                </button>
            </div>

            <MapContainer center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom={false} className="h-full w-full">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {jobHubs.map((hub) => (
                    <Marker key={hub.id} position={hub.coords}>
                        <Popup className="gta-popup">
                            <div className="p-2 min-w-[220px]">
                                <h3 className="text-lg font-gta text-black uppercase border-b-2 border-gtaGreen mb-2">
                                    {hub.name}
                                    {liveMode && liveData[hub.id] && (
                                        <span className="ml-2 text-xs bg-red-500 text-white px-1 rounded animate-pulse">LIVE</span>
                                    )}
                                </h3>

                                <div className="space-y-2 font-hud text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 font-bold">Salary:</span>
                                        <span className="text-green-600 font-bold">
                                            {liveMode && liveData[hub.id] ? liveData[hub.id].salary : hub.salary}
                                        </span>
                                    </div>

                                    {liveMode && liveData[hub.id] && (
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 font-bold">Active Jobs:</span>
                                            <span className="text-blue-600 font-bold">{liveData[hub.id].count}+</span>
                                        </div>
                                    )}

                                    <div>
                                        <span className="text-gray-600 font-bold block mb-1">Top Skills:</span>
                                        <div className="flex flex-wrap gap-1">
                                            {hub.topSkills.map(skill => (
                                                <span key={skill} className="px-1.5 py-0.5 bg-gray-200 text-xs rounded text-gray-800 font-bold">{skill}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <span className="text-gray-600 font-bold block mb-1">Key Players:</span>
                                        <div className="text-xs text-gray-500 italic">
                                            {hub.companies ? hub.companies.join(", ") : ""}
                                        </div>
                                    </div>

                                    {/* Rich Stats Grid */}
                                    {hub.stats && (
                                        <div className="grid grid-cols-3 gap-1 mt-2 pt-2 border-t border-gray-200 text-center">
                                            <div className="bg-gray-100 p-1 rounded">
                                                <div className="text-[10px] text-gray-500 uppercase">CoL</div>
                                                <div className="text-xs font-bold text-gray-800">{hub.stats.col}</div>
                                            </div>
                                            <div className="bg-gray-100 p-1 rounded">
                                                <div className="text-[10px] text-gray-500 uppercase">Net</div>
                                                <div className="text-xs font-bold text-gray-800">{hub.stats.internet}</div>
                                            </div>
                                            <div className="bg-gray-100 p-1 rounded">
                                                <div className="text-[10px] text-gray-500 uppercase">Startups</div>
                                                <div className="text-xs font-bold text-gray-800">{hub.stats.startups}</div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-200">
                                        <span className="text-gray-600 font-bold">Demand:</span>
                                        <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase animate-pulse ${hub.demand === 'Explosive' || hub.demand === 'Very High' ? 'bg-red-500 text-white' :
                                            hub.demand === 'High' ? 'bg-orange-500 text-white' :
                                                'bg-blue-500 text-white'
                                            }`}>
                                            {hub.demand}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default JobMap;
