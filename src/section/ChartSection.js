import React from "react";
import { Card } from "../components/Card"; // Import your Card component
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js"; // Import necessary components from Chart.js
import { Doughnut, Pie } from "react-chartjs-2"; // Import chart components
import worldMap from "../assets/world-map.png"; // Add your static world map image path
import unitedState from "../assets/country_images/us.png"; // Import your country flag images dynamically
import Australia from "../assets/country_images/au.png"; // Import your country flag images dynamically
import China from "../assets/country_images/cn.png"; // Import your country flag images dynamically
import Germany from "../assets/country_images/de.png"; // Import your country flag images dynamically
import Romania from "../assets/country_images/ro.png"; // Import your country flag images dynamically
import Japan from "../assets/country_images/jp.png"; // Import your country flag images dynamically
import Netherlands from "../assets/country_images/nl.png"; // Import your country flag images dynamically

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartSection = () => {
  // Data for the circular progress chart
  const targetData = {
    datasets: [
      {
        data: [67, 33], // 67% achieved, 33% remaining
        backgroundColor: ["#878D96", "#DDE1E6"], // Custom colors
        borderWidth: 0,
      },
    ],
  };

  const sellingUsersData = {
    labels: ["User Name", "User Name", "User Name", "User Name", "User Name"],
    datasets: [
      {
        data: [20, 15, 10, 30, 25],
        backgroundColor: ["#878D96", "#C5CBD3", "#8F96A3", "#555A63", "#E5E9EE"],
        borderWidth: 0,
      },
    ],
  };

  // Data for the "Users by Country"
  const countriesData = [
    { name: "United States", percentage: "27.5%", users: "4.5M", flag: unitedState },
    { name: "Australia", percentage: "11.2%", users: "2.3M", flag: Australia },
    { name: "China", percentage: "9.4%", users: "2M", flag: China },
    { name: "Germany", percentage: "8%", users: "1.7M", flag: Germany },
    { name: "Romania", percentage: "7.9%", users: "1.6M", flag: Romania },
    { name: "Japan", percentage: "6.1%", users: "1.2M", flag: Japan },
    { name: "Netherlands", percentage: "5.9%", users: "1M", flag: Netherlands },
  ];

  // Data for the pie chart
  const pieData = {
    labels: ["Very Active", "Inactive"],
    datasets: [
      {
        data: [60, 40], // 60% Very Active, 40% Inactive
        backgroundColor: ["#878D96", "#DDE1E6"], // Custom colors
        borderWidth: 0,
      },
    ],
  };

  return (
    <div>

      <div className="grid grid-cols-6 gap-4 p-6">
        {/* Circular Progress Chart */}
        <Card className="col-span-2 shadow-sm border border-gray-200 rounded-lg p-4">
          <div className="mb-4 text-gray-700 font-medium">Target</div>
          <Doughnut
            data={targetData}
            options={{ cutout: "70%", plugins: { legend: { display: false } } }}
          />
          <div className="text-center mt-4 text-xl font-bold text-gray-900">67%</div>
          <div className="flex justify-center mt-2 gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-700"></span> Achieved
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-300"></span> Remaining
            </div>
          </div>
        </Card>

        {/* Pie Chart */}
        <Card className="col-span-2 shadow-sm border border-gray-200 rounded-lg p-4">
          <div className="mb-4 text-gray-700 font-medium">Most Active Account Types</div>
          <Pie
            data={pieData}
            options={{
              plugins: {
                legend: { position: "bottom", labels: { boxWidth: 12 } },
              },
            }}
          />
          <div className="flex justify-center mt-4 gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-700"></span> Very Active
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-300"></span> Inactive
            </div>
          </div>
        </Card>

        {/* World Map - Active Countries */}
        <Card className="col-span-2 shadow-sm border border-gray-200 rounded-lg p-4">
          <div className="mb-4 text-gray-700 font-medium">Active Countries</div>
          <img src={worldMap} alt="World Map" className="w-full h-auto rounded" />
          <div className="flex justify-center mt-4 gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-700"></span> Very Active
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-300"></span> Inactive
            </div>
          </div>
          {/* Action Buttons */}
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-800 text-white mt-4 p-3 rounded-lg gap-2">
            <span className="text-sm sm:text-base">
              Vel odio leo lacus, maecenas elit sagittis aliquam amet.
            </span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#" className="text-blue-400 underline text-sm sm:text-base">
                Link Action
              </a>
              <button className="bg-blue-500 px-4 py-2 text-white text-sm sm:text-base rounded-lg hover:bg-blue-600">
                Button
              </button>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-6 gap-4 p-6">
      {/* Users by Country */}
      <Card className="col-span-2 shadow-sm border border-gray-200 rounded-lg p-4">
        <div className="mb-4 text-gray-700 font-medium">Users by Country</div>
        <ul className="text-sm">
          {countriesData.map((country, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-gray-700">{country.name}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gray-500">{country.percentage}</span>
                <span className="text-gray-900 font-medium">{country.users}</span>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      {/* Top 5 Best Selling Users */}
      <Card className="col-span-4 shadow-sm border border-gray-200 rounded-lg p-4">
        <div className="mb-4 text-gray-700 font-medium">Top 5 Best Selling Users</div>
        <div className="flex items-center">
          <div className="w-1/2">
            <Doughnut
              data={sellingUsersData}
              options={{
                cutout: "70%",
                plugins: { legend: { display: false } },
              }}
            />
          </div>
          <ul className="w-1/2 text-sm">
            {sellingUsersData.labels.map((label, index) => (
              <li key={index} className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full`}
                    style={{
                      backgroundColor:
                        sellingUsersData.datasets[0].backgroundColor[index],
                    }}
                  ></span>
                  <span className="text-gray-700">{label}</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-gray-900 font-medium">
                    {["$1.2M", "$800K", "$645K", "$590K", "$342K"][index]}
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      index === 3 ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                    }`}
                  >
                    {["+8.2%", "+7%", "+2.5%", "-6.5%", "+1.7%"][index]}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
    </div>

  );
};

export default ChartSection;
