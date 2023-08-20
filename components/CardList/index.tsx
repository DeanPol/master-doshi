import React from 'react';
import Card from '../Card';
import styles from './styles.module.css'; // Import styles if needed

interface CardListProps {
  cards: string[];
  correctAnswer: string; // Pass the correct answer to CardList
  onAnswerSelected: (isCorrect: boolean) => void; // Callback function for answer selection
}

const CardList: React.FC<CardListProps> = ({
  cards,
  correctAnswer,
  onAnswerSelected,
}) => {
  return (
    <div>
      {cards.map((content, index) => (
        <Card
          key={index}
          content={content}
          isQuestion={index === 0}
          correctAnswer={correctAnswer}
          onSelectAnswer={isCorrect => onAnswerSelected(isCorrect)}
        />
      ))}
    </div>
  );
};

export default CardList;
