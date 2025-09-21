'use client';
import { LEFT_SIDE_BAR_ITEMS } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const LeftSideBar = () => {
    

    // get active path name

    const pathname = usePathname();

    return (
        <div className="leftSideBar w-52 py-4 min-h-screen bg-white/20 p-4 backdrop-blur-md flex flex-col justify-start items-start">


            <h3 className="text-4xl font-semibold text-black ml-2 mb-3 ">Splitr</h3>
            {/* items list here :) */}
            {LEFT_SIDE_BAR_ITEMS.map((item, index) => {
                return (
                        <div key={index} className={`item w-full h-12 my-1 p-4 rounded-md hover:bg-blue-500/20 flex flex-row justify-start  items-center space-x-4  cursor-pointer ${pathname === item.link ? "bg-blue-800/40" : ""}`}>
                            <item.icon className="w-5 h-5 text-black"/>
                            <span className="text-black">{item.title}</span>
                        </div>
                );
            })}
        </div>
    );   
}