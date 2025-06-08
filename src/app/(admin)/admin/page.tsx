"use client";
import { useState } from "react";
import {
  GoHome,
  GoGear,
  GoBell,
  GoSignOut,
  GoImage,
  GoVideo
} from "react-icons/go";
import { HiBars3 } from "react-icons/hi2";

import Image from "next/image";
import DashboardPage from "./components/dashboard";
import UsersPage from "./components/users";
import SettingsPage from "./components/setting";
import GalleryPage from "./components/gallery";

const menuItems = [
  { id: "dashboard", title: "Dashboard", icon: <GoHome /> },
  { id: "gallery", title: "Gallery", icon: <GoImage /> },
  { id: "users", title: "videos", icon: <GoVideo /> },
  { id: "settings", title: "setting", icon: <GoGear /> },
];

const Admin = () => {
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderSection = () => {
    switch (active) {
      case "dashboard":
        return <DashboardPage />;
      case "gallery":
        return <GalleryPage />;
      case "users":
        return <UsersPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Mobile Sidebar (Drawer style) */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          } md:hidden`}
        onClick={() => setSidebarOpen(false)}
      />
      <aside
        className={`fixed z-50 top-0 left-0 w-64 h-full bg-white shadow-md transform transition-transform p-6 space-y-6 md:relative md:translate-x-0 md:top-auto md:left-auto md:rounded-2xl md:shadow-md md:m-4 md:h-[calc(100vh-2rem)] ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center space-y-2 mb-6">
          <Image
            src="/assets/images/dokhtar.jpg"
            alt="Admin Avatar"
            width={64}
            height={64}
            className="rounded-full object-cover h-15 w-15"
          />
          <span className="text-sm font-medium text-gray-700">Nazli Darkhor</span>
        </div>

        {/* Menu */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`flex items-center w-full cursor-pointer px-4 py-2 rounded-lg transition-colors text-right ${active === item.id
                ? "bg-red-100 text-red-600"
                : "hover:bg-gray-100 text-gray-700"
                }`}
              onClick={() => {
                setActive(item.id);
                setSidebarOpen(false); // بستن منو در موبایل
              }}
            >
              <span className="mr-2 text-2xl">{item.icon}</span>
              <span className="font-medium text-sm">{item.title}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto">
          <button className="flex items-center cursor-pointer w-full px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
            <span className="mr-2 text-xl">
              <GoSignOut />
            </span>
            logout
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex-1 p-6">
        {/* Toolbar */}
        <div className="bg-white  shadow rounded-xl px-6 py-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Show menu button in mobile */}
            <button
              className="md:hidden text-gray-600 text-2xl"
              onClick={() => setSidebarOpen(true)}
            >
              <HiBars3 />
            </button>
            <h1 className="text-lg font-semibold text-gray-800">Admin Panel</h1>
          </div>
          <div className="flex items-center gap-4">
            <GoBell className="text-xl text-gray-500 hover:text-red-500 cursor-pointer" />
            <div className="text-sm text-gray-600 hidden sm:inline">Hi! Admin</div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white shadow-md rounded-2xl p-6 min-h-[400px]">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default Admin;
