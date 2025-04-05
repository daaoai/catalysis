import React from "react";

interface TabFooterProps {
  activeTab: number;
  totalTabs: number;
  setActiveTab: (index: number) => void;
}

const TabFooter: React.FC<TabFooterProps> = ({
  activeTab,
  totalTabs,
  setActiveTab,
}) => {
  // Custom colors as specified
  const activeColor = "#AD2022";
  const inactiveColor = "#FFBDBD";

  const tabs = Array.from({ length: totalTabs }, (_, i) => i);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="flex justify-center items-center space-x-2 md:space-x-6">
      {tabs.map((tab) => (
        <svg
          key={tab}
          width="100"
          height="4"
          viewBox="0 0 200 4"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleTabClick(tab)}
          className="w-12 md:w-48 h-1 md:h-4 cursor-pointer transition-all duration-300 hover:opacity-80"
        >
          <rect
            width="200"
            height="4"
            rx="2"
            fill={activeTab === tab ? activeColor : inactiveColor}
          />
        </svg>
      ))}
    </div>
  );
};

export default TabFooter;
