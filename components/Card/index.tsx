import React from 'react';
import styles from './card.module.css';
import { generateCardContent } from '../../utils/cardUtils'; // Import the helper function

interface CardProps {
  cardIndex: number;
}

const Card: React.FC<CardProps> = ({ cardIndex }) => {
  const content = generateCardContent(cardIndex);

  return <button className={styles.card}>{content}</button>;
};

export default Card;
