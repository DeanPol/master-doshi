'use client';
import React from 'react';
import type { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

import { Box, LinearProgress, Typography } from '@mui/material';

import { ResultsContainer } from './styles.js';

interface ResultsProps {
  numberOfQuestions: number;
}

const Results: React.FC<ResultsProps> = props => {
  const correctAnswerCount = useSelector(
    (state: RootState) => state.counter.correctAnswerCounter,
  );
  const resultsVal: number =
    (correctAnswerCount / props.numberOfQuestions) * 100;
  let resultsMessage: string = '';

  if (resultsVal == 100) {
    resultsMessage = 'Perfect Score!';
  } else if (resultsVal > 75) {
    resultsMessage = 'Well Done!';
  } else if (resultsVal > 50) {
    resultsMessage = 'Okay!';
  } else {
    resultsMessage = 'Keep practising!';
  }

  return (
    <>
      <ResultsContainer maxWidth='sm'>
        <Typography variant='body2'>
          You answered correctly {correctAnswerCount} out of{' '}
          {props.numberOfQuestions} !
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant='determinate' value={resultsVal} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant='body2' color='text.secondary'>
              {resultsVal}%
            </Typography>
          </Box>
        </Box>
        <Typography>{resultsMessage}</Typography>
      </ResultsContainer>
    </>
  );
};

export default Results;
