'use client';
import { InformationSection } from '@/components/information-section/informationsection';
import { BellIcon, SearchIcon } from 'lucide-react';
import React, { useState } from 'react';

type Sections = "Profile Settings" | "Password" | "Notifications" | "Verification";

const ProfilePage = () => {
  const [selectedSection, setSelectedSection] = useState<Sections>("Profile Settings");

  return (
    <div className="profilePage w-full min-h-screen flex flex-col justify-start items-stretch p-4 sm:p-6 md:p-8 lg:p-10">

      {/* Top Layer */}
      <div className="topLayer flex flex-col sm:flex-row w-full justify-between items-center mb-6">
        <h3 className="text-2xl sm:text-3xl text-gray-400 font-semibold mb-4 sm:mb-0">Profile</h3>

        <div className="flex flex-row justify-start sm:justify-center items-center space-x-4">
          <SearchIcon className="w-5 h-5 text-black" />
          <BellIcon className="w-5 h-5 text-black" />
          <div className="userAvatar w-8 h-8 rounded-full bg-gray-300"></div>
          <p className="username text-gray-600">Armaan</p>
        </div>
      </div>

      {/* Account Settings Container */}
      <div className="flex flex-col w-full bg-gray-400/30 rounded-xl backdrop-blur-md backdrop-brightness-105 p-4 md:p-6 lg:p-8">

        <h3 className="text-gray-700 text-2xl sm:text-3xl font-semibold mb-6">Account Settings</h3>

        <div className="detailsSection flex flex-col md:flex-row gap-6 w-full">

          {/* Left Sidebar */}
          <div className="flex flex-col w-full md:w-60 bg-white/30 rounded-xl py-4">
            {["Profile Settings", "Password", "Notifications", "Verification"].map((item) => (
              <span
                key={item}
                onClick={() => setSelectedSection(item as Sections)}
                className={`text-black text-lg sm:text-xl px-4 py-2 my-1 w-full hover:cursor-pointer hover:bg-white/80 transition-all ${
                  selectedSection === item ? 'bg-white/60' : ''
                }`}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Right Information Section */}
          <div className="flex-1 w-full">
            <InformationSection />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
