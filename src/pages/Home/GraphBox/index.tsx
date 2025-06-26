import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import commonClasses from "../../../utills/commonClasses";

interface GraphBoxProps {
  toolbar?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export default function GraphBox({
  toolbar,
  children,
  className = "",
}: GraphBoxProps) {
  const [reloadKey, setReloadKey] = useState(0);

  // Force component reload on window resize
  useEffect(() => {
    const handleResize = () => {
      setReloadKey((prev) => prev + 1);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Chart configuration 
  const chartOptions: Highcharts.Options = {
    chart: {
      type: "line",
      backgroundColor: "transparent",
      height: 346,
      spacing: [20, 20, 20, 20],
      events: {
        load: function () {
          const chart = this;

          // Striped background pattern
          if (!chart.renderer.defs) {
            chart.renderer.defs = chart.renderer.createElement("defs").add();
          }
          chart.renderer
            .createElement("pattern")
            .attr({
              id: "custom-stripes",
              patternUnits: "userSpaceOnUse",
              width: 20,
              height: 20,
              patternTransform: "rotate(0)",
            })
            .add(chart.renderer.defs).element.innerHTML = `
              <rect width="2" height="20" fill="rgba(200, 233, 114, 0.2)" />
            `;

          // Create vertical dashed line for hover annotation
          (chart as any).hoverLine = chart.renderer
            .path([
              ["M", 0, 0],
              ["L", 0, chart.plotHeight],
            ])
            .attr({
              stroke: "#C8E972",
              "stroke-width": 1,
              "stroke-dasharray": "5,5",
              zIndex: 5,
            })
            .add()
            .hide();
          // Hide line when mouse leaves plot area
          chart.container.addEventListener("mouseleave", function () {
            if ((chart as any).hoverLine) {
              (chart as any).hoverLine.hide();
            }
          });
        },
      },
    },
    title: { text: undefined },
    credits: { enabled: false },
    legend: { enabled: false },
    xAxis: {
      categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      lineColor: "#575757",
      lineWidth: 0.77,
      gridLineWidth: 0,
      labels: {
        style: {
          color: "#EDEDED",
          fontSize: "12px",
        },
      },
    },
    yAxis: {
      title: { text: undefined },
      gridLineColor: "#343434",
      gridLineWidth: 1,
      lineWidth: 0.77,
      lineColor: "#575757",
      labels: {
        style: {
          color: "#EDEDED",
          fontSize: "12px",
        },
        formatter: function () {
          return "$" + (this.value as number) / 1000 + "K";
        },
      },
      min: 0,
      max: 100000,
      tickInterval: 20000,
    },
    plotOptions: {
      area: {
        enableMouseTracking: false,
        lineWidth: 0,
        color: "url(#custom-stripes)",
      },
      line: {
        marker: {
          enabled: true,
          fillColor: "#9AFF00",
          lineColor: "#9AFF00",
          radius: 4,
        },
        lineWidth: 2,
        color: "#C8E972",
      },
    },
    series: [
      {
        type: "area",
        name: "Stripe Area",
        data: [35000, 20000, 50000, 40000, 90000, 62000, 30000],
        enableMouseTracking: false,
      },
      {
        type: "line",
        name: "Unsatisfied Demand",
        data: [35000, 20000, 50000, 40000, 90000, 62000, 30000],
        marker: {
          symbol: "circle",
        },
      },
    ],
    tooltip: {
      backgroundColor: "#222324",
      borderColor: "#525252",
      borderRadius: 6,
      borderWidth: 1,
      useHTML: true,
      style: {
        color: "#FFFFFF",
        fontFamily: "Inter, sans-serif",
        zIndex: 1000,
      },
      hideDelay: 500,
      distance: 20,
      stickOnContact: true,
      formatter: function () {
        const value = (this.y as number) / 1000;
        return `
          <div style="padding: 8px 12px;">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div style="font-size: 18px; font-weight: 700; color: #FFFFFF;">$${value.toFixed(
                2
              )}k</div>
              <div style="margin-left: 8px;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.30006 11.2H7.70006V9.8H6.30006V11.2ZM7.00006 0C6.08081 0 5.17056 0.18106 4.32128 0.532843C3.472 0.884626 2.70032 1.40024 2.05031 2.05025C0.737559 3.36301 6.10352e-05 5.14348 6.10352e-05 7C6.10352e-05 8.85651 0.737559 10.637 2.05031 11.9497C2.70032 12.5998 3.472 13.1154 4.32128 13.4672C5.17056 13.8189 6.08081 14 7.00006 14C8.85658 14 10.6371 13.2625 11.9498 11.9497C13.2626 10.637 14.0001 8.85651 14.0001 7C14.0001 6.08075 13.819 5.17049 13.4672 4.32122C13.1154 3.47194 12.5998 2.70026 11.9498 2.05025C11.2998 1.40024 10.5281 0.884626 9.67885 0.532843C8.82957 0.18106 7.91931 0 7.00006 0ZM7.00006 12.6C3.91306 12.6 1.40006 10.087 1.40006 7C1.40006 3.913 3.91306 1.4 7.00006 1.4C10.0871 1.4 12.6001 3.913 12.6001 7C12.6001 10.087 10.0871 12.6 7.00006 12.6ZM7.00006 2.8C6.25745 2.8 5.54526 3.095 5.02016 3.6201C4.49506 4.1452 4.20006 4.85739 4.20006 5.6H5.60006C5.60006 5.2287 5.74756 4.8726 6.01011 4.61005C6.27266 4.3475 6.62876 4.2 7.00006 4.2C7.37136 4.2 7.72746 4.3475 7.99001 4.61005C8.25256 4.8726 8.40006 5.2287 8.40006 5.6C8.40006 7 6.30006 6.825 6.30006 9.1H7.70006C7.70006 7.525 9.80006 7.35 9.80006 5.6C9.80006 4.85739 9.50506 4.1452 8.97996 3.6201C8.45486 3.095 7.74267 2.8 7.00006 2.8Z" fill="#888888"/>
                </svg>
              </div>
            </div>
            <div style="display: flex; align-items: center; margin-top: 10px;">
              <span style="margin-left: 6px; font-size: 12px; color: #888888;">4.6% above target</span>
            </div>
          </div>
        `;
      },
      positioner: function (labelWidth, labelHeight, point) {
        const chart = this.chart;
        const x = point.plotX + chart.plotLeft;
        const y = point.plotY + chart.plotTop;

        // Show and position vertical dashed line from bottom to point Y
        if ((chart as any).hoverLine) {
          (chart as any).hoverLine
            .attr({
              d: ["M", x, y, "L", x, chart.plotTop + chart.plotHeight],
            })
            .show();
        }

                 // Position tooltip above or below the point based on available space
         const tooltipY = y - labelHeight - 15 < chart.plotTop 
           ? y + 25  // Position below if not enough space above
           : y - labelHeight - 15;  // Position above normally

         return {
           x: Math.max(10, Math.min(x - labelWidth / 2, chart.chartWidth - labelWidth - 10)),
           y: tooltipY,
         };
      },
    },
  };

  return (
    <div
      className={`${commonClasses.boxClasses.common} ${className} flex flex-col w-full h-full`}
    >
      {/* Header */}
      <div className="flex items-center justify-end mb-4">
        {toolbar || (
          <div className="relative">
            <select className="bg-[#18181A80] border border-[#5A5A5AA1] text-white-100 px-3 py-2 rounded-[5px] text-sm appearance-none pr-8 cursor-pointer">
              <option>Unsatisfied Demand %</option>
              <option>Satisfied Demand %</option>
              <option>Total Demand</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-white-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="flex-1">
        {children || (
          <HighchartsReact
            key={reloadKey}
            highcharts={Highcharts}
            options={chartOptions}
            containerProps={{ style: { height: "100%", width: "100%" } }}
          />
        )}
      </div>
    </div>
  );
}
