import React from 'react';
import styles from './card.module.css';

interface CardProps {
  content: string;
}

const Card: React.FC<CardProps> = ({ content }) => {
  return <button className={styles.card}>{content}</button>;
};

export default Card;
