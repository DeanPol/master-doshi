'use client';

import React, { useState } from 'react';
import CardList from '../components/CardList';
import { generateQuestionAndAnswers } from '../utils/cardUtils';

const Home: React.FC = () => {
  const { question, answers } = generateQuestionAndAnswers();

  const cards = [question, ...answers];
  const correctAnswer = answers[0];

  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState<
    boolean | undefined
  >(undefined);

  const handleAnswerSelected = (isCorrect: boolean) => {
    setIsCorrectAnswerSelected(isCorrect);
  };

  return (
    <div>
      <h1>Card Application</h1>
      <CardList
        cards={cards}
        correctAnswer={correctAnswer}
        onAnswerSelected={handleAnswerSelected}
      />
      {isCorrectAnswerSelected !== undefined && (
        <p>{isCorrectAnswerSelected ? 'Correct!' : 'Incorrect!'}</p>
      )}
    </div>
  );
};

export default Home;
