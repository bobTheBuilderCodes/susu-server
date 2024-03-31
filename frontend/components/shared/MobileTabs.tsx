"use client"

import Link from 'next/link';
import React, { useState } from 'react';

const NavigationTabs= () => {
  const [selectedTab, setSelectedTab] = useState('home');
  const tabs = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'search', icon: '🔍', label: 'Search' },
    { id: 'notifications', icon: '🔔', label: 'Notifications' },
    { id: 'profile', icon: '👤', label: 'Profile' }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white text-gray-800 shadow-lg border-t-2 border-gray-100">
      <div className="flex justify-around">
        {tabs.map(tab => (
          <Link href={`/dashboard/${tab.id}`}
            key={tab.id}
            className={`flex-1 p-2 ${selectedTab === tab.id ? 'bg-gray-200 font-semibold' : 'bg-white'}`}
            onClick={() => setSelectedTab(tab.id)}
          >
            <div className="text-center">
              <div>{tab.icon}</div>
              <div className="text-sm">{tab.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavigationTabs;
