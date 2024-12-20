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
} from "@/components/ui/card";

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
                {/* <CardTitle>Weekly Performance</CardTitle> */}
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
        <div className="p-6 space-y-8 rounded-lg max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800">Insights</h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                <div className="col-span-1 lg:col-span-7 relative border rounded-2xl text-sm ">
                    {/* Nested Charts */}
                    <div className="absolute top-20 left-0 w-full h-full ">

                        <BarChartComponent />
                    </div>
                    <div className="relative z-10 bottom-12" >

                        <LineChartComponent />
                    </div>
                </div>

                {/* Comparison Bar Chart */}
                <Card className="col-span-1 lg:col-span-3 border rounded-2xl  text-sm ">
                    <CardHeader>
                        {/* <CardTitle>Comparison</CardTitle> */}
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
