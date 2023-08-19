import React from 'react';
import CardList from '../components/CardList';

const Home: React.FC = () => {
  const numberOfCards = 4; // Number of cards you want to display

  return (
    <div>
      <h1>Card Application</h1>
      <CardList numberOfCards={numberOfCards} />
    </div>
  );
};

export default Home;
