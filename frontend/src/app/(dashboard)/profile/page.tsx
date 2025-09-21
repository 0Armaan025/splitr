import { InformationSection } from '@/components/information-section/informationsection'
import { BellIcon, SearchIcon } from 'lucide-react'
import React from 'react'

const ProfilePage = () => {
    return (
        <div className='profilePage flex flex-col justify-start items-start ml-8'>

            <div className="spacer mt-8 "></div>
            {/* top layer */}
            <div className="topLayer flex flex-row w-[76vw] xl:w-[90vw] justify-between items-center">
                <div>
                    <h3 className='text-2xl text-gray-400 font-semibold'>Profile</h3>
                </div>
                <div className='flex flex-row justify-center items-center space-x-4'>
                    <SearchIcon className="w-4 h-4 text-black" />
                    <BellIcon className="w-4 h-4 text-black" />
                    <div className="userAvatar w-8 h-8 rounded-full bg-gray-300"></div>
                    <p className="username text-gray-600">Armaan</p>
                </div>




            </div>

            {/* EVERYTHING ABOUT ACCOUNT HERE */}

            <div className="min-h-screen flex flex-col w-[78vw] bg-gray-400/40 mt-4 rounded-xl backdrop-blur-md backdrop-brightness-105 ">

                    <h3 className='text-gray-700 text-3xl font-semibold mt-8 ml-4'>Account Settings</h3>
            
                    <div className="detailsSection flex xl:flex-row lg:flex-row md:flex-col sm:flex-col h-[18rem] py-1">
                        <div className="flex flex-col w-[15rem] ml-8 mt-6 rounded-xl justify-center items-start bg-white/30 py-4 ">
                        <span className='text-black text-xl px-4 py-2 my-1 w-full hover:cursor-pointer hover:bg-white/80 transition-all'>Profile Settings</span>
                        <span className='text-black text-xl px-4 py-2 my-1 w-full hover:cursor-pointer hover:bg-white/80 transition-all'>Password</span>
                        <span className='text-black text-xl px-4 py-2 my-1 w-full hover:cursor-pointer hover:bg-white/80 transition-all'>Notifications</span>
                        <span className='text-black text-xl px-4 py-2 my-1 w-full hover:cursor-pointer hover:bg-white/80 transition-all'>Verification</span>
                        
                        </div>

                        {/* HERE IS THE AMAZING PART */}

                        <InformationSection/>
                    </div>
            </div>

        </div>
    )
}

export default ProfilePage