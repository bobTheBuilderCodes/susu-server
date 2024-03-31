import React from 'react';

interface IncompleteInfoBanner {
  body: string;
}

const IncompleteProfileBanner: React.FC<IncompleteInfoBanner> = ({ body }) => {
  return (
    <div className="p-4 w-full text-yellow-900 bg-yellow-100">
      <div className="flex items-start">
        <div className="text-lg mr-2">🔔</div>
        <div className="flex-1">
          <p className="text-xs text-gray-600">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default IncompleteProfileBanner;
