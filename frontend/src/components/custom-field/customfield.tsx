// type 

type InputType = "radio" | "country" | "text" | "number" | "textarea";

interface CustomFieldProps {
    label: string;
    placeholder: string;
    type: InputType;
    options?: string[]; // for radio and country types
};

export const CustomField = ({ label, placeholder, type, options }: CustomFieldProps) => {
    return (
        <div className="customField flex flex-col justify-center items-start">
            <label className="text-gray-700 font-semibold">{label}</label>
            {type === "text" && <input type="text" placeholder={placeholder} className="border border-gray-800 text-gray-700 rounded-md p-2 w-full my-2" />}
            {type === "number" && <input type="number" placeholder={placeholder} className="border border-gray-800 text-gray-700 rounded-md p-2 w-full my-2" />}
            {type === "textarea" && <textarea placeholder={placeholder} className="resizable border border-gray-800 text-gray-700 rounded-md p-2 w-full my-2"></textarea>}
            {type === "radio" && options && (
                <div className="radioGroup flex flex-row space-x-4 my-2">
                    {options.map((option, index) => (
                        <label key={index} className="flex items-center space-x-2">
                            <input type="radio" name={label} value={option} className="text-blue-600 " />
                            <span className="text-gray-700">{option}</span>
                        </label>
                    ))}
                </div>
            )}
            {type === "country" && options && (
                <select className="border border-gray-800 text-gray-700 rounded-md p-2 w-full my-2">
                    <option value="">{placeholder}</option>
                    {options.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))}
                </select>
            )}
        </div>
    );
}