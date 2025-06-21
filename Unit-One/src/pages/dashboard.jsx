import React from "react";

import stats from "../newComponent/statData";
import Statcard from "../newComponent/statCard";
export default function Dashboard() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-950">Dashboard Overview</h1>
      <div className="flex items-center justify-between">
        {stats.map((item, index) => {
          return (
            <Statcard
              key={index}
              title={item.title}
              counts={item.count}
              icon={<item.icon />}
              color={item.color}
            />
          );
        })}
      </div>
    </>
  );
}
