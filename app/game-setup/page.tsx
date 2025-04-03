'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Navbar } from '@/components/navbar';

export default function Page() {
    const [selectedMode, setSelectedMode] = useState(null);

    const gameModes = [
        {
            id: 'classic',
            title: 'Classic Mode',
            description:
                'The original game experience with standard rules and challenges.',
            icon: '🏆',
        },
        {
            id: 'custom',
            title: 'Custom Game',
            description:
                'Use a custom set of potential words based on a topic of your choice.',
            icon: '🎨',
        },
        {
            id: 'timeAttack',
            title: 'Time Attack',
            description:
                'Race against the clock to complete challenges before time runs out.',
            icon: '⏱️',
        },
        {
            id: 'teamPlay',
            title: 'Team Play',
            description:
                'Collaborate with friends in this multiplayer cooperative experience.',
            icon: '👥',
        },
        {
            id: 'extreme',
            title: 'Extreme Mode',
            description:
                'For experienced players only. Higher difficulty with special challenges.',
            icon: '🔥',
        },
    ];

    const handleModeSelect = (modeId) => {
        setSelectedMode(modeId);
    };

    const handleStartGame = () => {
        if (selectedMode) {
            alert(
                `Starting game in ${
                    gameModes.find((mode) => mode.id === selectedMode)?.title
                }`
            );
            // In a real app, you would navigate to the game screen or start the game logic
        }
    };

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-0 gap-0 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
                    <Tabs defaultValue="wordle" className="">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="wordle">
                                <CardTitle>Wordle</CardTitle>
                            </TabsTrigger>
                            <TabsTrigger value="connections">
                                Connections
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="wordle">
                            <Card className="w-full max-w-md">
                                <CardHeader className="text-center">
                                    <CardTitle className="text-2xl font-bold">
                                        Game Setup
                                    </CardTitle>
                                    <CardDescription>
                                        Select a game mode to begin
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    {gameModes.map((mode) => (
                                        <div
                                            key={mode.id}
                                            className={`flex p-4 rounded-lg cursor-pointer transition-colors ${
                                                selectedMode === mode.id
                                                    ? 'bg-primary text-primary-foreground'
                                                    : 'bg-card hover:bg-gray-200'
                                            }`}
                                            onClick={() =>
                                                handleModeSelect(mode.id)
                                            }
                                        >
                                            <div className="text-2xl flex items-start pt-1">
                                                {mode.icon}
                                            </div>
                                            <div className="flex-1 ml-4">
                                                <div className="flex items-center">
                                                    <h3
                                                        className={`${
                                                            selectedMode ===
                                                            mode.id
                                                                ? 'font-bold'
                                                                : 'font-medium'
                                                        }`}
                                                    >
                                                        {mode.title}
                                                    </h3>
                                                    {selectedMode ===
                                                        mode.id && (
                                                        <div className="ml-2 bg-white bg-opacity-75 rounded-full w-4 h-4 flex items-center justify-center">
                                                            <Check
                                                                className="h-3 w-3 text-primary"
                                                                strokeWidth={4}
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                                <p className="text-sm opacity-90">
                                                    {mode.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>

                                <CardFooter className="flex justify-center pb-6 pt-2">
                                    <Button
                                        className="w-full"
                                        size="lg"
                                        disabled={!selectedMode}
                                        onClick={handleStartGame}
                                    >
                                        Start Game
                                    </Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="connections">
                            <Card className="w-full max-w-md">
                                <CardHeader className="text-center">
                                    <CardTitle className="text-2xl font-bold">
                                        Game Setup
                                    </CardTitle>
                                    <CardDescription>
                                        Select a game mode to begin
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    {gameModes.map((mode) => (
                                        <div
                                            key={mode.id}
                                            className={`flex p-4 rounded-lg cursor-pointer transition-colors ${
                                                selectedMode === mode.id
                                                    ? 'bg-primary text-primary-foreground'
                                                    : 'bg-card hover:bg-gray-200'
                                            }`}
                                            onClick={() =>
                                                handleModeSelect(mode.id)
                                            }
                                        >
                                            <div className="text-2xl flex items-start pt-1">
                                                {mode.icon}
                                            </div>
                                            <div className="flex-1 ml-4">
                                                <div className="flex items-center">
                                                    <h3
                                                        className={`${
                                                            selectedMode ===
                                                            mode.id
                                                                ? 'font-bold'
                                                                : 'font-medium'
                                                        }`}
                                                    >
                                                        {mode.title}
                                                    </h3>
                                                    {selectedMode ===
                                                        mode.id && (
                                                        <div className="ml-2 bg-white bg-opacity-75 rounded-full w-4 h-4 flex items-center justify-center">
                                                            <Check
                                                                className="h-3 w-3 text-primary"
                                                                strokeWidth={4}
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                                <p className="text-sm opacity-90">
                                                    {mode.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>

                                <CardFooter className="flex justify-center pb-6 pt-2">
                                    <Button
                                        className="w-full"
                                        size="lg"
                                        disabled={!selectedMode}
                                        onClick={handleStartGame}
                                    >
                                        Start Game
                                    </Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
            <Navbar />
        </div>
    );
}
