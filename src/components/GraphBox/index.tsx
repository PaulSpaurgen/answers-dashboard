import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import commonClasses from "../../utills/commonClasses";

interface GraphBoxProps {
  /** Optional toolbar (e.g. dropdown) */
  toolbar?: React.ReactNode;
  /** Graph (or children) content */
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
      setReloadKey(prev => prev + 1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Chart configuration matching the reference design
  const chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
      height: '346px',
      spacing: [20, 20, 20, 20],
    },
    title: {
      text: undefined,
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      lineColor: '#575757',
      lineWidth: 0.77,
      gridLineWidth: 0,
      labels: {
        style: {
          color: '#EDEDED',
          fontSize: '12px',
        },
      },
    },
    yAxis: {
      title: {
        text: undefined,
      },
      gridLineColor: '#343434',
      gridLineWidth: 1,
      lineWidth: 0.77,
      lineColor: '#575757',
      labels: {
        style: {
          color: '#EDEDED',
          fontSize: '12px',
        },
        formatter: function() {
          return '$' + (this.value as number / 1000) + 'K';
        },
      },
      min: 0,
      max: 100000,
      tickInterval: 20000,
    },
    plotOptions: {
      line: {
        marker: {
          enabled: true,
          fillColor: '#9AFF00',
          lineColor: '#9AFF00',
          radius: 4,
        },
        lineWidth: 2,
        color: '#C8E972',
        
      },
    },
    series: [
      {
        type: 'line',
        name: 'Unsatisfied Demand',
        data: [35000, 20000, 50000, 40000, 90000, 62000, 30000, 45000, 60000, 35000, 60000],
        marker: {
          symbol: 'circle',
        },
      },
      // {
      //   type: 'area',
      //   name: 'Satisfied Demand',
      //   data: [35000, 20000, 50000, 40000, 90000, 62000, 30000, 45000, 60000, 35000, 60000],
      //   fillColor: 'rgba(200, 233, 114, 0.15)',
      //   lineColor: 'rgba(200, 233, 114, 0.15)',
      //   lineWidth: 0,
        
      //   marker: {
      //     enabled: false,
      //   },
      // },
    ],
    tooltip: {
      backgroundColor: '#222324',
      borderColor: '#525252',
      style: {
        color: '#EDEDED',
      },
      formatter: function() {
        return `<b>${this.series.name}</b><br/>${this.x}: $${(this.y as number / 1000)}K`;
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
              <svg className="w-4 h-4 text-white-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
            containerProps={{ style: { height: '100%', width: '100%' } }}
          />
        )}
      </div>
    </div>
  );
} 