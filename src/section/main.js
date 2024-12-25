import React from "react";
import { Card } from "../components/Card"; // Import the Card component
// import { ChartSection  } from "ChartSection.js";

const Main = () => {
  const cardsData = [
    { title: "Users Total", value: "11.8M", percentage: "+2.5%", isPositive: true },
    { title: "New Users", value: "8.236K", percentage: "-1.2%", isPositive: false },
    { title: "Active Users", value: "2.352M", percentage: "+11%", isPositive: true },
    { title: "New Users", value: "8K", percentage: "+5.2%", isPositive: true },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      {cardsData.map((card, index) => (
        <Card key={index} className="shadow-sm border border-gray-200 rounded-lg p-4">
          <div className="mb-2 text-gray-500 font-medium">{card.title}</div>
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">{card.value}</div>
            <div
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                card.isPositive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
              }`}
            >
              {card.percentage}
            </div>
          </div>
        </Card>
      ))}
      {/* <ChartSection/> */}
    </div>
  );
};

export default Main;
