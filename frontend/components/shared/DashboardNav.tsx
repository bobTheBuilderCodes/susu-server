"use client"

import React from 'react';
import { Avatar, Popover } from 'antd';
import { UserOutlined, NotificationOutlined , BellOutlined} from '@ant-design/icons';
import Link from 'next/link';

const DashboardNav = () => {

    const content = (
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      );

      const notifications = (
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      )

  return (
    <div className="hidden md:flex justify-between items-center bg-white border-b-2 border-gray-100 p-4 mx-6">
      <div className="logo">
       <h1 className='font-black text-xl'>LOGO</h1>
      </div>
      <div className="search">
        <input placeholder='search dashboard' className='border-2 rounded-lg border-gray-100 py-3 px-12 w-96' />
      </div>
      <div className="actions space-x-4">
        
      <Popover placement="bottomRight" title={"My Notifications"} content={notifications}>
          <Avatar style={{ backgroundColor: '#111' }} icon={<BellOutlined />} />
        </Popover>
       
        <Popover placement="bottomRight" title={"My Profile"} content={content}>
          <Avatar style={{ backgroundColor: '#111' }} icon={<UserOutlined />} />
        </Popover>
        
      </div>
    </div>
  );
};

export default DashboardNav;
