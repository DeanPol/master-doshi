'use client';
import React, { useState } from 'react';
import { Button, List, Divider } from '@mui/material';
import Card from './Card';

import { CardContainer, ContainerText } from './styles';

interface ContainerContent {
  correctAnswer: {
    id: string;
    japanese: string;
    english: string;
  };
  possibleAnswers: string[];
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
      <ContainerText>
        Select the correct translation for this verb :
      </ContainerText>
      <List component='nav' aria-label='mailbox folders'>
        <Card
          isQuestion={true}
          cardValue={props.correctAnswer.japanese}
          correctAnswer={props.correctAnswer.english}
          setChoiceCorrect={setChoiceCorrect}
        />
        <Divider />
        {Array.from({ length: props.possibleAnswers.length }, (_, index) => (
          <>
            <Card
              key={index}
              isQuestion={false}
              correctAnswer={props.correctAnswer.english}
              cardValue={props.possibleAnswers[index]}
              setChoiceCorrect={setChoiceCorrect}
            />
            <Divider />
          </>
        ))}
      </List>
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
