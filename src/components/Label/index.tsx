import { assets } from "../../utills/assets";
import { useRef } from "react";

interface LabelProps {
  text: string;
  className?: string;
  isSelected?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function Label({ text, className, isSelected, onClick , ...rest }: LabelProps) {
  const labelRef = useRef<HTMLDivElement>(null);
  const labelClass =
    "px-[10px] py-[5px] text-[15px] font-light rounded-[20px] w-fit flex items-center gap-[20px] cursor-pointer relative group ";
  const labelClassNormal =
    " border-[0.5px] border-gray-400 text-gray-400 bg-gray-300 hover:border-green-400 hover:bg-green-50 hover:text-green-500 transition-all duration-300 ";
  const labelClassesSelected =
    " border-[1px] border-green-400 bg-green-50 text-green-500";
  const iconClass = "w-[10px] h-[10px]";

  return (
    <div
      className={`${labelClass} ${
        isSelected ? labelClassesSelected : labelClassNormal
      } ${className}`}
      ref={labelRef}
      onClick={onClick}
      {...rest}
    >
               <div className="w-[70%] absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-[8px] opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-full" 
             style={{
               background: 'radial-gradient(ellipse 100% 50% at center, #C9FF3B 0%, transparent 70%)'
             }} />
      
      {text}

      <div className="flex items-center justify-center gap-[6px]">
        <div className="p-[2px] ">
          <img
            src={assets.stars}
            alt="close"
            className={`${iconClass} ${isSelected ? "" : "icon-gray"}`}
          />
        </div>
        <div className="p-[2px] ">
          {isSelected ? (
            <img
              src={assets.tick}
              alt="tick"
              className={`${iconClass} `}
            />
          ) : (
            <img
              src={assets.plus}
              alt="plus"
              className={`${iconClass} icon-gray`}
            />
          )}
        </div>
      </div>
    </div>
  );
}
