import { LucideIcon } from 'lucide-react'
import React from 'react'

interface InfoComponentProps {
    icon: LucideIcon;
    title: string;
    value: string;
}

const InfoComponent = ({ icon, title, value }: InfoComponentProps) => {
  return (
    <div className="infoComponent flex flex-col justify-center items-start p-4 sm:p-6 w-full h-[8rem] sm:h-[10rem] bg-white/20 backdrop-blur-xl rounded-lg hover:bg-white/30 transition-all duration-300 cursor-pointer">
      <div className="flex flex-row justify-start items-center w-full">
        {icon && React.createElement(icon, { className: "w-12 h-12 sm:w-16 sm:h-16 text-gray-600 mr-3 sm:mr-4 flex-shrink-0" })}
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-sm sm:text-base text-gray-600 truncate">{title}</span>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 truncate">{value}</span>
        </div>
      </div>
    </div>
  )
}

export default InfoComponent