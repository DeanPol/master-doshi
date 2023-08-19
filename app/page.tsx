import React from 'react';
import CardList from '../components/CardList';

const cards = [
  'Card 1: Information to select from other cards',
  'Card 2',
  'Card 3',
  'Card 4',
];

const Home: React.FC = () => {
  return (
    <div>
      <h1>Card Application</h1>
      <CardList cards={cards} />
    </div>
  );
};

export default Home;
