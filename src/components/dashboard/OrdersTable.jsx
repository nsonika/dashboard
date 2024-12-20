import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { GoArrowUpRight } from "react-icons/go";
import ChatModal from "./ChatModal";

const data = [
    {
        product: "Wireless Headphones",
        date: "24 Apr '2024",
        timeSpent: "2h 5m",
        orderValue: "$120.21",
        commission: "$55",
    },
    {
        product: "Smart Watch Pro",
        date: "24 Apr '2024",
        timeSpent: "1h 45m",
        orderValue: "$299.99",
        commission: "$75",
    },
    {
        product: "Laptop Stand",
        date: "23 Apr '2024",
        timeSpent: "45m",
        orderValue: "$49.99",
        commission: "$15",
    },
    {
        product: "Mechanical Keyboard",
        date: "23 Apr '2024",
        timeSpent: "1h 15m",
        orderValue: "$159.99",
        commission: "$40",
    },
    {
        product: "4K Monitor",
        date: "22 Apr '2024",
        timeSpent: "3h 20m",
        orderValue: "$499.99",
        commission: "$100",
    },
];

export default function OrdersTable() {

    const [chatOpen, setChatOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    return (
        <div className="p-6  rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 py-6">Orders</h2>
            <div className="overflow-hidden border border-gray-300 rounded-lg">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow className="bg-gray-50 border-b border-gray-300">
                            <TableHead className="text-left py-4 px-6 font-semibold">Product</TableHead>
                            <TableHead className="text-left py-4 px-6 font-semibold">Date</TableHead>
                            <TableHead className="text-left py-4 px-6 font-semibold">Time Spent</TableHead>
                            <TableHead className="text-left py-4 px-6 font-semibold">Order Value</TableHead>
                            <TableHead className="text-left py-4 px-6 font-semibold">Commission</TableHead>
                            <TableHead className="text-left py-4 px-6 font-semibold bg-gray-50"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item, index) => (
                            <TableRow
                                key={index}
                                className="hover:bg-gray-100 transition-colors  border-none border-gray-300"
                            >
                                <TableCell className="py-4 px-6 text-left whitespace-nowrap flex items-center">
                                    <img
                                        src="https://th.bing.com/th/id/OIP.cI0GyJNlr-CDR65OZ7D5ggHaHk?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        alt="Product"
                                        className="w-8 h-8 rounded mr-4"
                                    />
                                    <span className="text-gray-800 font-medium">
                                        {item.product}
                                    </span>

                                </TableCell>
                                <TableCell className="py-4 px-6 text-left">{item.date}</TableCell>
                                <TableCell className="py-4 px-6 text-left">{item.timeSpent}</TableCell>
                                <TableCell className="py-4 px-6 text-left">{item.orderValue}</TableCell>
                                <TableCell className="py-4 px-6 text-left">{item.commission}</TableCell>
                                <TableCell className="py-4 px-6 text-left">
                                    <button
                                        onClick={() => {
                                            setSelectedOrder(item);
                                            setChatOpen(true);
                                        }}
                                        className="inline-flex items-center"
                                    >
                                        View Chat{" "}
                                        <span className="ml-1 text-xl">
                                            <GoArrowUpRight />
                                        </span>
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>


            {selectedOrder && (
                <ChatModal
                    isOpen={chatOpen}
                    onClose={() => {
                        setChatOpen(false);
                        setSelectedOrder(null);
                    }}
                    id={selectedOrder.id}
                    product={selectedOrder.product}
                />
            )}
        </div>
    );
}
