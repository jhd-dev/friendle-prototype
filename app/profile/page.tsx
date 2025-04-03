'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Navbar } from '@/components/navbar';
import { Camera, Edit, Trophy } from 'lucide-react';

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    // Mock user data
    const [userData, setUserData] = useState({
        name: 'Alex Johnson',
        username: 'alexj',
        email: 'alex@example.com',
        bio: 'Word enthusiast and puzzle solver. I love challenging my vocabulary daily!',
        avatar: '/placeholder.svg?height=80&width=80',
    });

    const achievements = [
        {
            id: 1,
            title: 'First Win',
            description: 'Complete your first puzzle',
            completed: true,
            date: '2024-12-10',
        },
        {
            id: 2,
            title: '7 Day Streak',
            description: 'Play for 7 consecutive days',
            completed: true,
            date: '2024-12-17',
        },
        {
            id: 3,
            title: 'Speed Demon',
            description: 'Solve a puzzle in under 2 minutes',
            completed: true,
            date: '2024-12-22',
        },
        {
            id: 4,
            title: 'Word Master',
            description: 'Solve 50 puzzles',
            completed: false,
        },
        {
            id: 5,
            title: '30 Day Streak',
            description: 'Play for 30 consecutive days',
            completed: false,
        },
    ];

    const stats = [
        { label: 'Puzzles Solved', value: 37 },
        { label: 'Win Rate', value: '78%' },
        { label: 'Current Streak', value: 12 },
        { label: 'Best Streak', value: 15 },
    ];

    const handleSaveProfile = () => {
        setIsSaving(true);
        // Simulate API call
        setTimeout(() => {
            setIsSaving(false);
            setIsEditing(false);
            alert('Profile updated successfully!');
        }, 1000);
    };

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-2xl">
                <Card className="w-full">
                    <CardHeader className="relative pb-2">
                        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-6">
                            <div className="relative mb-4 sm:mb-0">
                                <Avatar className="h-20 w-20 border-4 border-background">
                                    <AvatarImage
                                        src={userData.avatar}
                                        alt={userData.name}
                                    />
                                    <AvatarFallback>
                                        {userData.name
                                            .substring(0, 2)
                                            .toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                {isEditing && (
                                    <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-1 cursor-pointer">
                                        <Camera className="h-4 w-4" />
                                    </div>
                                )}
                            </div>
                            <div className="text-center sm:text-left flex-1">
                                {!isEditing ? (
                                    <>
                                        <CardTitle className="text-2xl font-bold">
                                            {userData.name}
                                        </CardTitle>
                                        <CardDescription className="text-muted-foreground">
                                            @{userData.username}
                                        </CardDescription>
                                        <p className="mt-2 text-sm">
                                            {userData.bio}
                                        </p>
                                    </>
                                ) : (
                                    <div className="space-y-3 w-full">
                                        <div>
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                value={userData.name}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        name: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="username">
                                                Username
                                            </Label>
                                            <Input
                                                id="username"
                                                value={userData.username}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        username:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="bio">Bio</Label>
                                            <Input
                                                id="bio"
                                                value={userData.bio}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        bio: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                value={userData.email}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        email: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {!isEditing ? (
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-6 right-6"
                                onClick={() => setIsEditing(true)}
                            >
                                <Edit className="h-4 w-4" />
                            </Button>
                        ) : null}
                    </CardHeader>
                    {isEditing && (
                        <CardFooter className="pt-0">
                            <div className="flex gap-2 w-full">
                                <Button
                                    variant="outline"
                                    className="flex-1"
                                    onClick={() => setIsEditing(false)}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    className="flex-1"
                                    onClick={handleSaveProfile}
                                    disabled={isSaving}
                                >
                                    {isSaving ? 'Saving...' : 'Save Changes'}
                                </Button>
                            </div>
                        </CardFooter>
                    )}
                </Card>

                <div className="grid grid-cols-2 gap-4 w-full">
                    {stats.map((stat, index) => (
                        <Card key={index} className="text-center">
                            <CardContent className="pt-6">
                                <p className="text-sm text-muted-foreground">
                                    {stat.label}
                                </p>
                                <p className="text-2xl font-bold mt-1">
                                    {stat.value}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="w-full">
                    <Tabs defaultValue="achievements" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="achievements">
                                Achievements
                            </TabsTrigger>
                            <TabsTrigger value="history">
                                Game History
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="achievements">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Trophy className="mr-2 h-5 w-5" />
                                        Achievements
                                    </CardTitle>
                                    <CardDescription>
                                        Complete challenges to earn achievements
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {achievements.map((achievement) => (
                                        <div
                                            key={achievement.id}
                                            className="flex items-start"
                                        >
                                            <div
                                                className={`flex items-center justify-center rounded-full w-8 h-8 mt-1 ${
                                                    achievement.completed
                                                        ? 'bg-primary text-primary-foreground'
                                                        : 'bg-muted'
                                                }`}
                                            >
                                                {achievement.completed ? (
                                                    <Trophy className="h-4 w-4" />
                                                ) : (
                                                    <div className="h-4 w-4 opacity-30"></div>
                                                )}
                                            </div>
                                            <div className="ml-4">
                                                <h4
                                                    className={`font-medium ${
                                                        achievement.completed
                                                            ? ''
                                                            : 'text-muted-foreground'
                                                    }`}
                                                >
                                                    {achievement.title}
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {achievement.description}
                                                </p>
                                                {achievement.completed &&
                                                    achievement.date && (
                                                        <p className="text-xs text-muted-foreground mt-1">
                                                            Completed on{' '}
                                                            {new Date(
                                                                achievement.date
                                                            ).toLocaleDateString()}
                                                        </p>
                                                    )}
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="history">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Game History</CardTitle>
                                    <CardDescription>
                                        Your recent games and results
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="flex justify-between items-center p-3 rounded-lg bg-muted/50"
                                            >
                                                <div>
                                                    <p className="font-medium">
                                                        {i % 2 === 0
                                                            ? 'Wordle'
                                                            : 'Connections'}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {new Date(
                                                            2025,
                                                            3,
                                                            2 - i
                                                        ).toLocaleDateString()}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className={`text-sm px-2 py-1 rounded-md ${
                                                            i !== 1
                                                                ? 'bg-green-100 text-green-700'
                                                                : 'bg-red-100 text-red-700'
                                                        }`}
                                                    >
                                                        {i !== 1
                                                            ? 'Win'
                                                            : 'Loss'}
                                                    </div>
                                                    <div className="text-sm font-medium">
                                                        {i !== 1
                                                            ? `${
                                                                  Math.floor(
                                                                      Math.random() *
                                                                          5
                                                                  ) + 1
                                                              }/6`
                                                            : '6/6'}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>

            <Navbar />
        </div>
    );
}
