import React, { useState } from 'react';
import styles from './styles.module.css';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

interface CardProps {
  content: string;
  isQuestion: boolean;
  correctAnswer: string;
  onSelectAnswer: (isCorrect: boolean) => void; // Callback function for answer selection
}

const Card: React.FC<CardProps> = ({
  content,
  isQuestion,
  correctAnswer,
  onSelectAnswer,
}) => {
  const [showCheckIcon, setShowCheckIcon] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const handleClick = () => {
    if (isQuestion) {
      return; // Do not perform actions if clicked on question card
    }

    const isCorrect = content === correctAnswer;

    if (isCorrect) {
      setShowCheckIcon(true);
      setShowCloseIcon(false);
    } else {
      setShowCheckIcon(false);
      setShowCloseIcon(true);
    }

    onSelectAnswer(isCorrect);
  };

  return (
    <div
      className={`${styles.card} ${isQuestion ? styles.questionCard : ''}`}
      onClick={handleClick}
    >
      {isQuestion && <span className={styles.icon}>🔍</span>}
      {content}
      {showCheckIcon && <CheckIcon />}
      {showCloseIcon && <CloseIcon />}
    </div>
  );
};

export default Card;
