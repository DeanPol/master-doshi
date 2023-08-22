import React from 'react';
import { generateMessageOnClick } from '@/utils/cardUtils';
import { CardButton } from './styles';

interface CardContent {
  cardValue: number;
}

const Card: React.FC<CardContent> = props => {
  return (
    <CardButton onClick={generateMessageOnClick}>{props.cardValue}</CardButton>
  );
};

export default Card;
