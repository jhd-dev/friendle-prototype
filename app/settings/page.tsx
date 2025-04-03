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
import { Navbar } from '@/components/navbar';
import {
    Bell,
    Lock,
    LogOut,
    Moon,
    Sun,
    Trash2,
    UserCog,
    Volume2,
    VolumeX,
} from 'lucide-react';

export default function SettingsPage() {
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [isDeletingAccount, setIsDeletingAccount] = useState(false);
    const [deleteConfirmation, setDeleteConfirmation] = useState('');
    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [isSaving, setIsSaving] = useState(false);

    const handleLogout = () => {
        // In a real app, you would implement logout logic here
        alert('Logging out...');
    };

    const handleSavePasswordChange = () => {
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            alert('New passwords do not match!');
            return;
        }

        setIsSaving(true);
        // Simulate API call
        setTimeout(() => {
            setIsSaving(false);
            setIsChangingPassword(false);
            setPasswordData({
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
            });
            alert('Password changed successfully!');
        }, 1000);
    };

    const handleDeleteAccount = () => {
        if (deleteConfirmation !== 'DELETE') {
            alert('Please type DELETE to confirm account deletion');
            return;
        }

        // In a real app, you would implement account deletion logic here
        alert('Account deleted successfully');
        // Redirect to login or home page
    };

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-6 row-start-2 items-center w-full max-w-2xl">
                <div className="w-full flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">Settings</h1>
                    <p className="text-muted-foreground">
                        Manage your account and preferences
                    </p>
                </div>

                {/* App Preferences */}
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-lg">
                            App Preferences
                        </CardTitle>
                        <CardDescription>
                            Customize your game experience
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {soundEnabled ? (
                                    <Volume2 className="h-5 w-5" />
                                ) : (
                                    <VolumeX className="h-5 w-5" />
                                )}
                                <div>
                                    <p className="font-medium">Sound Effects</p>
                                    <p className="text-sm text-muted-foreground">
                                        Enable sounds while playing
                                    </p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={soundEnabled}
                                    onChange={() =>
                                        setSoundEnabled(!soundEnabled)
                                    }
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {darkMode ? (
                                    <Moon className="h-5 w-5" />
                                ) : (
                                    <Sun className="h-5 w-5" />
                                )}
                                <div>
                                    <p className="font-medium">Dark Mode</p>
                                    <p className="text-sm text-muted-foreground">
                                        Switch between light and dark theme
                                    </p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={darkMode}
                                    onChange={() => setDarkMode(!darkMode)}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Bell className="h-5 w-5" />
                                <div>
                                    <p className="font-medium">Notifications</p>
                                    <p className="text-sm text-muted-foreground">
                                        Get daily reminders to play
                                    </p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={notifications}
                                    onChange={() =>
                                        setNotifications(!notifications)
                                    }
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                    </CardContent>
                </Card>

                {/* Security Settings */}
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-lg">Security</CardTitle>
                        <CardDescription>
                            Manage your password and account security
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Change Password */}
                        {!isChangingPassword ? (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Lock className="h-5 w-5" />
                                    <div>
                                        <p className="font-medium">Password</p>
                                        <p className="text-sm text-muted-foreground">
                                            Change your account password
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    onClick={() => setIsChangingPassword(true)}
                                >
                                    Change
                                </Button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <Lock className="h-5 w-5" />
                                    <div>
                                        <p className="font-medium">
                                            Change Password
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Enter your current password and a
                                            new password
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="currentPassword">
                                        Current Password
                                    </Label>
                                    <Input
                                        id="currentPassword"
                                        type="password"
                                        value={passwordData.currentPassword}
                                        onChange={(e) =>
                                            setPasswordData({
                                                ...passwordData,
                                                currentPassword: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="newPassword">
                                        New Password
                                    </Label>
                                    <Input
                                        id="newPassword"
                                        type="password"
                                        value={passwordData.newPassword}
                                        onChange={(e) =>
                                            setPasswordData({
                                                ...passwordData,
                                                newPassword: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword">
                                        Confirm New Password
                                    </Label>
                                    <Input
                                        id="confirmPassword"
                                        type="password"
                                        value={passwordData.confirmPassword}
                                        onChange={(e) =>
                                            setPasswordData({
                                                ...passwordData,
                                                confirmPassword: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                </div>

                                <div className="flex justify-end gap-3 mt-6">
                                    <Button
                                        variant="outline"
                                        onClick={() => {
                                            setIsChangingPassword(false);
                                            setPasswordData({
                                                currentPassword: '',
                                                newPassword: '',
                                                confirmPassword: '',
                                            });
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        onClick={handleSavePasswordChange}
                                        disabled={
                                            isSaving ||
                                            !passwordData.currentPassword ||
                                            !passwordData.newPassword ||
                                            !passwordData.confirmPassword
                                        }
                                    >
                                        {isSaving
                                            ? 'Saving...'
                                            : 'Save Changes'}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Account Management */}
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-lg">
                            Account Management
                        </CardTitle>
                        <CardDescription>
                            Manage your account sessions and data
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Logout */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <LogOut className="h-5 w-5" />
                                <div>
                                    <p className="font-medium">Logout</p>
                                    <p className="text-sm text-muted-foreground">
                                        Sign out of your account
                                    </p>
                                </div>
                            </div>
                            <Button variant="outline" onClick={handleLogout}>
                                Logout
                            </Button>
                        </div>

                        {/* Delete Account */}
                        {!isDeletingAccount ? (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Trash2 className="h-5 w-5 text-destructive" />
                                    <div>
                                        <p className="font-medium">
                                            Delete Account
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Permanently delete your account and
                                            all data
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant="destructive"
                                    onClick={() => setIsDeletingAccount(true)}
                                >
                                    Delete
                                </Button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <Trash2 className="h-5 w-5 text-destructive" />
                                    <div>
                                        <p className="font-medium">
                                            Delete Account
                                        </p>
                                        <p className="text-sm text-destructive">
                                            This action cannot be undone. All
                                            your data will be permanently
                                            deleted.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="deleteConfirmation">
                                        Type{' '}
                                        <span className="font-bold">
                                            DELETE
                                        </span>{' '}
                                        to confirm
                                    </Label>
                                    <Input
                                        id="deleteConfirmation"
                                        value={deleteConfirmation}
                                        onChange={(e) =>
                                            setDeleteConfirmation(
                                                e.target.value
                                            )
                                        }
                                        className="border-destructive"
                                    />
                                </div>

                                <div className="flex justify-end gap-3 mt-6">
                                    <Button
                                        variant="outline"
                                        onClick={() => {
                                            setIsDeletingAccount(false);
                                            setDeleteConfirmation('');
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        onClick={handleDeleteAccount}
                                        disabled={
                                            deleteConfirmation !== 'DELETE'
                                        }
                                    >
                                        Delete Permanently
                                    </Button>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Profile Information - Optional section */}
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-lg">
                            Profile Information
                        </CardTitle>
                        <CardDescription>
                            Update your personal information
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <UserCog className="h-5 w-5" />
                                <div>
                                    <p className="font-medium">
                                        Profile Settings
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Edit your profile information
                                    </p>
                                </div>
                            </div>
                            <Button variant="outline">Edit Profile</Button>
                        </div>
                    </CardContent>
                </Card>

                {/* App Information */}
                <Card className="w-full">
                    <CardContent className="py-4">
                        <div className="flex flex-col items-center text-center gap-2">
                            <p className="text-sm text-muted-foreground">
                                App Version 1.0.0
                            </p>
                            <p className="text-xs text-muted-foreground">
                                © 2025 Your App Name. All rights reserved.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </main>

            <Navbar />
        </div>
    );
}
