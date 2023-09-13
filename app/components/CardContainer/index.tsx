'use client';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import Card from './Card';

import { CardContainer, ContainerText } from './styles';

interface ContainerContent {
  correctAnswer: number;
  possibleAnswers: number[];
  updateQuestionAndAnswers: () => void; // Define the prop for the callback function
}

const CardContent: React.FC<ContainerContent> = props => {
  const [isChoiceCorrect, setChoiceCorrect] = useState<boolean | null>(null);

  const handleNextQuestion = () => {
    setChoiceCorrect(null);
    props.updateQuestionAndAnswers(); // Call the callback function to regenerate values
  };

  return (
    <CardContainer maxWidth='sm'>
      <ContainerText>This is the question.</ContainerText>
      <Card
        isQuestion={true}
        cardValue={props.correctAnswer}
        correctAnswer={props.correctAnswer}
        setChoiceCorrect={setChoiceCorrect}
      />
      <ContainerText>And these are the possible answers.</ContainerText>
      {Array.from({ length: props.possibleAnswers.length }, (_, index) => (
        <Card
          key={index}
          isQuestion={false}
          correctAnswer={props.correctAnswer}
          cardValue={props.possibleAnswers[index]}
          setChoiceCorrect={setChoiceCorrect}
        />
      ))}
      {isChoiceCorrect !== null && (
        <>
          <p>{isChoiceCorrect ? '正しい!' : '違う'}</p>
          <Button onClick={handleNextQuestion}>Next question</Button>
        </>
      )}
    </CardContainer>
  );
};

export default CardContent;
