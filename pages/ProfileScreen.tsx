
import React from 'react';

const ProfileScreen: React.FC = () => {
  return (
    <div className="p-4 h-full flex flex-col items-center justify-center text-center">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      <h1 className="text-2xl font-bold text-gray-800 mt-6">Profile & Settings</h1>
      <p className="text-gray-500 mt-2">This feature is coming soon. Manage your profile, orders, and settings here.</p>
    </div>
  );
};

export default ProfileScreen;
