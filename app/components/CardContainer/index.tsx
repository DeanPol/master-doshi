'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSelection } from '@/store/cardSlice';
import { Button, List, Divider, Typography } from '@mui/material';
import Card from './Card';

import { CardContainer, ChoiceContainer } from './styles';

interface ContainerContent {
  correctAnswer: {
    id: string;
    japanese: string;
    english: string;
  };
  possibleAnswers: string[];
  nextMessage: string;
  isResultsScreen: () => void;
  updateQuestionAndAnswers: () => void; // Define the prop for the callback function
}

const CardContent: React.FC<ContainerContent> = props => {
  const [isChoiceCorrect, setChoiceCorrect] = useState<boolean | null>(null);
  const dispatch = useDispatch();

  const handleNextQuestion = () => {
    dispatch(updateSelection());
    setChoiceCorrect(null);

    props.updateQuestionAndAnswers(); // Call the callback function to regenerate values
  };

  return (
    <CardContainer maxWidth='sm'>
      <Typography>Select the correct translation for this verb :</Typography>
      <List component='nav'>
        <Card
          isQuestion={true}
          cardValue={props.correctAnswer.japanese}
          correctAnswer={props.correctAnswer.english}
        />
        <Divider />
        {props.possibleAnswers.map((answer, index) => (
          <React.Fragment key={index}>
            <Card
              key={index}
              isQuestion={false}
              correctAnswer={props.correctAnswer.english}
              cardValue={answer}
              setChoiceCorrect={setChoiceCorrect}
            />
            <Divider />
          </React.Fragment>
        ))}
      </List>
      {isChoiceCorrect !== null && (
        <>
          <p>{isChoiceCorrect ? '正しい!' : '違う!'}</p>
          <ChoiceContainer>
            <Button onClick={() => props.isResultsScreen()}>End Quiz</Button>
            <Button onClick={handleNextQuestion}>{props.nextMessage}</Button>
          </ChoiceContainer>
        </>
      )}
    </CardContainer>
  );
};

export default CardContent;
