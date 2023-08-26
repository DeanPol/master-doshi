'use client';
import React, { useState } from 'react';
import Card from '../Card';

interface InteractiveContent {
  correctAnswer: number;
  possibleAnswers: number[];
}

const InteractiveSection: React.FC<InteractiveContent> = props => {
  const [isChoiceCorrect, setChoiceCorrect] = useState<boolean>(false);

  return (
    <>
      <p>This is the question.</p>
      <Card
        isQuestion={true}
        cardValue={props.correctAnswer}
        correctAnswer={props.correctAnswer}
        setChoiceCorrect={setChoiceCorrect}
      />
      <p>And these are the possible answers.</p>
      {Array.from({ length: 3 }, (_, index) => (
        <Card
          key={index}
          isQuestion={false}
          correctAnswer={props.correctAnswer}
          cardValue={props.possibleAnswers[index]}
          setChoiceCorrect={setChoiceCorrect}
        />
      ))}
      {isChoiceCorrect && <p>Correct!</p>}
    </>
  );
};

export default InteractiveSection;
