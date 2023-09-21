import React from 'react';
import { checkAnswer } from '@/utils/cardUtils';
import { useDispatch } from 'react-redux';
import { increment } from '@/store/slice';
import { ListItem, ListItemButton, Typography } from '@mui/material';

interface CardContent {
  isQuestion: boolean;
  cardValue: string;
  correctAnswer: string;
  setChoiceCorrect: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const Card: React.FC<CardContent> = props => {
  const dispatch = useDispatch();
  const handleCardClick = () => {
    if (!props.isQuestion) {
      const isCorrect = checkAnswer(props.correctAnswer, props.cardValue);
      if (isCorrect) {
        dispatch(increment());
      }
      props.setChoiceCorrect(isCorrect);
    }
  };
  return (
    <>
      {!props.isQuestion ? (
        <ListItem>
          <ListItemButton onClick={handleCardClick}>
            {props.cardValue}
          </ListItemButton>
        </ListItem>
      ) : (
        <Typography>{props.cardValue}</Typography>
      )}
    </>
  );
};

export default Card;
