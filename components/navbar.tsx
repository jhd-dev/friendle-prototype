'use client';

import { Home, Play, Settings, Trophy, UserPlus } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        // In a real app, you would handle navigation or content switching
        alert(`Navigating to ${tab} tab`);
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 px-2">
            <button
                onClick={() => handleTabChange('home')}
                className={`flex flex-col items-center justify-center w-full h-full ${
                    activeTab === 'home' ? 'text-primary' : 'text-gray-400'
                }`}
            >
                <Home size={24} />
                <span className="text-xs mt-1">Dashboard</span>
            </button>

            <button
                onClick={() => handleTabChange('game-setup')}
                className={`flex flex-col items-center justify-center w-full h-full ${
                    activeTab === 'search' ? 'text-primary' : 'text-gray-400'
                }`}
            >
                {<Play size={24} />}
                <span className="text-xs mt-1">Play</span>
            </button>

            <button
                onClick={() => handleTabChange('leaderboard')}
                className={`flex flex-col items-center justify-center w-full h-full ${
                    activeTab === 'leaderboard'
                        ? 'text-primary'
                        : 'text-gray-400'
                }`}
            >
                {<Trophy size={24} />}
                <span className="text-xs mt-1">Rank</span>
            </button>

            <button
                onClick={() => handleTabChange('social')}
                className={`flex flex-col items-center justify-center w-full h-full ${
                    activeTab === 'social' ? 'text-primary' : 'text-gray-400'
                }`}
            >
                <UserPlus size={24} />
                <span className="text-xs mt-1">Social</span>
            </button>

            <button
                onClick={() => handleTabChange('settings')}
                className={`flex flex-col items-center justify-center w-full h-full ${
                    activeTab === 'settings' ? 'text-primary' : 'text-gray-400'
                }`}
            >
                <Settings size={24} />
                <span className="text-xs mt-1">Settings</span>
            </button>
        </div>
    );
}
