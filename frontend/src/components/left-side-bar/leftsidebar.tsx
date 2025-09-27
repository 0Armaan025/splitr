'use client';
import { LEFT_SIDE_BAR_ITEMS } from "@/lib/utils";
import { ArrowRightFromLine } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const LeftSideBar = () => {
    const pathname = usePathname();
    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <div className="relative">
            {/* Toggle button */}
            <ArrowRightFromLine
                className={`fixed top-4 left-4 z-50 text-black cursor-pointer transition-transform duration-300 ${
                    showSidebar ? "rotate-90" : "-rotate-90"
                }`}
                onClick={() => setShowSidebar(!showSidebar)}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white/50 backdrop-blur-md p-4 flex flex-col justify-start items-start
                    transform transition-transform duration-300 ease-in-out z-40
                    ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}
            >
                <h3 className="text-4xl font-semibold text-black ml-2 mb-3">Splitr</h3>
                {LEFT_SIDE_BAR_ITEMS.map((item, index) => (
                    <Link key={index} href={item.link} className="w-full">
                    <div
                        key={index}
                        className={`item w-full h-12 my-1 p-4 rounded-md hover:bg-blue-500/20 flex flex-row justify-start items-center space-x-4 cursor-pointer ${
                            pathname === item.link ? "bg-blue-800/40" : ""
                        }`}
                    >
                        <item.icon className="w-5 h-5 text-black" />
                        <span className="text-black">{item.title}</span>
                    </div>
                    </Link>
                ))}
            </div>

            {/* Optional: Overlay for small devices */}
            {showSidebar && (
                <div
                    className="fixed inset-0 bg-black/30 z-30"
                    onClick={() => setShowSidebar(false)}
                ></div>
            )}
        </div>
    );
};
