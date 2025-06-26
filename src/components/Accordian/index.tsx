import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../../utills/assets";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

export default function Accordion({
  title,
  children,
  defaultExpanded = false,
  className = "",
}: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Header */}
      <div
        className="flex w-full justify-between cursor-pointer items-center px-[20px] py-[10px] border-[1px] border-black-200 rounded-[4px] bg-black-600"
        onClick={() => setIsExpanded(!isExpanded)}
      >
         <h2 className="text-[20px] font-normal text-green-100">
            {title}
          </h2>
        <div className="flex items-center justify-center w-[44px] h-[34px] rounded-[56px] border-[0.67px] border-green-200">
          <img
            src={assets.downarrow}
            alt="downarrow"
            className={`w-[12px] h-[7px] transition-all duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ 
              duration: 0.4, 
              ease: "easeInOut",
              opacity: { duration: 0.2 }
            }}
            className="overflow-hidden"
          >
            <motion.div 
              className="pt-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
