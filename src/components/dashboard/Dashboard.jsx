import React from "react";
import DashboardCards from "./DashboardCards";
import OrdersTable from "./OrdersTable";

export default function Dashboard() {
    return (
        <div className="p-6  min-h-screen">

            <DashboardCards />
            <OrdersTable />
        </div>
    );
}
