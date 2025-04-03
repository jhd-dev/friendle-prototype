'use client';

import { useState } from 'react';
import Link from 'next/link';
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
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            alert(`Logged in with email: ${email}`);
            // In a real app, you would handle authentication and redirect
        }, 1500);
    };

    const handleSignup = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            alert(`Signed up with name: ${name} and email: ${email}`);
            // In a real app, you would handle registration and redirect
        }, 1500);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-4 bg-gray-50 font-[family-name:var(--font-geist-sans)]">
            <div className="w-full max-w-md">
                <div className="flex flex-col items-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">Friendle</h1>
                    <p className="text-muted-foreground text-center">
                        Test your vocabulary with daily word challenges
                    </p>
                </div>

                <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login">
                        <Card>
                            <form onSubmit={handleLogin}>
                                <CardHeader className="mb-4">
                                    <CardTitle>Welcome back</CardTitle>
                                    <CardDescription>
                                        Log in to your account to continue
                                        playing
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="you@example.com"
                                                className="pl-10"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <Label htmlFor="password">
                                                Password
                                            </Label>
                                            <Link
                                                href="/forgot-password"
                                                className="text-sm text-primary hover:underline"
                                            >
                                                Forgot password?
                                            </Link>
                                        </div>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="password"
                                                type={
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                placeholder="••••••••"
                                                className="pl-10 mb-4"
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={toggleShowPassword}
                                                className="absolute right-3 top-2.5 text-muted-foreground"
                                                tabIndex={-1}
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </CardContent>

                                <CardFooter>
                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Logging in...' : 'Log In'}
                                    </Button>
                                </CardFooter>
                            </form>
                        </Card>
                    </TabsContent>

                    <TabsContent value="signup">
                        <Card>
                            <form onSubmit={handleSignup}>
                                <CardHeader>
                                    <CardTitle>Create an account</CardTitle>
                                    <CardDescription className="mb-4">
                                        Sign up to start your word puzzle
                                        journey
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="you@example.com"
                                                className="pl-10"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="password">
                                            Password
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="password"
                                                type={
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                placeholder="••••••••"
                                                className="pl-10"
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={toggleShowPassword}
                                                className="absolute right-3 top-2.5 text-muted-foreground"
                                                tabIndex={-1}
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                className="rounded border-gray-300 text-primary focus:ring-primary"
                                                required
                                            />
                                            <label
                                                htmlFor="terms"
                                                className="text-sm text-muted-foreground"
                                            >
                                                I agree to the{' '}
                                                <Link
                                                    href="/terms"
                                                    className="text-primary hover:underline"
                                                >
                                                    Terms of Service
                                                </Link>{' '}
                                                and{' '}
                                                <Link
                                                    href="/privacy"
                                                    className="text-primary hover:underline"
                                                >
                                                    Privacy Policy
                                                </Link>
                                            </label>
                                        </div>
                                    </div>
                                </CardContent>

                                <CardFooter>
                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={isLoading}
                                    >
                                        {isLoading
                                            ? 'Creating account...'
                                            : 'Sign Up'}
                                    </Button>
                                </CardFooter>
                            </form>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
