'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { generateQuestionAndAnswers } from '@/utils/cardUtils';
import CardContent from './CardContainer'; // Assuming the CardContent component is in the same directory

const InteractiveSection: React.FC = () => {
  const [correctAnswer, setCorrectAnswer] = useState<number>(0); // Initialize with an initial value
  const [possibleAnswers, setPossibleAnswers] = useState<number[]>([]);

  useEffect(() => {
    updateQuestionAndAnswers();
  }, []);

  // Function to update correctAnswer and possibleAnswers
  const updateQuestionAndAnswers = () => {
    const {
      correctAnswer: newCorrectAnswer,
      possibleAnswers: newPossibleAnswers,
    } = generateQuestionAndAnswers(3);
    setCorrectAnswer(newCorrectAnswer);
    setPossibleAnswers(newPossibleAnswers);
  };

  return (
    <>
      <CardContent
        correctAnswer={correctAnswer}
        possibleAnswers={possibleAnswers}
        updateQuestionAndAnswers={updateQuestionAndAnswers} // Pass the callback function
      />
      <Button onClick={updateQuestionAndAnswers}>Regenerate Values</Button>
    </>
  );
};

export default InteractiveSection;
