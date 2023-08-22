import React from 'react';
import Card from '../Card';

interface ListContent {
  listLength: number;
  cardAnswers: number[];
}

const CardList: React.FC<ListContent> = props => {
  return (
    <div>
      {Array.from({ length: props.listLength }, (_, index) => (
        <Card key={index} cardValue={props.cardAnswers[index]} />
      ))}
    </div>
  );
};

export default CardList;
