import React from 'react';

interface NotificationProps {
  title: string;
  body: string;
}

const Notification: React.FC<NotificationProps> = ({ title, body }) => {
  return (
    <div className="mt-4 p-4 max-w-sm w-full border-b-2 border-gray-200">
      <div className="flex items-start">
        <div className="text-lg mr-2">🔔</div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-800">{title}</p>
          <p className="text-xs text-gray-600">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
