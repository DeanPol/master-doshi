'use client';
import React from 'react';
import type { RootState } from '@/store/store';
import { checkAnswer } from '@/utils/cardUtils';
import { useSelector, useDispatch } from 'react-redux';
import { increment, updateSelection } from '@/store/cardSlice';
import { ListItem, Typography } from '@mui/material';

import { CardButton } from './styles';

interface CardContent {
  isQuestion: boolean;
  cardValue: string;
  correctAnswer: string;
  setChoiceCorrect?: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const Card: React.FC<CardContent> = props => {
  const hasSelected = useSelector(
    (state: RootState) => state.counter.hasSelected,
  );
  const dispatch = useDispatch();
  const handleCardClick = () => {
    if (!props.isQuestion) {
      dispatch(updateSelection());
      const isCorrect = checkAnswer(props.correctAnswer, props.cardValue);
      if (isCorrect) {
        dispatch(increment());
      }
      if (props.setChoiceCorrect) {
        props.setChoiceCorrect(isCorrect);
      }
    }
  };
  return (
    <>
      {!props.isQuestion ? (
        <ListItem>
          <CardButton onClick={handleCardClick} disabled={hasSelected}>
            {props.cardValue}
          </CardButton>
        </ListItem>
      ) : (
        <Typography>{props.cardValue}</Typography>
      )}
    </>
  );
};

export default Card;
