import React, { useState } from 'react';
import { MdHomeFilled } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import { PiUsersFourFill } from "react-icons/pi";
import { RiSettings5Fill } from "react-icons/ri";
import logo from '../../assets/Logo.png';

const Sidebar = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState(0);

    const menuItems = [
        { icon: <MdHomeFilled />, label: "Home" },
        { icon: <BiSolidMessageRounded />, label: "Messages" },
        { icon: <PiUsersFourFill />, label: "Users" },
    ];

    return (
        <div className='bg-[#115e56] py-4 sticky top-0 left-0 flex flex-col items-center justify-between min-h-screen w-14'>
            <div className='flex flex-col'>
                <img
                    src={logo}
                    alt='Logo'
                    className='py-3 mb-5'
                />
                <div className='flex flex-col gap-y-8'>
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className={`px-2 py-2 rounded-xl cursor-pointer ${selectedMenuItem === index ? 'bg-white' : 'bg-transparent'
                                }`}
                            onClick={() => setSelectedMenuItem(index)}
                        >
                            <div
                                className={`text-xl ${selectedMenuItem === index ? 'text-[#115e56]' : 'text-white'
                                    }`}
                            >
                                {item.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className={`px-2 py-2 rounded-xl cursor-pointer ${selectedMenuItem === menuItems.length ? 'bg-white' : 'bg-transparent'
                    }`}
                onClick={() => setSelectedMenuItem(menuItems.length)}
            >
                <RiSettings5Fill
                    className={`text-xl ${selectedMenuItem === menuItems.length ? 'text-[#115e56]' : 'text-white'
                        }`}
                />
            </div>
        </div>
    );
};

export default Sidebar;
