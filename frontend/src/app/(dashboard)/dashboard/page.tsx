import { BellIcon, SearchIcon } from 'lucide-react';
import { Poppins } from 'next/font/google';
import React from 'react';
import InfoGroup from '@/components/info-group';
import { Leaderboard } from '@/components/leaderboard/leaderboard';

const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
});

// ✅ Cleaned-up CampaignCard (less cramped + balanced)
const CampaignCard = () => {
  return (
    <div className="campaign-card p-6 bg-white/20 backdrop-blur-2xl rounded-2xl shadow-sm shadow-black/20 
      transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-black/30
      flex flex-col justify-between w-full h-[15rem]">
      
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-gray-800">Campaign Title</h3>
        <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full font-medium">
          Active
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-5 mt-3">
        <img 
          src="https://images.unsplash.com/photo-1750494733502-30427edd0efc?w=400&auto=format&fit=crop&q=60"
          alt="Campaign"
          className="w-full sm:w-32 h-24 rounded-lg object-cover flex-shrink-0"
        />
        <div className="flex flex-col text-sm text-gray-700">
          <h4 className="font-medium text-gray-900">Marketing Campaign Q4</h4>
          <p className="text-gray-600 mt-1">$2,450 spent</p>
          <p className="text-gray-500 text-xs">Sept 24 - Dec 24, 2025</p>
        </div>
      </div>
    </div>
  );
};

const DashboardPage = () => {
  return (
    <div className="dashboard ml-12 overflow-x-hidden">
      <div className="mt-4"></div>

      {/* Top Bar */}
      <div className="topLayer flex w-[76vw] xl:w-[90vw] justify-between items-center">
        <h3 className="text-2xl text-gray-600 font-semibold">Welcome back, Armaan 👋</h3>

        <div className="flex items-center space-x-4">
          <SearchIcon className="w-5 h-5 text-gray-700 hover:text-black cursor-pointer" />
          <BellIcon className="w-5 h-5 text-gray-700 hover:text-black cursor-pointer" />
          <div className="w-9 h-9 rounded-full bg-gray-300"></div>
          <p className="text-gray-600 font-medium">Armaan</p>
        </div>
      </div>

      {/* Page Title */}
      <h3 className={`text-5xl sm:text-6xl mt-6 text-black font-semibold ${poppinsFont.className}`}>
        Dashboard
      </h3>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-1">
          <CampaignCard />
        </div>

        <div className="lg:col-span-2">
          <InfoGroup />
        </div>

        <div className="lg:col-span-3">
          <Leaderboard />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
