// import Reviews, { ReviewType } from "components/page/product/Reviews";

import { useState } from "react";

export type TabType = {
  id: number;
  title: string;
  content: string | { [key: string]: any }[];
};

const Tabs = ({ data }: { data: TabType[] }) => {
  const [currentTab, setCurrentTab] = useState<TabType>(data[0]);
  return (
    <div className="mt-10">
      <div className="flex gap-8">
        {data.map((tab) => (
          <div
            onClick={() => {
              if (currentTab.id !== tab.id) setCurrentTab(tab);
            }}
            key={tab.id}
            className={`cursor-pointer py-2 hover:scale-105 duration-100 ${
              currentTab.id === tab.id
                ? "text-chipo-heading font-medium border-b-2 border-b-chipo-blue"
                : "text-chipo-heading"
            }`}
          >
            {tab.title}
          </div>
        ))}
      </div>
      {/* <div className="mt-10">
        {typeof currentTab.content === "string" ? (
          currentTab.content
        ) : (
          <Reviews reviews={currentTab.content as unknown as ReviewType[]} />
        )}
      </div> */}
    </div>
  );
};

export default Tabs;
