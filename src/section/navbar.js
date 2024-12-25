import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import overviewIcon from "../assets/calendar.png";
import arrowIcon from "../assets/arrow.png";
import horizontal from "../assets/more-horizontal.png";

const Navbar = ({ showDatePicker }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { id: "overview", label: "Overview" },
    { id: "tasks", label: "Tasks", count: 7 },
    { id: "documents", label: "Documents", count: 2 },
    { id: "team", label: "Team", count: "99+" },
    { id: "reports", label: "Reports" },
    { id: "admin", label: "Admin", isSpecial: true },
  ];

  const handleNavigation = (id) => {
    navigate(`/${id.toLowerCase()}`);
  };

  return (
    <header className="bg-[#DDE1E6] px-6 py-4">
      {/* Dashboard Title */}
      <div className="text-2xl font-bold text-gray-900 mb-4">Dashboard</div>

      {/* Navigation Menu */}
      <div className="flex items-center justify-between border-b border-gray-300 pb-2">
        <NavigationMenu className="flex items-center gap-8">
          <NavigationMenuList className="flex gap-12">
            {navigationItems.map((item) => (
              <NavigationMenuItem
                key={item.id}
                className={`cursor-pointer pb-1 ${
                  location.pathname.includes(item.id)
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : item.isSpecial
                    ? "text-black-400"
                    : "text-black-600"
                }`}
                onClick={() => handleNavigation(item.id)}
              >
                <span className="flex items-center gap-2">
                  {item.label}
                  {item.count && (
                    <span
                      className={`text-xs font-medium ${
                        location.pathname.includes(item.id)
                          ? "bg-blue-200 text-blue-800"
                          : "bg-gray-200 text-gray-600"
                      } px-2 py-1 rounded-full`}
                    >
                      {item.count}
                    </span>
                  )}
                </span>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <img src={horizontal} alt="More" className="w-4 h-4 ml-4" />

        {/* Show Date Pickers only when showDatePicker is true */}
        {showDatePicker && (
          <div className="flex items-center gap-2 bg-[#ffff]">
            <div className="flex items-center border border-gray-300 px-3 py-2 w-36">
              <span className="text-gray-600 text-sm">Start date</span>
              <img src={overviewIcon} alt="Calendar" className="w-4 h-4 ml-10" />
            </div>
            <img
              src={arrowIcon}
              alt="Arrow"
              className="bg-[#DDE1E6] p-2 w-10 h-10 flex items-center justify-center rounded"
            />
            <div className="flex items-center border border-gray-300 px-3 py-2 w-36">
              <span className="text-gray-600 text-sm">End date</span>
              <img src={overviewIcon} alt="Calendar" className="w-4 h-4 ml-10" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
