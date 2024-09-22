"use client"
import { useState } from 'react';

export const useToggleDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return {
    isDrawerOpen,
    toggleDrawer,
  };
};
