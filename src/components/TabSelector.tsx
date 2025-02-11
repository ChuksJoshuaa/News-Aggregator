import { TabsProps } from "@/interface";
import React from "react";

const TabSelector: React.FC<TabsProps> = ({
  selectedIndex,
  setSelectedIndex,
  tabs,
  getTabClass,
  setSelectedTab,
}) => {
  const handleTabClick = (index: number, tabId: string) => {
    setSelectedIndex(index);
    setSelectedTab?.(tabId);
  };

  return (
    <div className="border-b border-gray-200 mb-4">
      <ul className="flex justify-start mb-px overflow-x-auto">
        {tabs.map((tab, index) => (
          <li
            key={tab.id}
            className="mr-2 list-none flex items-center"
          >
            <button
              onClick={() => handleTabClick(index, tab.id)}
              className={getTabClass(selectedIndex === index)}
              id={`${tab.id}-tab`}
              data-tabs-target={`#${tab.id}`}
              type="button"
              role="tab"
              aria-controls={tab.id}
              aria-selected={selectedIndex === index}
            >
              {tab.name}
            </button>

            {index < tabs.length - 1 && (
              <span className="h-[30px] w-[0.15px] bg-[#687D9466] rounded-full ml-2" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabSelector;
