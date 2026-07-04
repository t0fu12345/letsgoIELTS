import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { name: 'Practice Tests', path: '/practice-tests', icon: 'quiz' },
    { name: 'Statistics', path: '/statistic', icon: 'leaderboard' },
    { name: 'Lessons', path: '/lessons', icon: 'menu_book' },
    { name: 'Settings', path: '/settings', icon: 'settings' },
  ];

  return (
    <>
      {/* Side Navigation Drawer for Desktop */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-surface-container-low dark:bg-inverse-surface flex flex-col py-4 z-40 hidden md:flex border-r border-surface-container">
        <div className="px-6 mb-8 flex flex-col">
          <Link to="/dashboard" className="font-headline-md text-headline-md font-black text-primary hover:opacity-80 transition-opacity">letsgoIELTS</Link>
          <span className="font-label-lg text-label-lg text-on-surface-variant">IELTS Prep Master</span>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={
                  isActive
                    ? "bg-secondary-container text-on-secondary-container rounded-full mx-2 px-4 py-3 flex items-center gap-3 font-label-lg text-label-lg translate-x-1 transition-transform"
                    : "text-on-surface-variant hover:bg-surface-container-high mx-2 rounded-full px-4 py-3 flex items-center gap-3 font-label-lg text-label-lg transition-all hover:bg-surface-container-highest"
                }
              >
                <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>
                  {item.icon}
                </span>
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="mt-auto flex flex-col gap-2 border-t border-surface-container pt-4">
          <Link to="/help" className="text-on-surface-variant hover:bg-surface-container-high mx-2 rounded-full px-4 py-3 flex items-center gap-3 font-label-lg text-label-lg transition-all">
            <span className="material-symbols-outlined">help</span>
            Help Center
          </Link>
          <Link 
            to="/login" 
            onClick={() => {
              localStorage.removeItem('letsgoIELTS_user');
            }}
            className="text-on-surface-variant hover:bg-surface-container-high mx-2 rounded-full px-4 py-3 flex items-center gap-3 font-label-lg text-label-lg transition-all"
          >
            <span className="material-symbols-outlined">logout</span>
            Logout
          </Link>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full bg-surface-container-low shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-50 flex md:hidden justify-around py-3">
        {navItems.slice(0, 3).map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.name} to={item.path} className={`flex flex-col items-center ${isActive ? 'text-primary' : 'text-on-surface-variant'}`}>
              <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>
                {item.icon}
              </span>
              <span className="text-[10px] font-medium mt-1">{item.name === 'Dashboard' ? 'Home' : item.name.split(' ')[0]}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Sidebar;
