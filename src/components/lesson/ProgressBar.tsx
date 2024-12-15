import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  timeLeft?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, timeLeft }) => {
  const progress = (current / total) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          {current} / {total} Questions
        </span>
        {timeLeft !== undefined && (
          <span className="text-sm font-medium text-gray-700">
            Time Left: {timeLeft}s
          </span>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;