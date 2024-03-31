"use client"

import React from 'react';
import Input from '../ui/Input';

const DashboardNav = () => {
  return (
    <div className="hidden md:flex justify-between items-center bg-white border-b-2 border-gray-100 p-4 mx-6">
      <div className="logo">
       <h1 className='font-black text-xl'>LOGO</h1>
      </div>
      <div className="search">
        <input placeholder='search dashboard' className='border-2 rounded-lg border-gray-100 py-3 px-12 w-96' />
      </div>
      <div className="actions space-x-4">
        <a href="#" className="text-black">Link 1</a>
        <a href="#" className="text-black">Link 2</a>
        <a href="#" className="text-black">Link 3</a>
      </div>
    </div>
  );
};

export default DashboardNav;
