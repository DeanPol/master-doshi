'use State';
import React, { useState, useEffect } from 'react';
import CircularCompletion from '@mui/material/CircularProgress';

interface CompletionBarProps {
  totalQuestions: number;
  currentQuestion: number;
}
const CompletionBar: React.FC<CompletionBarProps> = props => {
  const [completion, setCompletion] = useState<number>(0);

  useEffect(() => {
    setCompletion(
      Math.round(props.currentQuestion / props.totalQuestions) * 100,
    );
  }, [props.currentQuestion]);
  return <CircularCompletion variant='determinate' value={completion} />;
};
export default CompletionBar;
