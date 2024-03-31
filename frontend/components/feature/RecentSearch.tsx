import React from 'react';
import {CloseCircleFilled} from '@ant-design/icons'
interface RecentSearchProps {
  title: string;
}

const RecentSearch: React.FC<RecentSearchProps> = ({ title }) => {
  return (
    <div className="mt-4 p-4 max-w-sm w-full border-b-2 border-gray-200">
      <div className="flex items-start">
        <div className="flex-1">
          <p className="text-md font-medium text-gray-800">{title}</p>
        </div>
        <div className="text-lg mr-2 text-gray-400"><CloseCircleFilled /></div>
      </div>
    </div>
  );
};

export default RecentSearch;
