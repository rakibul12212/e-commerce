"use client";

import { useState } from "react";

import Description from "./Description";
import Specification from "./Specification";
import Review from "./Review";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = [
    { key: "Description", label: "Description" },
    { key: "Specification", label: "Specification" },
    { key: "Review", label: "Review" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "Review":
        return <Review />;
      case "Specification":
        return <Specification />;
      default:
        return <Description />;
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex flex-wrap gap-x-2 w-full sm:flex-1 border-b border-gray-200">
          <div className="flex flex-wrap gap-2 ">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-4  ${
                  activeTab === tab.key
                    ? " text-xl font-semibold text-gray-500 border-b-3 "
                    : "text-xl font-semibold text-gray-500 "
                }`}
                aria-pressed={activeTab === tab.key}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4 min-h-[200px]">
        <div className="animate-fadeIn">{Content()}</div>
      </div>
    </div>
  );
};

export default Tab;
