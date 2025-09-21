export const InformationSection = () => {
    return (
        <div className="informationSection flex flex-col bg-white/30 p-4  mt-6 rounded-xl xl:w-[80rem] sm:w-[38rem] sm:ml-0 xl:ml-6 lg:ml-6 md:ml-8  md:h-[45rem] sm:h-[30rem] lg:h-[45rem] xl:h-[45rem] ">
                            <div className="photoSection flex flex-row justify-start items-center">
                                <div className="userPhoto w-32 h-32 rounded-full bg-gray-300 ml-8"></div>
                                <input type="button" value="Upload New" className='bg-blue-700 rounded-xl hover:cursor-pointer hover:bg-blue-800 transition-all p-4 ml-12'/>
                                <input type="button" value="Delete Avatar" className='bg-gray-500 rounded-xl hover:cursor-pointer hover:bg-gray-600 transition-all p-4 ml-4'/>
                            </div>
                        </div>
    );
}

// let us now create a CustomField component for all types of fields :))), 

// and ykw let's just add this to github for nothing,  coz we have 0 ai tolerance policy now
// and im aspiring to create a code black box too, with a challenge to BOYCOTT AI AND change stuff acc to my wish
// and the reapers :)