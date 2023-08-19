import React from 'react';
import Card from '../Card';

interface CardListProps {
  numberOfCards: number;
}

const CardList: React.FC<CardListProps> = ({ numberOfCards }) => {
  return (
    <div>
      {Array.from({ length: numberOfCards }, (_, index) => (
        <Card key={index} cardIndex={index} />
      ))}
    </div>
  );
};

export default CardList;
