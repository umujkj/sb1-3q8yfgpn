import React, { useState } from 'react';
import LessonCard from '../../components/lesson/LessonCard';
import ProgressBar from '../../components/lesson/ProgressBar';
import SpeedTest from '../../components/lesson/SpeedTest';
import ResultCard from '../../components/lesson/ResultCard';
import { useNavigate } from 'react-router-dom';

const marketingQuestions = [
  {
    question: "What is the primary purpose of market segmentation?",
    options: [
      "To divide customers into distinct groups with similar needs",
      "To increase product prices",
      "To reduce marketing costs",
      "To eliminate competition"
    ],
    correctAnswer: "To divide customers into distinct groups with similar needs"
  },
  {
    question: "Which of these is a key component of the marketing mix?",
    options: [
      "Place",
      "Performance",
      "Personality",
      "Persistence"
    ],
    correctAnswer: "Place"
  },
  {
    question: "What does AIDA stand for in marketing?",
    options: [
      "Attention, Interest, Desire, Action",
      "Analysis, Implementation, Direction, Activation",
      "Awareness, Influence, Decision, Acquisition",
      "Approach, Insight, Development, Achievement"
    ],
    correctAnswer: "Attention, Interest, Desire, Action"
  }
];

const speedTestQuestion = {
  question: "Name the marketing strategy that focuses on creating and distributing valuable content to attract a target audience.",
  correctAnswer: "Content Marketing",
  timeLimit: 30
};

const MarketingLesson: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showSpeedTest, setShowSpeedTest] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [averageTime, setAverageTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }
    
    if (currentQuestion < marketingQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowSpeedTest(true);
    }
  };

  const handleSpeedTestComplete = (isCorrect: boolean, timeSpent: number) => {
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }
    setTotalTime((prev) => prev + timeSpent);
    setAverageTime(Math.round(totalTime / (marketingQuestions.length + 1)));
    setShowResults(true);
  };

  const calculateStars = () => {
    const percentage = (correctAnswers / (marketingQuestions.length + 1)) * 100;
    if (percentage >= 90) return 3;
    if (percentage >= 70) return 2;
    return 1;
  };

  if (showResults) {
    return (
      <ResultCard
        correctAnswers={correctAnswers}
        totalQuestions={marketingQuestions.length + 1}
        averageTime={averageTime}
        stars={calculateStars()}
        onContinue={() => navigate('/dashboard')}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ProgressBar
        current={currentQuestion + 1}
        total={marketingQuestions.length + 1}
      />
      
      {!showSpeedTest ? (
        <LessonCard
          {...marketingQuestions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      ) : (
        <SpeedTest
          {...speedTestQuestion}
          onComplete={handleSpeedTestComplete}
        />
      )}
    </div>
  );
};

export default MarketingLesson;