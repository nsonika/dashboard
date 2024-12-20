import React from "react";
import {
    LineChart,
    Line,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
} from "recharts";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter
} from "@/components/ui/card";

import { BsBarChartLineFill, } from "react-icons/bs";
import { PiChatTeardropFill } from "react-icons/pi";

// Line chart data
const lineChartData = [
    { day: "Mon", incoming: 30, answered: 30 },
    { day: "Tue", incoming: 35, answered: 32 },
    { day: "Wed", incoming: 40, answered: 35 },
    { day: "Thu", incoming: 45, answered: 50 },
    { day: "Fri", incoming: 50, answered: 38 },
    { day: "Sat", incoming: 55, answered: 40 },
    { day: "Sun", incoming: 60, answered: 42 },
];

// Bar chart data
const barChartData = [
    { day: "Mon", desktop: 30 },
    { day: "Tue", desktop: 32 },
    { day: "Wed", desktop: 40 },
    { day: "Thu", desktop: 60 },
    { day: "Fri", desktop: 40 },
    { day: "Sat", desktop: 44 },
    { day: "Sun", desktop: 44 },
];

// Comparison data for BarChart
const comparisonData = [
    { period: "This week", consultations: 20, orders: 15 },
    { period: "Last week", consultations: 15, orders: 10 },
];

// LineChart Component
export function LineChartComponent() {
    return (
        <Card className="rounded-2xl bg-transparent border-none">
            <CardHeader>
                <CardDescription className="uppercase font-medium tracking-wide flex items-center gap-2">
                    <PiChatTeardropFill /> Consultations
                </CardDescription>
            </CardHeader>

            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                        data={lineChartData}
                        margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
                    >
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <YAxis />
                        <Tooltip />
                        <Line
                            dataKey="incoming"
                            type="monotone"
                            stroke="#A3A3A3"
                            strokeWidth={2}
                            dot={false}
                            name="Incoming"
                        />
                        <Line
                            dataKey="answered"
                            type="monotone"
                            stroke="#14B8A6"
                            strokeWidth={2}
                            dot={false}
                            name="Answered"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
            <CardFooter className="border-t-2 mx-6 pt-6 text-font-gray text-sm flex gap-8 px-10  ">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-5 bg-[#A3A3A3] rounded-full"></div>
                    Incoming
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-1 w-5 bg-[#14B8A6] rounded-full"></div>
                    Answered
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-1 w-5 bg-[#FFE587] rounded-full"></div>
                    Experts Online
                </div>
            </CardFooter>

        </Card>
    );
}

// BarChart Component
export function BarChartComponent() {
    return (
        <Card className="border-none mx-2 mt-2 -translate-y-[55px] bg-transparent">
            <CardContent className="mx-12 translate-y-2">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barChartData}>
                        <CartesianGrid horizontal={false} vertical={false} strokeDasharray="0" />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <Tooltip />
                        <Bar dataKey="desktop" fill="#FFF3C6" radius={3} barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}

// Insights Component
export default function Insights() {
    return (
        <div className="p-6 rounded-lg ">
            <h1 className="text-font-black font-medium text-2xl py-4">Insights</h1>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">

                <div className="col-span-1 lg:col-span-7 relative border rounded-2xl text-sm">
                    {/* Line Chart */}
                    <div className="relative z-10">
                        <LineChartComponent />
                    </div>
                    {/* Bar Chart */}
                    <div className="absolute top-[122px] left-0 w-full h-full">
                        <BarChartComponent />
                    </div>

                </div>

                {/* Comparison Bar Chart */}
                <Card className="col-span-1 lg:col-span-3 border rounded-2xl  text-sm ">
                    <CardHeader>
                        <CardDescription className="uppercase font-medium tracking-wide flex items-center gap-2">
                            <BsBarChartLineFill /> vs past period
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={comparisonData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="period" tick={{ fill: "#6B7280" }} />
                                <YAxis tick={{ fill: "#6B7280" }} />
                                <Tooltip />
                                <Bar dataKey="consultations" fill="#CCFBEF" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="orders" fill="#115E59" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                    <CardFooter className="border-t mt-4 pt-3 text-gray-600 px-1 text-sm flex gap-8 flex-1 flex-wrap justify-center">
                        <div className="flex items-center gap-2 flex-shrink-0 truncate">
                            <div className="h-1 w-5 bg-[#A7F3D0] rounded-full"></div>
                            Consultations
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                            <div className="h-1 w-5 bg-[#065F46] rounded-full"></div>
                            Orders Closed
                        </div>
                    </CardFooter>
                </Card>

                {/* Forecasts Card */}
                <Card className="col-span-1 lg:col-span-2 bg-[#15B79E] text-white">
                    <CardHeader>
                        <CardTitle>Forecasts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="text-4xl font-bold">+15%</h3>
                            <p className="text-sm">Forecasted increase in sales this month.</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold">+20%</h3>
                            <p className="text-sm">Forecasted increase in consultations.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
