'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { WeeklyStreak } from '@/components/weekly-streak';
import { Navbar } from '@/components/navbar';

const weeklyStreak = {
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
};

const aiInsightsData = [
    {
        id: 1,
        title: 'Careful with double consonants!',
        description:
            'You often miss words such as “apple” or “dolly” that contain the same consonant multiple times.',
    },
    {
        id: 2,
        title: 'Careful with double consonants!',
        description:
            'You often miss words such as “apple” or “dolly” that contain the same consonant multiple times.',
    },
    {
        id: 3,
        title: 'Careful with double consonants!',
        description:
            'You often miss words such as “apple” or “dolly” that contain the same consonant multiple times.',
    },
];

export default function Page() {
    const [selectedMode, setSelectedMode] = useState(null);
    const [activeTab, setActiveTab] = useState('home');

    const handleModeSelect = (modeId) => {
        setSelectedMode(modeId);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        // In a real app, you would handle navigation or content switching
        alert(`Navigating to ${tab} tab`);
    };

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-0 gap-0 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start overflow-hidden">
                <div className="flex flex-col items-center text-left min-h-screen bg-gray-100 gap-4">
                    <div className="text-3xl font-bold">
                        Performance Dashboard
                    </div>
                    <div className="w-full text-left px-4">
                        <div className="text-2xl font-bold mb-2">Your week</div>
                        <Card className="min-w-[200px] max-w-screen text-left flex-shrink bg-card hover:bg-gray-200">
                            <CardHeader className="text-center">
                                <CardTitle className="text-lg font-bold">
                                    01/02/03 - 01/09/03
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <WeeklyStreak
                                    streak={weeklyStreak}
                                ></WeeklyStreak>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="w-full text-left">
                        <div className="ml-4 text-2xl font-bold">
                            AI Insights ✨
                        </div>
                        <div className="mt-2 overflow-x-auto space-y-4">
                            <div className="flex gap-4 overflow-x-scroll max-w-screen ml-4">
                                {aiInsightsData.map((insight) => (
                                    <Card
                                        key={insight.id}
                                        className="min-w-[200px] max-w-screen text-left flex-shrink bg-card hover:bg-gray-200 cursor-pointer"
                                        onClick={() =>
                                            handleModeSelect(insight.id)
                                        }
                                    >
                                        <CardHeader className="text-left">
                                            <CardTitle className="text-lg font-bold">
                                                {insight.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm opacity-90">
                                                {insight.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Navbar />
        </div>
    );
}
