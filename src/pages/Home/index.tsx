import { useState } from "react";
import HomeHeader from "./HomeHeader";
import { assets } from "@/utills/assets";
import Button from "@/components/Button";
import Drawer from "@/components/Drawer";
import HomeGraphsection from "./HomeGraphsection";
import HomeAccordianSection from "./HomeAccordianSection";
import HomeEditVariablesComponent from "./HomeEditVariablesComponent";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="w-full h-full overflow-y-hidden">
      <HomeHeader />
      <div className="w-full p-[37px] bg-black-500 h-[calc(100vh-82px)] border-[1px] border-black-200 rounded-tl-[5px] rounded-br-[5px] rounded-bl-[5px] overflow-y-auto custom-scrollbar">
        <div className="flex justify-between items-center flex-wrap gap-[10px]">
          <div className="flex items-center gap-[10px]">
            <img
              src={assets.lightning}
              alt="lightning"
              className="lg:w-[30px] lg:h-[30px] w-[24px] h-[24px]"
            />
            <h1 className="lg:text-[32px] text-[24px] font-bold text-white-100 ">
              Charging Stations
            </h1>
          </div>

          <div className="flex justify-between items-center gap-[12px]">
            <Button
              variant="primary"
              size="iconOnly"
              onClick={() => {}}
              icon={<img src={assets.time} alt="time" className="lg:w-[16px] lg:h-[16px] w-[12px] h-[12px]" />}
            />
            <Button variant="primary" size="medium" onClick={() => setIsDrawerOpen(true)}>
              {" "}
              Edit Variables
            </Button>
            <Button
              variant="primary"
              size="iconOnly"
              onClick={() => {}}
              icon={<img src={assets.uploadU} alt="time" className="lg:w-[16px] lg:h-[16px] w-[12px] h-[12px]" />}
            />
          </div>
        </div>

        

        {/* Best Scenario Results section */}
        <div className="mt-[40px]">
          <HomeAccordianSection />
        </div>

        {/* Graph + KPI section */}
        <div className="mt-[30px]">
          <HomeGraphsection />
        </div>
       
        
      </div>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Edit Variables"
        >
          <HomeEditVariablesComponent />
      </Drawer>
    </div>
  );
}
