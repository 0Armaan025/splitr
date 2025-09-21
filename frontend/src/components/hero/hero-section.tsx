import Tooltip from "../tooltip/tooltip";

const HeroSection = () => {
    return (
        <div className="heroSection justify-center items-center flex flex-col">
            {/* now let's create a tooltip component */}
            <div className="mt-16">

            <Tooltip text="Start your journey" width="180px" textColor="#014040"/>
            </div>
            
            <h3 className="text-center mt-12 text-8xl font-semibold text-black"><span className="text-purple-800 ">Streamline</span> Your <br/>Creativity & Time</h3>
            

            <div className="mt-8 justify-center items-center flex">
                <h3 className="text-gray-700 text-xl">The all in-one-platform that empowers you!</h3>
            </div>

            {/* now let's add the tags component box filled with tags or later, let's do it later, yeah coz i don't have the inspiration atm */}

            {/* buttons here */}
            <div className="mt-8 justify-center items-center flex space-x-4">
                <button className="bg-blue-800/80 px-8 py-3 cursor-pointer hover:bg-blue-800 transition-all rounded-2xl text-white font-semibold text-lg">Get Started</button>
                <button className="bg-white/80 px-8 py-3 cursor-pointer hover:bg-white transition-all rounded-full  border-black text-black font-semibold text-lg border-1 hover:border-gray-600">Learn More</button>
            </div>
        </div>
    );
};

export default HeroSection;