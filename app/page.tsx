import React from 'react';
import { generateQuestionAndAnswers } from '@/utils/cardUtils';
import InteractiveSection from '../components/InteractiveSection';

const Home: React.FC = () => {
  const { correctAnswer, possibleAnswers } = generateQuestionAndAnswers(3);
  return (
    <div>
      <InteractiveSection
        correctAnswer={correctAnswer}
        possibleAnswers={possibleAnswers}
      />
    </div>
  );
};

export default Home;
