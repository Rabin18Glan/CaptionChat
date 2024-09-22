
import SideNavigation from '@/components/SideNavigation/SideNavigation';
import React from 'react';


const Root = ({ children }:{children:React.ReactNode}) => {


  return (
    <div className="grid grid-cols-4 min-h-screen bg-gray-100">
<div className=' lg:col-span-1'><SideNavigation /></div>

      {/* Main Content Area */}
      <main className="col-span-4 lg:col-span-3">
        {children}
      </main>
    </div>
  );
};

export default Root;
