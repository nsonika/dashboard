import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdIncompleteCircle, MdLocalOffer } from "react-icons/md";
import { PiChatCircleTextFill } from "react-icons/pi";

export default function Topbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { text: "Summary", icon: <MdIncompleteCircle />, route: "/" },
        { text: "Sales", icon: <MdLocalOffer />, route: "/sales" },
        { text: "Chats", icon: <PiChatCircleTextFill />, route: "/chat" },
    ];

    return (
        <div className="flex items-center justify-between mb-1 border-b-[1px] py-4 px-6 bg-white">
            <div className="flex items-center gap-3">
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => navigate(item.route)}
                        className={`flex items-center gap-2 px-4 py-3 rounded-full text-[18px] font-medium transition-colors ${location.pathname === item.route
                            ? "bg-[#CCFBEF] shadow-sm text-gray-900"
                            : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.text}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
