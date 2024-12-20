import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/dashboard/TopBar";
import Dashboard from "./components/dashboard/Dashboard";
import OrdersTable from "./components/dashboard/OrdersTable";
import Sidebar from "./components/dashboard/Sidebar";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-16 bg-dark-green fixed h-full">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-16">
          <Topbar />
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/sales" element={<OrdersTable />} />
              <Route path="/chat" />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
