// DashboardPage.js
import { CampaignCard } from '@/components/campaign-card/campaigncard';
import InfoGroup from '@/components/info-group';
import { Leaderboard } from '@/components/leaderboard/leaderboard';
import { BellIcon, SearchIcon } from 'lucide-react'
import { Poppins } from 'next/font/google'
import React from 'react'

const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']  
});

const DashboardPage = () => {
  return (
    <div className="dashboard ml-4">
      {/* spacer */}

      <div className="spacer mt-4"></div>

      {/* top layer */}
     <div className="topLayer flex flex-row w-[76vw] xl:w-[90vw] justify-between items-center">

       <div>
         <h3 className='text-2xl text-gray-600 font-semibold'>Welcome back, Armaan 👋</h3>
       </div>
       <div className='flex flex-row justify-center items-center space-x-4'>
           <SearchIcon className="w-4 h-4 text-black"/>
           <BellIcon className="w-4 h-4 text-black"/>
           <div className="userAvatar w-8 h-8 rounded-full bg-gray-300"></div>
           <p className="username text-gray-600">Armaan</p>
       </div>

     </div>

     <h3 className={`text-6xl mt-4 text-black font-semibold ${poppinsFont.className}`}>Dashboard</h3>

     {/* grid here for kind of respnosive ness wiht 2 cols and 2 rows and just a flex col for small screens */}
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-4">
        {/* Campaign Card */}
        <div className="lg:col-span-1 ml-2">
          <CampaignCard/>
        </div>
        
        {/* Info Group */}
        <div className="lg:col-span-2 mr-32">
          <InfoGroup/>
        </div>

        <div className="lg:col-span-2 mr-32">
          <Leaderboard/>
        </div>
      </div>
    </div>

  )
}

export default DashboardPage