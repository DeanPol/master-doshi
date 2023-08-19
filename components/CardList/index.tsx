import React from 'react';
import Card from '../Card';

interface CardListProps {
  cards: string[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div>
      {cards.map((content, index) => (
        <Card key={index} content={content} />
      ))}
    </div>
  );
};

export default CardList;
