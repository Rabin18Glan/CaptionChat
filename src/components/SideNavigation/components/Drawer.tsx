import { NAVS } from '@/const/navs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


interface DrawerProps {
  toggleDrawer: () => void;
}

export const Drawer: React.FC<DrawerProps> = ({ toggleDrawer }) => {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 lg:hidden">
      <div className="fixed right-0 w-64 bg-white p-4 h-full">
        <h2 className="font-bold mb-4">Navigation</h2>
        <ul>
          {NAVS.map((nav) => (
            <li key={nav.url} className="mb-2">
              <Link
                href={nav.url}
                className={`block p-2 hover:bg-gray-300 ${pathname === nav.url ? 'bg-gray-800 text-white' : ''}`}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={toggleDrawer} className="mt-4 text-red-500">
          Close
        </button>
      </div>
    </div>
  );
};
