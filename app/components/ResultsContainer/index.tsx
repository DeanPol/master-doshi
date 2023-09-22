import React from 'react';
import type { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { Container } from '@mui/material';

interface ResultsContainerProps {
  numberOfQuestions: number;
}

const ResultsContainer: React.FC<ResultsContainerProps> = props => {
  const correctAnswerCount = useSelector(
    (state: RootState) => state.counter.correctAnswerCounter,
  );
  return (
    <Container>
      You answered correctly {correctAnswerCount} out of{' '}
      {props.numberOfQuestions} !
    </Container>
  );
};

export default ResultsContainer;
