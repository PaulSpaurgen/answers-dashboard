import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../../utills/assets";

export default function HomeAccordianSection() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={`space-y-4`}>
      {/* Header */}
      <div
        className="flex w-full justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <img src={assets.stars} alt="stars" className="w-[18px] h-[18px]" />
          <h2 className="lg:text-[24px] text-[18px] font-semibold text-green-100">
            Best Scenario Results
          </h2>
        </div>
        <div className=" flex items-center justify-center w-[44px] h-[34px] rounded-[56px]  border-[0.67px] border-green-200 ">
          <img
            src={assets.downarrow}
            alt="downarrow"
            className={`lg:w-[12px] lg:h-[7px] w-[10px] h-[6px] transition-all duration-300 ${
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
              opacity: { duration:0.2 }
            }}
            className="overflow-hidden"
          >
            <motion.div 
              className="flex flex-col gap-[16px] lg:text-[16px] text-[12px] font-normal text-green-200 pt-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration:0.2, delay: 0.1 }}
            >
              <motion.div 
                className="lg:px-[24px] px-[16px] lg:py-[15px] py-[10px] flex w-full justify-between border-[0.5px] border-green-200 rounded-[6px] hover:border-green-100 transition-colors duration-200"
                transition={{ duration:0.2, delay: 0.2 }}
              >
                <p>
                  The best found configuration based on profit is characterized by
                  11 zones (max) with charging stations and 48 total number of
                  poles.
                </p>
                <img src={assets.dots} alt="dots" className="w-[16px] h-auto" />
              </motion.div>
              <motion.div 
                className="px-[24px] py-[15px] flex w-full justify-between border border-green-200 rounded-[6px] hover:border-green-100 transition-colors duration-200"
                transition={{ duration:0.2, delay:0.2 }}
              >
                <p>
                  The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.
                </p>
                <img src={assets.dots} alt="dots" className="w-[16px] h-auto" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
