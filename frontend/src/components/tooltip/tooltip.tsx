import { TooltipProps } from "@/lib/utils";

const Tooltip = ({text, bgColor, textColor, width}:TooltipProps) =>{

    return (
        <div className="tooltip w-50 cursor-pointer hover:bg-white/40 transition-all  h-auto p-2 rounded-full shadow-lg flex justify-center items-center " style={{backgroundColor: bgColor!=null?bgColor:"white", width: width!=null?width:"200px"}}>
            <h4 className="text-black font-semibold" style={{color: textColor!=null?textColor:"black"}}>{text}</h4>
        </div>
    );
};

export default Tooltip;
