
import React from 'react';
// FIX: Changed `import type` to a value import for the 'Page' enum
// because it is used for value comparisons later in the component.
import { Page } from '../types';
import { NAV_ITEMS } from '../constants';

interface BottomNavProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  cartItemCount: number;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentPage, onNavigate, cartItemCount }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] flex justify-around p-2 z-10">
      {NAV_ITEMS.map((item) => {
        const isActive = currentPage === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center justify-center w-1/4 transition-colors duration-200 ${isActive ? 'text-teal-600' : 'text-gray-500 hover:text-teal-500'}`}
          >
            <div className="relative">
              {item.icon(isActive)}
              {item.id === Page.Cart && cartItemCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
            <span className={`text-xs mt-1 font-medium ${isActive ? 'font-bold' : ''}`}>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;