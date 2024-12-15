import React from 'react';
import { Check, X } from 'lucide-react';

interface LessonCardProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (isCorrect: boolean) => void;
}

const LessonCard: React.FC<LessonCardProps> = ({
  question,
  options,
  correctAnswer,
  onAnswer,
}) => {
  const handleOptionClick = (option: string) => {
    const isCorrect = option === correctAnswer;
    onAnswer(isCorrect);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">{question}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
          >
            <span className="text-left">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default LessonCard;