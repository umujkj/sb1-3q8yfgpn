import React from 'react';
import { Trophy, Clock, Star } from 'lucide-react';

interface ResultCardProps {
  correctAnswers: number;
  totalQuestions: number;
  averageTime: number;
  stars: number;
  onContinue: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({
  correctAnswers,
  totalQuestions,
  averageTime,
  stars,
  onContinue,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
      <div className="mb-6">
        <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Lesson Complete!</h2>
        <p className="text-gray-600">Great job on completing the marketing lesson</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="font-semibold text-xl text-gray-800">
            {correctAnswers}/{totalQuestions}
          </div>
          <div className="text-sm text-gray-600">Correct Answers</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="font-semibold text-xl text-gray-800">
            {averageTime}s
          </div>
          <div className="text-sm text-gray-600">Average Time</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < stars ? 'text-yellow-500 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="text-sm text-gray-600">Performance</div>
        </div>
      </div>

      <button
        onClick={onContinue}
        className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
      >
        Continue
      </button>
    </div>
  );
};

export default ResultCard;