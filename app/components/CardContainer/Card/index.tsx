import React from 'react';
import { checkAnswer } from '@/utils/cardUtils';
import { CardButton } from './styles';

interface CardContent {
  isQuestion: boolean;
  cardValue: number;
  correctAnswer: number;
  setChoiceCorrect: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const Card: React.FC<CardContent> = props => {
  const handleCardClick = () => {
    if (!props.isQuestion) {
      const isCorrect = checkAnswer(props.correctAnswer, props.cardValue);
      props.setChoiceCorrect(isCorrect);
    }
  };
  return <CardButton onClick={handleCardClick}>{props.cardValue}</CardButton>;
};

export default Card;
