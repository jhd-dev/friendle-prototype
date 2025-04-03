'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, RotateCcw, HelpCircle, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Navbar } from '@/components/navbar';

export default function ConnectionsGameScreen() {
    const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
    const [showResults, setShowResults] = useState(false);
    const [activeTab, setActiveTab] = useState('game');
    const [currentInput, setCurrentInput] = useState('');
    const [showAIHint, setShowAIHint] = useState(false);
    const [selectedWords, setSelectedWords] = useState<string[]>([]);
    const [mistakesMade, setMistakesMade] = useState(0);

    const categoriesData = {
        yellow: ['ladle', 'spoon', 'fork', 'knife'],
        green: ['apple', 'orange', 'banana', 'grape'],
        blue: ['shirt', 'pants', 'socks', 'shoes'],
        purple: ['hammer', 'drill', 'saw', 'wrench'],
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const resetGame = () => {
        setSelectedWords([]);
        setMistakesMade(0);
        setGameStatus('playing');
        setShowResults(false);
        setCurrentInput('');
    };

    const toggleWordSelection = (word) => {
        setSelectedWords((prevSelectedWords) =>
            prevSelectedWords.includes(word)
                ? prevSelectedWords.filter((w) => w !== word)
                : [...prevSelectedWords, word]
        );
    };

    useEffect(() => {
        if (selectedWords.length >= 4) {
            setGameStatus('won');
            setShowResults(true);
        }
    }, [selectedWords]);

    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-0 gap-0 bg-gray-100 font-[family-name:var(--font-geist-sans)]">
            {/* Header */}
            <div className="w-full p-4 bg-white border-b border-gray-200 flex justify-between items-center">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleTabChange('home')}
                >
                    <Home size={20} />
                </Button>
                <h1 className="text-xl font-bold text-center">Connections</h1>
                <div className="flex gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-10 w-10 p-0"
                        onClick={() => setShowAIHint(true)}
                    >
                        <span style={{ fontSize: '20px' }}>✨</span>
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-10 w-10 p-0"
                        onClick={() => resetGame()}
                    >
                        <RotateCcw size={20} />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                        <HelpCircle size={20} />
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex flex-col items-center w-full max-w-md px-4 py-6 gap-6">
                {/* Game Board */}
                <div className="grid grid-rows-6 gap-2 w-full max-w-xs">
                    {Object.values(categoriesData).map((row, rowIndex) => (
                        <div
                            key={`row-${rowIndex}`}
                            className="grid grid-cols-5 gap-2"
                        >
                            {row.map((category, colIndex) => {
                                const isSelected =
                                    selectedWords.includes(category);
                                return (
                                    <div
                                        key={`cell-${rowIndex}-${colIndex}`}
                                        className={`w-full aspect-square flex items-center justify-center text-sm font-bold border-2 ${
                                            isSelected
                                                ? 'bg-blue-200 border-blue-500'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            toggleWordSelection(category)
                                        }
                                    >
                                        {category}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </main>

            <Navbar />

            {/* Results Dialog */}
            <AlertDialog open={showResults} onOpenChange={setShowResults}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <div className="absolute top-2 right-2">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0"
                                onClick={() => setShowResults(false)}
                            >
                                <X size={16} />
                            </Button>
                        </div>
                        <AlertDialogTitle>
                            {gameStatus === 'won'
                                ? 'Congratulations!'
                                : 'Better luck next time!'}
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            You solved the puzzle in {mistakesMade + 4} tries.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="flex justify-center my-4">
                        <div className="flex gap-2">
                            <Badge variant="outline" className="px-3 py-1">
                                <span className="font-bold text-lg mr-2">
                                    12
                                </span>{' '}
                                Played
                            </Badge>
                            <Badge variant="outline" className="px-3 py-1">
                                <span className="font-bold text-lg mr-2">
                                    83%
                                </span>{' '}
                                Win
                            </Badge>
                            <Badge variant="outline" className="px-3 py-1">
                                <span className="font-bold text-lg mr-2">
                                    3
                                </span>{' '}
                                Streak
                            </Badge>
                        </div>
                    </div>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={resetGame}>
                            Play Again
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* AI Hints Dialog */}
            <AlertDialog open={showAIHint} onOpenChange={setShowAIHint}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="flex items-center">
                            <span className="text-blue-500 mr-2">✨</span>
                            AI Hints
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            <div className="space-y-3 mt-3">
                                <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-left">
                                    <div className="mb-1 ml-1">
                                        <p className="font-medium ">
                                            Suggested next words:
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                                            SLATE
                                        </Badge>
                                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                                            CRANE
                                        </Badge>
                                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                                            AUDIO
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction>Close</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
