import { NAVS } from '@/const/navs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';



export const NavigationLinks: React.FC = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <ul>
      {NAVS.map((nav, index) => (
        <li key={index}>
          <Link
            href={nav.url}
            className={`block p-6 hover:bg-gray-300 ${pathname === nav.url ? 'bg-gray-200' : ''}`}
          >
            {nav.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
