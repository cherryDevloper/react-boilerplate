// Tabs.tsx
import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full min-h-[50vh] ">
      <div className="flex w-full justify-between bg-[#5265BE4F] rounded-3xl p-[1.1rem 2.25rem] h-[3rem]  text-sm">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer  w-full flex font-bold items-center mx-1 justify-center px-4 py-2 ${
              index === activeTab
                ? 'bg-white text-primary rounded-3xl my-1'
                : 'bg-transparent text-[#5265BE70] '
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="mt-4 px-4 py-2">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
