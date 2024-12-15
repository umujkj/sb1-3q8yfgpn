import React from 'react';
import { Trophy, Share2 } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  description: string;
  date: string;
  level: string;
  onShare: () => void;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  description,
  date,
  level,
  onShare,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <Trophy className="h-6 w-6 text-yellow-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
        <button
          onClick={onShare}
          className="text-indigo-600 hover:text-indigo-700 flex items-center text-sm"
        >
          <Share2 className="h-4 w-4 mr-1" />
          Share
        </button>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-gray-500">{date}</span>
        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
          {level}
        </span>
      </div>
    </div>
  );
};

export default AchievementCard;