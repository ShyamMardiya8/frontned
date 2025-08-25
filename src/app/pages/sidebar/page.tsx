import React from "react";
import { Home, User, Settings, LogOut } from "lucide-react"; // icons

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col shadow-lg">
      {/* Logo */}
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        MyApp
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-3">
        <a
          href="#"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
        >
          <Home size={20} /> Dashboard
        </a>
        <a
          href="#"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
        >
          <User size={20} /> Profile
        </a>
        <a
          href="#"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
        >
          <Settings size={20} /> Settings
        </a>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-red-600 transition">
          <LogOut size={20} /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
