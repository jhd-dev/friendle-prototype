'use client';

import { Check, Circle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface WeeklyStreakProps {
    streak: {
        monday: boolean;
        tuesday: boolean;
        wednesday: boolean;
        thursday: boolean;
        friday: boolean;
        saturday: boolean;
        sunday: boolean;
    };
    className?: string;
    onPrevious?: () => void;
    onNext?: () => void;
}

export function WeeklyStreak({
    streak,
    className,
    onPrevious = () => {},
    onNext = () => {},
}: WeeklyStreakProps) {
    const days = [
        { key: 'monday', label: 'M', completed: streak.monday },
        { key: 'tuesday', label: 'T', completed: streak.tuesday },
        { key: 'wednesday', label: 'W', completed: streak.wednesday },
        { key: 'thursday', label: 'T', completed: streak.thursday },
        { key: 'friday', label: 'F', completed: streak.friday },
        { key: 'saturday', label: 'S', completed: streak.saturday },
        { key: 'sunday', label: 'S', completed: streak.sunday },
    ];

    return (
        <div
            className={cn('flex items-center justify-between gap-2', className)}
        >
            <Button
                variant="ghost"
                size="icon"
                onClick={onPrevious}
                className="h-8 w-8 cursor-pointer"
            >
                <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex justify-between gap-2">
                {days.map((day) => (
                    <div
                        key={day.key}
                        className="flex flex-col items-center gap-1"
                    >
                        <span className="text-sm font-medium text-muted-foreground">
                            {day.label}
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center">
                            {day.completed ? (
                                <Check className="h-5 w-5 text-primary" />
                            ) : (
                                <Circle className="h-5 w-5 text-muted-foreground/30" />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <Button
                variant="ghost"
                size="icon"
                onClick={onNext}
                className="h-8 w-8 cursor-pointer"
            >
                <ChevronRight className="h-5 w-5" />
            </Button>
        </div>
    );
}
