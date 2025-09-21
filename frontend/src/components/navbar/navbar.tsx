import { NAV_ITEMS } from "@/lib/utils";
import Link from "next/link";

export const Navbar = () => {

    const checkActiveTab = () => {
        // to be implemented later :) for active color change
        return;
    }

    return (
        <nav className="navbar bg-white/50 p-4 m-8 mx-12  rounded-full w-[96.2%] h-auto flex flex-row justify-between items-center shadow-md">
            <div className="leftSection flex flex-row justify-center items-center">
                <div className="logo text-3xl ml-2 text-black font-semibold cursor-pointer ">Splitr</div>
                <div className="h-14 w-1 bg-gray-800/40 ml-4"></div>
                <div className="nav-items flex flex-row justify-center items-center space-x-4 ml-4">
                {NAV_ITEMS.map((item) => (
                    <Link key={item.title} href={item.link} className="nav-item text-gray-700 hover:text-black hover:underline transition-all duration-300 hover:cursor-pointer text-xl ">
                        {item.title}
                    </Link>
                ))}
            </div>


            </div>
            {/* button of Sign Up */}

            <button className="sign-up-btn bg-blue-800/80 px-4 py-2 cursor-pointer hover:bg-blue-800 transition-all rounded-2xl text-white font-semibold">Sign Up</button>
            
        </nav>
    );
}