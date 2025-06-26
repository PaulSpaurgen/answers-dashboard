import Button from "@/components/Button";
import GraphBox from "./GraphBox";
import { assets } from "@/utills/assets";
import KPICard from "@/components/KPICard";
import { kpiCardsDataInitial } from "@/utills/staticData";
import { useState } from "react";

export default function HomeGraphsection() {
  const [kpiCards, setKpiCards] = useState(kpiCardsDataInitial);
  return (
    <div className="flex flex-col 2xl:flex-row gap-[20px] h-full">
      {/* Graph Box - Takes up 2/3 of the width on desktop */}
      <div className="2xl:w-2/3 h-full">
        <h3 className="text-[24px] font-bold text-white-100 mb-[10px]">
          Graphs
        </h3>
        <GraphBox className="h-full" />
      </div>

      {/* KPI Cards - 2x2 grid on the right side */}
      <div className="2xl:w-1/3 h-full">
        <div className="flex flex-col  h-fit">
          <div className="flex items-center justify-between mb-[10px] flex-wrap gap-[10px]">
            <h3 className="text-[24px] font-bold text-white-100">
              Key Performance Indicators
            </h3>
            <Button variant="secondary" size="small" onClick={() => {}}>
              <div className="flex items-center">
                Variables{" "}
                <img
                  src={assets.plus}
                  alt="plus"
                  className="ml-[10px] lg:w-[12px] lg:h-[12px] w-[10px] h-[10px]"
                />
              </div>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] flex-1">
            {/* KPI Cards */}
            {
              kpiCards.length > 0 ? (
                kpiCards.map((item, index) => (
                  <KPICard
                    key={index}
                    title={item.title}
                    description={item.description}
                    value={item.value}
                  />
                ))
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-[16px] font-normal text-white-100">No data available</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}
