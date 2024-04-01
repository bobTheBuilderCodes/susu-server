import React from 'react';
import {RightOutlined} from '@ant-design/icons'
import Link from 'next/link';
interface ProfileAccordionProps {
  title: string;
  body: string;
  slug: string
}

const ProfileAccordion: React.FC<ProfileAccordionProps> = ({ title, body, slug }) => {
  return (
    <Link href={slug} className="mt-4 p-4 max-w-sm w-full border-b-2 border-gray-200">
      <div className="flex justify-between items-center min-w-full">
        <div className="flex-1 mr-auto">
          <p className="text-sm font-semibold text-gray-800">{title}</p>
          <p className="text-xs text-gray-600">{body}</p>
        </div>
        <div className="text-lg mr-2"><RightOutlined /></div>
      </div>
    </Link>
  );
};

export default ProfileAccordion;
