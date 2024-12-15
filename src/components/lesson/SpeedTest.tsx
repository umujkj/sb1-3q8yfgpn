import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

interface SpeedTestProps {
  question: string;
  correctAnswer: string;
  timeLimit: number;
  onComplete: (isCorrect: boolean, timeSpent: number) => void;
}

const SpeedTest: React.FC<SpeedTestProps> = ({
  question,
  correctAnswer,
  timeLimit,
  onComplete,
}) => {
  const [answer, setAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      handleSubmit();
    }
  }, [timeLeft]);

  const handleSubmit = () => {
    const isCorrect = answer.toLowerCase() === correctAnswer.toLowerCase();
    const timeSpent = timeLimit - timeLeft;
    onComplete(isCorrect, timeSpent);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Speed Challenge</h3>
        <div className="flex items-center text-indigo-600">
          <Timer className="w-5 h-5 mr-2" />
          <span className="font-semibold">{timeLeft}s</span>
        </div>
      </div>
      <p className="mb-4 text-gray-700">{question}</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Type your answer..."
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSubmit();
          }
        }}
      />
    </div>
  );
};

export default SpeedTest;