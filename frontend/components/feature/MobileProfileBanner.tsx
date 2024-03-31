import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import Link from 'next/link';
import React from 'react';

interface ProfileProps {
  name: string;
  email: string;
  imageUrl: string;
}

const Profile: React.FC<ProfileProps> = ({ name, email, imageUrl }) => {
  return (
    <div className="bg-gray-200 py-12 px-6 w-full top-0 left-0 z-10">
      <div className="flex justify-start items-start space-x-4">
      {/* https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg */}
      <Avatar style={{ backgroundColor: '#111', minHeight: 80 , minWidth: 90, border: "none" }} icon={<UserOutlined />} size={90} src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"/>
        <div className=''>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm text-gray-600">{email}</p>
       <p className='mt-4 py-2 font-semibold text-blue-600'> <Link  href={'profile'}>Update Profile</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
