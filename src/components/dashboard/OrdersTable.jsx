import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

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
    return (
        <div className="p-8 bg-gray-50 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Orders</h2>
            <div className="overflow-hidden border border-gray-300 rounded-lg">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow className="bg-gray-100 border-b border-gray-300">
                            <TableHead className="text-left py-4 px-6 font-semibold">Product</TableHead>
                            <TableHead className="text-left py-4 px-6 font-semibold">Date</TableHead>
                            <TableHead className="text-left py-4 px-6 font-semibold">Time Spent</TableHead>
                            <TableHead className="text-left py-4 px-6 font-semibold">Order Value</TableHead>
                            <TableHead className="text-left py-4 px-6 font-semibold">Commission</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item, index) => (
                            <TableRow
                                key={index}
                                className="hover:bg-gray-100 transition-colors border-b border-gray-300"
                            >
                                <TableCell className="py-4 px-6 text-left">{item.product}</TableCell>
                                <TableCell className="py-4 px-6 text-left">{item.date}</TableCell>
                                <TableCell className="py-4 px-6 text-left">{item.timeSpent}</TableCell>
                                <TableCell className="py-4 px-6 text-left">{item.orderValue}</TableCell>
                                <TableCell className="py-4 px-6 text-left">{item.commission}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
