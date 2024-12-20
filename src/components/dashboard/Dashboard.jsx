import React from "react";
import DashboardCards from "./DashboardCards";
import OrdersTable from "./OrdersTable";
import Insights from "./Insights";
import Sidebar from "./Sidebar";

export default function Dashboard() {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            {/* <Sidebar /> */}

            {/* Main Content */}
            <div className="flex-1 border rounded-2xl px-6 py-7 text-sm">
                <DashboardCards />
                <Insights />
                <OrdersTable />
            </div>
        </div>
    );
}
