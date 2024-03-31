import Link from 'next/link';
import React from 'react';

interface UserGroupProps {
  title: string;
  numberOfParticipants: string
  body: string;
}

const UserGroup: React.FC<UserGroupProps> = ({ title, body, numberOfParticipants }) => {
  return (
    <Link href={`/dashboard/${title}`} className="mt-4 p-4 max-w-sm w-full bg-white border-2 border-gray-100 sm:mr-6">
      <div className="flex items-start">
        <div className="text-lg mr-2">🚀</div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-800">{title}</p>
          <p className="text-xs text-gray-600 my-3">{body}</p>
          <p className="text-xs text-gray-600">{numberOfParticipants} participants</p>
        </div>
      </div>
    </Link>
  );
};

export default UserGroup;
