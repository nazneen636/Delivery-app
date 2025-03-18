"use client";
import { useState } from "react";
import WeeklyComponent from "./WeeklyComponent";


const StatisticPage = () => {
  const [activeTab, setActiveTab] = useState("weekly");




  return (
    <div className="p-4">
      <div className="flex gap-4 mb-4">
        <button
          className={`p-2 ${activeTab === "weekly" ? " text-[16px] border-b-2 border-[#E97A20]" : "text-gray-500"}`}
          onClick={() => setActiveTab("weekly")}
        >
          Weekly
        </button>
        <button
          className={`p-2 ${activeTab === "monthly" ? "text-[16px] border-b-2 border-[#E97A20]" : "text-gray-500"}`}
          onClick={() => setActiveTab("monthly")}
        >
          Monthly
        </button>
        <button
          className={`p-2 ${activeTab === "lastyear" ? "text-[16px] border-b-2 border-[#E97A20]" : "text-gray-500"}`}
          onClick={() => setActiveTab("lastyear")}
        >
          Last Year
        </button>
      </div>

      {/* Show different components based on activeTab */}
      {activeTab === "weekly" && <WeeklyComponent />}
      {activeTab === "monthly" && <WeeklyComponent />}
      {activeTab === "lastyear" && <WeeklyComponent />}
    </div>
  );
};






export default StatisticPage;
