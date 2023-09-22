'use State';
import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

interface ProgressBarProps {
  totalQuestions: number;
  currentQuestion: number;
}
const ProgressBar: React.FC<ProgressBarProps> = props => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress(Math.round(props.currentQuestion / props.totalQuestions) * 100);
  }, [props.currentQuestion]);
  return (
    <>
      <CircularProgress variant='determinate' value={progress} />
    </>
  );
};
export default ProgressBar;
