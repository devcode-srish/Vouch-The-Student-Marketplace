"use client";

import { loginRecords } from "@/lib/admin-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShieldCheck, Clock, MapPin, Laptop, Users, LogIn, CreditCard } from "lucide-react";
import { format, formatDistanceToNow } from 'date-fns';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function AdminDashboardPage() {
    // This is a client component, but we want to make sure it's not accessible without a "login".
    // A real app would have proper auth state management.
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Or a loading spinner
    }

    const totalLogins = loginRecords.length;
    const uniqueUsers = new Set(loginRecords.map(r => r.user)).size;
    const platformCounts = loginRecords.reduce((acc, record) => {
        const platform = record.platform.os;
        acc[platform] = (acc[platform] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const mostCommonPlatform = Object.entries(platformCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

    const chartData = Object.entries(platformCounts).map(([os, total]) => ({
        os,
        total,
    }));

    const chartConfig = {
        total: {
            label: "Logins",
            color: "hsl(var(--primary))",
        },
    } satisfies ChartConfig;


    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-8">
                <ShieldCheck className="mx-auto h-12 w-12 text-primary" />
                <h1 className="text-4xl font-bold font-headline mt-4">Admin Dashboard</h1>
                <p className="text-muted-foreground mt-2">
                    Overview of recent user activity.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3 mb-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Logins</CardTitle>
                        <LogIn className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalLogins}</div>
                        <p className="text-xs text-muted-foreground">in the last 25 hours</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Unique Users</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{uniqueUsers}</div>
                        <p className="text-xs text-muted-foreground">logged in recently</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Top Platform</CardTitle>
                        <Laptop className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{mostCommonPlatform}</div>
                        <p className="text-xs text-muted-foreground">most used OS</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-8 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Logins</CardTitle>
                        <CardDescription>A log of the last {loginRecords.length} user logins.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>User</TableHead>
                                        <TableHead><Clock className="inline-block mr-1 h-4 w-4" />Timestamp</TableHead>
                                        <TableHead><MapPin className="inline-block mr-1 h-4 w-4" />Location</TableHead>
                                        <TableHead><Laptop className="inline-block mr-1 h-4 w-4" />Platform</TableHead>
                                        <TableHead><CreditCard className="inline-block mr-1 h-4 w-4" />Payment Method</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {loginRecords.map(record => (
                                        <TableRow key={record.id}>
                                            <TableCell className="font-medium">
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="h-9 w-9 hidden sm:flex">
                                                        {record.avatarUrl && <AvatarImage src={record.avatarUrl} alt={record.user} />}
                                                        <AvatarFallback>{record.user.slice(0, 2).toUpperCase()}</AvatarFallback>
                                                    </Avatar>
                                                    <span>{record.user}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex flex-col">
                                                    <span>{format(new Date(record.timestamp), "MMM d, yyyy, h:mm a")}</span>
                                                    <span className="text-xs text-muted-foreground">{formatDistanceToNow(new Date(record.timestamp), { addSuffix: true })}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>{record.location}</TableCell>
                                            <TableCell>{`${record.platform.browser} on ${record.platform.os}`}</TableCell>
                                            <TableCell>{record.paymentMethod}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>

                <Card className="lg:col-span-3 flex flex-col">
                     <CardHeader>
                        <CardTitle>Platform Distribution</CardTitle>
                        <CardDescription>Logins by OS in the last 25 hours.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                         <ChartContainer config={chartConfig} className="w-full h-full">
                            <BarChart accessibilityLayer data={chartData}>
                                <XAxis
                                    dataKey="os"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <YAxis />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Bar dataKey="total" fill="var(--color-total)" radius={8} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>


             <div className="text-center mt-8">
                <Button asChild variant="outline">
                    <Link href="/">Back to Marketplace</Link>
                </Button>
            </div>
        </div>
    );
}
