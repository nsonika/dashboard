import React from "react";
import { IoTrendingUpOutline, IoTrendingDownOutline } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa";
import { MdOutlineCarRepair } from "react-icons/md";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const cards = [
    {
        title: "Consultations",
        value: "24",
        trend: "15% increase",
        trendIcon: <IoTrendingUpOutline className="text-green-500" />,
        trendColor: "text-green-500",
        icon: <BiSolidMessageRounded className="text-gray-700" />,
    },
    {
        title: "Orders Placed",
        value: "12",
        trend: "15% decrease",
        trendIcon: <IoTrendingDownOutline className="text-red-500" />,
        trendColor: "text-red-500",
        icon: <MdLocalOffer className="text-gray-700" />,
    },
    {
        title: "Total Sales Value",
        value: "$2,400",
        trend: "15% increase",
        trendIcon: <IoTrendingUpOutline className="text-green-500" />,
        trendColor: "text-green-500",
        icon: <HiOutlineCircleStack className="text-gray-700" />,
    },
    {
        title: "Avg Order Value",
        value: "$240",
        trend: "15% increase",
        trendIcon: <IoTrendingUpOutline className="text-green-500" />,
        trendColor: "text-green-500",
        icon: <HiOutlineCircleStack className=" text-gray-700" />,
    },
    {
        title: "Conversion",
        value: "50%",
        trend: "15% decrease",
        trendIcon: <IoTrendingDownOutline className="text-red-500" />,
        trendColor: "text-red-500",
        icon: <FaCheck className=" text-gray-700" />,
    },
    {
        title: "Commission Paid",
        value: "$240",
        trend: "15% increase",
        trendIcon: <IoTrendingUpOutline className="text-green-500" />,
        trendColor: "text-green-500",
        icon: <MdOutlineCarRepair className="text-gray-700" />,
    },
];


export default function DashboardCards() {
    return (
        <div className="max-w-7xl mx-auto bg-gray-50 p-8 rounded-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">At a Glance</h2>
                <div className="bg-gray-200 flex items-center space-x-2 px-4 py-2 rounded-xl cursor-pointer">
                    {/* Shadcn Select */}
                    <Select>
                        <SelectTrigger className="bg-gray-200 flex items-center px-4 py-2 rounded-xl border text-gray-700">
                            <SelectValue placeholder="14 days" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="7 days">7 days</SelectItem>
                            <SelectItem value="14 days">14 days</SelectItem>
                            <SelectItem value="30 days">30 days</SelectItem>
                            <SelectItem value="90 days">90 days</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 flex flex-col items-start transition-transform hover:scale-105"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div>{card.icon}</div>
                            <h3 className="text-lg font-medium text-gray-600">{card.title}</h3>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                        <p className={`text-sm ${card.trendColor} flex items-center mt-2`}>
                            {card.trendIcon}
                            {card.trend}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
