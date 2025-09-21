import React from 'react'
import InfoComponent from './info-component'
import { PersonStandingIcon, DollarSignIcon, TrendingUpIcon, UsersIcon } from 'lucide-react'

const InfoGroup = () => {
  return (
    <div className='info-group grid grid-cols-1 sm:grid-cols-2 gap-4 w-full '>
      <InfoComponent icon={PersonStandingIcon} title="Total Campaigns" value="12" />
      <InfoComponent icon={DollarSignIcon} title="Total Spend" value="$8.2K" />
      <InfoComponent icon={TrendingUpIcon} title="Conversion Rate" value="3.4%" />
      <InfoComponent icon={UsersIcon} title="Total Reach" value="45.2K" />
    </div>
  )
}

export default InfoGroup