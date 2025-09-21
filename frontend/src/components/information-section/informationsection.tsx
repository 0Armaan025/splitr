import { CustomField } from "../custom-field/customfield";

export const InformationSection = () => {
    return (
        <div className="informationSection flex flex-col bg-white/30 p-4 mt-6 rounded-xl w-full md:w-auto">
            
            {/* Photo Section */}
            <div className="photoSection flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                <div className="userPhoto w-32 h-32 rounded-full bg-gray-300"></div>
                <div className="flex flex-row gap-4">
                    <input type="button" value="Upload New" className='bg-blue-700 rounded-xl hover:cursor-pointer hover:bg-blue-800 transition-all p-4'/>
                    <input type="button" value="Delete Avatar" className='bg-gray-500 rounded-xl hover:cursor-pointer hover:bg-gray-600 transition-all p-4'/>
                </div>
            </div>
            
            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <CustomField label="First Name" placeholder="Enter First Name" type="text" />
                <CustomField label="Last Name" placeholder="Enter Last Name" type="text" />
                <CustomField label="Email" placeholder="Enter Email" type="text" />
                <CustomField label="Phone Number" placeholder="Enter Phone Number" type="number" />
                <CustomField label="Gender" options={["Male", "Female", "Other"]} placeholder="" type="radio" />
                <CustomField label="Bio" placeholder="Enter Bio" type="textarea" />
            </div>

            {/* Save Button */}
            <div className="mt-6">
                <input type="button" value="Save Changes" className="p-4 rounded-xl bg-blue-800 hover:bg-blue-700 transition-all cursor-pointer w-full sm:w-48"/>
            </div>
        </div>
    );
}
