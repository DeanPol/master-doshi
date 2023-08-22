import React from 'react';
import { generateQuestionAndAnswers } from '../utils/cardUtils';
import Card from '../components/Card';
import CardList from '../components/CardList';

const Home: React.FC = () => {
  const { question, possibleAnswers } = generateQuestionAndAnswers(3);

  return (
    <div>
      <p>This is the generated Question.</p>
      <Card cardValue={question} />
      <p>And these are the possible answers.</p>
      <CardList listLength={3} cardAnswers={possibleAnswers} />
    </div>
  );
};

export default Home;
