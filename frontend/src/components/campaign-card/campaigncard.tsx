export const CampaignCard = () => {
  return (
    <div className="campaign-card p-4 sm:p-6  max-w-lg mx-auto lg:mx-0
    hover:cursor-pointer
    hover:scale-105
    transition-all duration-300
    flex flex-col justify-between bg-white/20 backdrop-blur-2xl rounded-2xl shadow-sm shadow-black h-[12rem] w-[40rem] sm:h-[18rem]">

      <div className="flex flex-row justify-between w-full items-start">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Campaign Title</h3>
        <p className="text-xs sm:text-sm text-gray-600 bg-green-100 px-2 py-1 rounded-full">Active</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between w-full items-center gap-4">
        <img 
          src="https://images.unsplash.com/photo-1750494733502-30427edd0efc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" 
          alt="Campaign" 
          className="w-full sm:w-32 h-20 sm:h-24 rounded-md object-cover flex-shrink-0" 
        />

        <div className="flex text-black flex-col justify-center items-start space-y-1 text-center sm:text-left">
          <h4 className="text-sm sm:text-base font-medium">Marketing Campaign Q4</h4>
          <p className="text-xs sm:text-sm text-gray-600">$2,450 spent</p>
          <p className="text-xs text-gray-500">Sept 24 - Dec 24, 2025</p>
        </div>
      </div>
    </div>
  );
}