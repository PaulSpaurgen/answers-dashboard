import React from "react";
import commonClasses from "@/utills/commonClasses";

interface KPICardProps {
  title: string;
  description: string;
  value: string | number;
  /**
   * Optional additional className to extend / override the default classes
   */
  className?: string;
  /**
   * Optional icon element (e.g. question-mark tooltip icon) which will be rendered in the top-right corner
   */
  icon?: React.ReactNode;
}

export default function KPICard({
  title,
  description,
  value,
  className = "",
  icon,
}: KPICardProps) {
  return (
    <div
      className={`${commonClasses.boxClasses.common} ${className} relative h-[220px]`}
    >
      {/* Top section with title and optional icon */}
      <div className="flex items-start justify-between mb-[10px] ">
        <p className="text-[18px] font-medium text-white-100 leading-tight">
          {title}
        </p>
        {icon && <span className="shrink-0">{icon}</span>}
      </div>

      {/* Description */}
      <p className="text-[12px] text-gray-100 opacity-60 mt-1 leading-snug max-w-[240px]">
        {description}
      </p>

      {/* Value */}
      <h2 className="text-[32px] font-bold text-white-100 mt-4  absolute bottom-[30px] right-[30px]">{value}</h2>
    </div>
  );
} 