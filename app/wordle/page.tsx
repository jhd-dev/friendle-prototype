'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Keyboard, RotateCcw, HelpCircle, X } from 'lucide-react';
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

export default function WordleGameScreen() {
    const [guesses, setGuesses] = useState([
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
    ]);
    const [currentRow, setCurrentRow] = useState(0);
    const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
    const [showResults, setShowResults] = useState(false);
    const [activeTab, setActiveTab] = useState('game');
    const [currentInput, setCurrentInput] = useState('');
    const [showHint, setShowHint] = useState(false);
    const [showAIHint, setShowAIHint] = useState(false);

    // Example solution
    const solution = 'EVENT';

    // Example letter status (would normally be calculated based on guesses)
    const letterStatus = {
        A: 'absent',
        B: 'absent',
        C: 'absent',
        D: 'absent',
        E: 'correct',
        F: 'absent',
        G: 'absent',
        H: 'absent',
        I: 'absent',
        J: 'absent',
        K: 'absent',
        L: 'absent',
        M: 'absent',
        N: 'present',
        O: 'absent',
        P: 'absent',
        Q: 'absent',
        R: 'absent',
        S: 'absent',
        T: 'correct',
        U: 'absent',
        V: 'present',
        W: 'absent',
        X: 'absent',
        Y: 'absent',
        Z: 'absent',
    };

    // Example keyboard layout
    const keyboard = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK'],
    ];

    const handleKeyPress = (key) => {
        if (gameStatus !== 'playing') return;

        if (key === 'BACK') {
            if (currentInput.length > 0) {
                setCurrentInput(currentInput.slice(0, -1));
            }
        } else if (key === 'ENTER') {
            if (currentInput.length === 5) {
                // Update guesses
                const newGuesses = [...guesses];
                newGuesses[currentRow] = currentInput.split('');
                setGuesses(newGuesses);

                // Check if won
                if (currentInput === solution) {
                    setGameStatus('won');
                    setShowResults(true);
                } else if (currentRow === 5) {
                    // Last row and didn't win
                    setGameStatus('lost');
                    setShowResults(true);
                } else {
                    // Move to next row
                    setCurrentRow(currentRow + 1);
                    setCurrentInput('');
                }
            }
        } else if (currentInput.length < 5) {
            setCurrentInput(currentInput + key);
        }
    };

    const getLetterStatus = (letter, rowIndex, colIndex) => {
        // For already submitted rows
        if (rowIndex < currentRow) {
            if (solution[colIndex] === letter) return 'correct';
            if (solution.includes(letter)) return 'present';
            return 'absent';
        }
        // For current row with input
        return 'tbd';
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const resetGame = () => {
        setGuesses([
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
        ]);
        setCurrentRow(0);
        setGameStatus('playing');
        setShowResults(false);
        setCurrentInput('');
    };

    // Update current row with input
    useEffect(() => {
        const newGuesses = [...guesses];
        const inputArray = currentInput.split('');

        // Fill in letters from input
        for (let i = 0; i < 5; i++) {
            newGuesses[currentRow][i] = inputArray[i] || '';
        }

        setGuesses(newGuesses);
    }, [currentInput, guesses, currentRow]);

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
                <h1 className="text-xl font-bold text-center">Wordle</h1>
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
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-10 w-10 p-0"
                        onClick={() => setShowHint(true)}
                    >
                        <HelpCircle size={20} />
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex flex-col items-center w-full max-w-md px-4 py-6 gap-6">
                {/* Game Board */}
                <div className="grid grid-rows-6 gap-2 w-full max-w-xs">
                    {guesses.map((row, rowIndex) => (
                        <div
                            key={`row-${rowIndex}`}
                            className="grid grid-cols-5 gap-2"
                        >
                            {row.map((letter, colIndex) => {
                                const status = letter
                                    ? getLetterStatus(
                                          letter,
                                          rowIndex,
                                          colIndex
                                      )
                                    : '';
                                return (
                                    <div
                                        key={`cell-${rowIndex}-${colIndex}`}
                                        className={`w-full aspect-square flex items-center justify-center text-xl font-bold border-2 ${
                                            rowIndex === currentRow && letter
                                                ? 'border-gray-400'
                                                : rowIndex > currentRow
                                                ? 'border-gray-200'
                                                : status === 'correct'
                                                ? 'bg-green-500 text-white border-green-500'
                                                : status === 'present'
                                                ? 'bg-yellow-500 text-white border-yellow-500'
                                                : status === 'absent'
                                                ? 'bg-gray-600 text-white border-gray-600'
                                                : 'border-gray-300'
                                        }`}
                                    >
                                        {letter}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* Virtual Keyboard */}
                <Card className="w-full">
                    <CardContent className="p-2">
                        <div className="flex flex-col gap-1">
                            {keyboard.map((row, rowIndex) => (
                                <div
                                    key={`keyrow-${rowIndex}`}
                                    className="flex justify-center gap-1"
                                >
                                    {row.map((key) => {
                                        const status =
                                            key.length === 1
                                                ? letterStatus[key]
                                                : '';
                                        return (
                                            <Button
                                                key={`key-${key}`}
                                                variant="outline"
                                                size={
                                                    key === 'ENTER' ||
                                                    key === 'BACK'
                                                        ? 'default'
                                                        : 'sm'
                                                }
                                                className={`${
                                                    key === 'ENTER' ||
                                                    key === 'BACK'
                                                        ? 'px-2 text-xs font-medium min-w-16'
                                                        : 'w-8 h-10 p-0'
                                                } ${
                                                    status === 'correct'
                                                        ? 'bg-green-500 text-white border-green-500 hover:bg-green-600'
                                                        : status === 'present'
                                                        ? 'bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600'
                                                        : status === 'absent'
                                                        ? 'bg-gray-600 text-white border-gray-600 hover:bg-gray-700'
                                                        : ''
                                                }`}
                                                onClick={() =>
                                                    handleKeyPress(key)
                                                }
                                            >
                                                {key === 'BACK' ? '←' : key}
                                            </Button>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
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
                            {gameStatus === 'won'
                                ? `You solved the puzzle in ${currentRow + 1} ${
                                      currentRow === 0 ? 'try' : 'tries'
                                  }!`
                                : `The word was ${solution}.`}
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

            {/* Hint Dialog */}
            <AlertDialog open={showHint} onOpenChange={setShowHint}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>How to Play</AlertDialogTitle>
                        <AlertDialogDescription>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li>
                                    Each guess must be a valid 5-letter word.
                                </li>
                                <li>
                                    The color of the tiles will change to show
                                    how close your guess was.
                                </li>
                                <li>
                                    <span className="bg-green-500 text-white px-1">
                                        Green
                                    </span>{' '}
                                    means the letter is correct and in the right
                                    spot.
                                </li>
                                <li>
                                    <span className="bg-yellow-500 text-white px-1">
                                        Yellow
                                    </span>{' '}
                                    means the letter is in the word but in the
                                    wrong spot.
                                </li>
                                <li>
                                    <span className="bg-gray-600 text-white px-1">
                                        Gray
                                    </span>{' '}
                                    means the letter is not in the word.
                                </li>
                                <li>You have 6 attempts to guess the word.</li>
                            </ul>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction>Got it!</AlertDialogAction>
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
                                        {currentRow > 0 ? (
                                            <>
                                                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                                                    EVENT
                                                </Badge>
                                                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                                                    EVERT
                                                </Badge>
                                                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                                                    EVICT
                                                </Badge>
                                            </>
                                        ) : (
                                            <>
                                                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                                                    SLATE
                                                </Badge>
                                                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                                                    CRANE
                                                </Badge>
                                                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                                                    AUDIO
                                                </Badge>
                                            </>
                                        )}
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
