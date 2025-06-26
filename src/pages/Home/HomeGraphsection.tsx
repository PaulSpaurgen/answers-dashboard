import Button from "../../components/Button";
import GraphBox from "../../components/GraphBox";
import { assets } from "../../utills/assets";
import KPICard from "../../components/KPICard";

export default function HomeGraphsection() {
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
          <div className="flex items-center justify-between mb-[10px]">
            <h3 className="text-[24px] font-bold text-white-100">
              Key Performance Indicators
            </h3>
            <Button variant="secondary" size="small" onClick={() => {}}>
              <div className="flex items-center">
                Variables{" "}
                <img
                  src={assets.plus}
                  alt="plus"
                  className="ml-[10px] w-[12px] h-[12px]"
                />
              </div>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] flex-1">
            <KPICard
              title="Infrastructure Units"
              description="This describes variable two and what the shown data means."
              value="€421.07"
            />
            <KPICard
              title="Charging Growth"
              description="This describes variable two and what the shown data means."
              value={33.07}
            />
            <KPICard
              title="Localization change"
              description="This describes variable two and what the shown data means."
              value="21.9%"
            />
            <KPICard
              title="Fleet growth"
              description="This describes variable two and what the shown data means."
              value="7.03%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
