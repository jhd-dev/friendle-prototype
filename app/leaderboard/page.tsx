import { Navbar } from '@/components/navbar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface LeaderboardUser {
    id: string;
    name: string;
    username: string;
    avatar?: string;
    score: number;
    rank: number;
}

const friendsData: LeaderboardUser[] = [
    {
        id: '1',
        name: 'Joshua',
        username: 'turbobuster',
        avatar: '/placeholder.svg?height=40&width=40',
        score: 2145,
        rank: 1,
    },
    {
        id: '2',
        name: 'Michael',
        username: 'mikenotike',
        avatar: '/placeholder.svg?height=40&width=40',
        score: 1897,
        rank: 2,
    },
    {
        id: '3',
        name: 'Daisy',
        username: 'HiImDaisy',
        avatar: '/placeholder.svg?height=40&width=40',
        score: 1756,
        rank: 3,
    },
    {
        id: '4',
        name: 'John',
        username: 'johnneyboy',
        avatar: '/placeholder.svg?height=40&width=40',
        score: 1634,
        rank: 4,
    },
    {
        id: '5',
        name: 'David',
        username: 'DavidTheDestroyer',
        avatar: '/placeholder.svg?height=40&width=40',
        score: 1522,
        rank: 5,
    },
];

const regionalData: LeaderboardUser[] = [
    {
        id: '1',
        name: 'Taylor Swift',
        username: 'tswift',
        avatar: '/placeholder.svg?height=40&width=40',
        score: 3245,
        rank: 1,
    },
    {
        id: '2',
        name: 'John Doe',
        username: 'jdoe',
        avatar: '/placeholder.svg?height=40&width=40',
        score: 3012,
        rank: 2,
    },
    {
        id: '3',
        name: 'Alex Johnson',
        username: 'alexj',
        avatar: '/placeholder.svg?height=40&width=40',
        score: 2145,
        rank: 3,
    },
    {
        id: '4',
        name: 'Emma Wilson',
        username: 'ewilson',
        avatar: '/placeholder.svg?height=40&width=40',
        score: 2087,
        rank: 4,
    },
    {
        id: '5',
        name: 'Michael Brown',
        username: 'mbrown',
        avatar: '/placeholder.svg?height=40&width=40',
        score: 1998,
        rank: 5,
    },
];

const globalData: LeaderboardUser[] = [
    {
        id: '1',
        name: 'Jane Smith',
        username: 'jsmith',
        avatar: '/placeholder.svg?height=40&width=40',
        score: 5432,
        rank: 1,
    },
    {
        id: '2',
        name: 'David Lee',
        username: 'dlee',
        avatar: '/placeholder.svg?height=40&width=40',
        score: 5187,
        rank: 2,
    },
    {
        id: '3',
        name: 'Sarah Johnson',
        username: 'sjohnson',
        avatar: '/placeholder.svg?height=40&width=40',
        score: 4932,
        rank: 3,
    },
    {
        id: '4',
        name: 'Taylor Swift',
        username: 'tswift',
        avatar: '/placeholder.svg?height=40&width=40',
        score: 3245,
        rank: 4,
    },
    {
        id: '5',
        name: 'Chris Evans',
        username: 'cevans',
        avatar: '/placeholder.svg?height=40&width=40',
        score: 3198,
        rank: 5,
    },
];

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="flex gap-4 items-center flex-col">
                    <h1 className="mb-6 text-2xl font-bold">Leaderboard</h1>

                    <Tabs defaultValue="friends" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="friends">Friends</TabsTrigger>
                            <TabsTrigger value="regional">Regional</TabsTrigger>
                            <TabsTrigger value="global">Global</TabsTrigger>
                        </TabsList>

                        <TabsContent value="friends">
                            <LeaderboardTable users={friendsData} />
                        </TabsContent>

                        <TabsContent value="regional">
                            <LeaderboardTable users={regionalData} />
                        </TabsContent>

                        <TabsContent value="global">
                            <LeaderboardTable users={globalData} />
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
            <Navbar />
        </div>
    );
}

function LeaderboardTable({ users }: { users: LeaderboardUser[] }) {
    return (
        <div className="rounded-md border mx-auto">
            <div className="grid grid-cols-12 border-b bg-muted/50 p-4 text-sm font-medium">
                <div className="col-span-2">Rank</div>
                <div className="col-span-6">User</div>
                <div className="col-span-4 text-right">Score</div>
            </div>

            <div className="px-4">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="grid grid-cols-12 items-center py-4 gap-4"
                    >
                        <div className={cn('col-span-2 font-medium ')}>
                            #{user.rank}
                        </div>
                        <div className="col-span-6 flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                                <AvatarImage
                                    src={user.avatar}
                                    alt={user.name}
                                />
                                <AvatarFallback>
                                    {user.name.substring(0, 2).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-medium overflow-ellipsis">
                                    {user.name}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    @{user.username}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 text-right font-medium">
                            {user.score.toLocaleString()}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
