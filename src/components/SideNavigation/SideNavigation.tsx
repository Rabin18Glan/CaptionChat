"use client";
import React from 'react';
import { NavigationLinks } from './components/NavigationLinks';
import  {Drawer }from  './components/Drawer';
import { useToggleDrawer } from './hooks/useToggleDrawer';

function SideNavigation() {
  const { isDrawerOpen, toggleDrawer } = useToggleDrawer();

  return (
    <>
      {/* Sidebar for Medium to Large Devices */}
      <nav className="hidden lg:flex lg:flex-col bg-gray-800 lg:h-screen">
        <h2 className="font-bold text-3xl p-5">Tools</h2>
        <NavigationLinks />
      </nav>

      {/* Drawer for Small Devices */}
      <button
        className="lg:hidden p-4 text-2xl text-gray-700 font-bold hover:underline hover:text-black"
        onClick={toggleDrawer}
      >
        Menu
      </button>
      {isDrawerOpen && <Drawer toggleDrawer={toggleDrawer} />}
    </>
  );
}

export default SideNavigation;
