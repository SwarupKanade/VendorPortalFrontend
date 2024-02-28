import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

export default function ProjectHeadDashboard() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const menuItems = [
    {
      text: "Dashboard",
      icon: "ri-home-2-line",
      link: "dashboard",
    },
    {
      text: "Users",
      icon: "bx bx-user",
      link: "#",
      subItems: [{ text: "Assigned Project ", link: "assigned-project " }],
    },
  ];

  const handleMenuVisible = () => {
    setMenuVisible(!isMenuVisible);
  };
  return (
    <>
      <Sidebar
        isMenuVisible={isMenuVisible}
        handleMenuVisible={handleMenuVisible}
        menuItems={menuItems}
      />
      <main class="w-full md:w-[calc(100%-256px)] sm:ml-0 md:ml-64 bg-gray-200 min-h-screen transition-all main">
        <Navbar handleMenuVisible={handleMenuVisible} />
        <div class="p-6">
          <Outlet />
        </div>
      </main>
    </>
  );
}
