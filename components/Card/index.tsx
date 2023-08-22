import React from 'react';
import { CardButton } from './styles';

interface CardContent {
  cardValue: number;
}

const Card: React.FC<CardContent> = props => {
  return <CardButton>{props.cardValue}</CardButton>;
};

export default Card;
