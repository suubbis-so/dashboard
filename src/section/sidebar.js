import React from "react";
import "../App.css";
import NavigationMenu from "../components/NavigationMenu";
import pictures from "../assets/pictures.png";
import UserThumb from "../assets/user.png";
import cog from "../assets/cog.png";
import users from "../assets/users.png";
import search from "../assets/search.png";
import folders from "../assets/folders.png";
import home from "../assets/home.png";
import plane from "../assets/plane.png";
import tags from "../assets/tags.png";
import notification from "../assets/Vector.png";
import WebbyFrames from "../assets/Icon Container.png";
// import WebbyFrames from "../assets/pictures.png";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col p-6 gap-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={WebbyFrames} alt="WebbyFrames Logo" className="w-6 mb-4 h-6" />
        <div className="">
          <h1 className="text-gray-700 font-bold text-lg">WebbyFrames</h1>
          <div className="ml-20">
            <p className="text-gray-500 text-sm">for Figma</p>
          </div>
        </div>
      </div>

      {/* Profile and Actions */}
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
          <img src={UserThumb} alt="User" className="w-6 h-6" />
        </div>
        <div className="flex gap-4">
          <img src={cog} alt="Settings" className="w-6 h-6" />
          <div className="relative">
            <img src={notification} alt="Notifications" className="w-6 h-6" />
            <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              9
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center bg-gray-100 rounded-md px-4 py-2">
        <img src={search} alt="Search" className="w-4 h-4" />
        <input
          type="text"
          placeholder="Search for..."
          className="bg-gray-100 text-gray-500 text-sm ml-2 focus:outline-none w-full"
        />
      </div>

      {/* Navigation */}
      <NavigationMenu>
        <NavigationMenu.Item>
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">
            <img src={home} alt="Eleven" className="w-5 h-5" />
            Eleven
          </a>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <a
            href="#"
            className="flex items-center gap-3 bg-gray-100 text-gray-700 px-4 py-2 rounded-md"
          >
            <img src={folders} alt="Twelve" className="w-5 h-5" />
            Twelve
          </a>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">
            <img src={tags} alt="Thirteen" className="w-5 h-5" />
            Thirteen
          </a>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">
            <img src={users} alt="Fourteen" className="w-5 h-5" />
            Fourteen
          </a>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">
            <img src={pictures} alt="Fifteen" className="w-5 h-5" />
            Fifteen
          </a>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <div className="flex items-center justify-between text-gray-700 px-4 py-2 rounded-md">
            <div className="flex items-center gap-3">
              <img src={plane} alt="Sixteen" className="w-5 h-5" />
              Sixteen
            </div>
            <span className="bg-gray-300 text-xs px-2 py-1 rounded-full">99+</span>
          </div>
        </NavigationMenu.Item>
      </NavigationMenu>
    </aside>
  );
};

export default Sidebar;
