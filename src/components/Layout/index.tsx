import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header';
interface LayoutProps {
  children: React.ReactNode;
  isTopLevelRoute?: boolean;
  headerTitle?: string;
}
function Layout({
  children,
  isTopLevelRoute = false,
  headerTitle,
}: LayoutProps) {
  return (
    <div className="relative min-h-[100vh] w-[100vw] ">
      <Header isTopLevelRoute={isTopLevelRoute} title={headerTitle} />
      <div className="">{children}</div>
      {isTopLevelRoute && (
        <div className="">
          <Navbar />
        </div>
      )}
    </div>
  );
}

export default Layout;
