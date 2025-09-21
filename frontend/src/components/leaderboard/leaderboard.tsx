import { DUMMY_LEADERBOARD_DATA } from "@/lib/utils";
import { Poppins } from "next/font/google";


const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const Leaderboard = () => {
    return (
        <div className="leaderboard flex flex-col justify-start items-start bg-white/20 backdrop-blur-2xl rounded-2xl shadow-sm shadow-black p-4 sm:p-6 h-[25rem] w-[60rem] sm:w-[40rem] xl:w-[60rem] overflow-y-scroll">
            {/* Leaderboard title with white/20 bg, then showcasing tags like weekly monthly, */}
           <h3 className={`${poppinsFont.className} text-black font-semibold text-3xl`}>Leaderboard</h3>
            {/* horizotally scrollabe tags list */}
            <div className="tags flex flex-row  py-2 space-x-4">
                <span className="tag p-2 bg-white/80 text-black px-4 hover:bg-white/100 transition-all hover:cursor-pointer rounded-full">
                    Monthly
                </span>
                <span className="tag p-2 bg-white/80 text-black px-4 hover:bg-white/100 transition-all hover:cursor-pointer rounded-full">
                    Weekly
                </span>
                <span className="tag p-2 bg-white/80 text-black px-4 hover:bg-white/100 transition-all hover:cursor-pointer rounded-full">
                    Today
                </span>
            </div>
            {/* leaderboard headers */}
            <div className="flex font-bold flex-row w-full bg-white/60 justify-between px-2 py-2  rounded-t-lg mb-0 text-black items-center">
                <h4>Standing</h4>
                <h4>Name</h4>
                <h4>Books Published</h4>
            </div>

            {DUMMY_LEADERBOARD_DATA.map((item, index)=> {
                return (
            <LeaderboardTile position={item.standing} name={item.name} booksPublished={item.booksPublished} key={index}/>

                );
            })};

        </div>
    );
}

interface LeaderboardTileProps {
    position: number;
    name: string;
    booksPublished: number;
};

const LeaderboardTile = ({position, name, booksPublished}:LeaderboardTileProps) => {
    return (
        <div className="leaderboardTileProp flex flex-row justify-between rounded-t-none items-center w-full bg-white/60 p-4 cursor-pointer hover:bg-white/100">
            <p className="position text-black font-semibold">#{position}</p>
            
            <p className="name text-black font-medium mr-16">{name}</p>
            <p className="booksPublished text-black font-medium">{booksPublished}</p>
        </div>
    );
}

