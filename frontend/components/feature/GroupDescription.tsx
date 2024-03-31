import React from 'react';

interface GroupDescriptionProps {
  title: string;
  body: string;
}

const GroupDescription: React.FC<GroupDescriptionProps> = ({ title, body }) => {
  return (
    <div className="mt-4 p-4 max-w-sm w-full">
      <div className="flex items-start m-4">
        <div className="flex-1">
          <p className="text-lg mb-4 font-semibold text-gray-800">{title}</p>
          <p className="text-sm leading-6 text-gray-600">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default GroupDescription;
