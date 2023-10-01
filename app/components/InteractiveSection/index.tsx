'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetCounter, updateSelection } from '@/store/cardSlice';
import CardContent from '../CardContainer';
import Results from '../Results';

interface Verb {
  id: string;
  japanese: string;
  english: string;
}

interface IncomingVerbs {
  verbs: Verb[];
}
const InteractiveSection: React.FC<IncomingVerbs> = ({ verbs }) => {
  const [allVerbs, setAllVerbs] = useState<Verb[]>(verbs);
  const [correctAnswer, setCorrectAnswer] = useState<Verb>({
    id: '',
    japanese: '',
    english: '',
  });
  const [possibleAnswers, setPossibleAnswers] = useState<string[]>([]);

  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(0);

  const [nextMessage, setNextMessage] = useState<string>('');

  const [resultsScreen, setResultsScreen] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchQuestionAndAnswers();
  }, []);

  const fetchQuestionAndAnswers = () => {
    switch (allVerbs.length) {
      case 4: {
        setNextMessage('Final Question');
        break;
      }
      case 3: {
        setNextMessage('Show Results');
        break;
      }
      case 2: {
        return setResultsScreen(true);
      }
      default:
        setNextMessage('Next Question');
    }
    // Shuffle the list of verbs using the Fisher-Yates shuffle algorithm.
    const shuffledVerbs = [...allVerbs].sort(() => Math.random() - 0.5);

    // Select the first 3 verbs for display.
    const selectedVerbs = shuffledVerbs.slice(0, 3);
    const selectedIndex = Math.floor(Math.random() * 3);
    setCorrectAnswer(selectedVerbs[selectedIndex]); // Set one of the selected verbs as the currentVerb.

    // Extract English translations from the selected verbs for possibleAnswers.
    const pVerbs: string[] = selectedVerbs.map(verb => verb.english);
    setPossibleAnswers(pVerbs);

    // Remove verb from list to prevent recurrence.
    setAllVerbs(
      allVerbs.filter(verb => verb.id !== selectedVerbs[selectedIndex].id),
    );

    // Counter on times questions are fetched.
    setNumberOfQuestions(numberOfQuestions => numberOfQuestions + 1);
  };

  const handleStartOver = () => {
    // Reset counters and verb collection.
    dispatch(resetCounter());
    dispatch(updateSelection());
    setNumberOfQuestions(0);
    if (resultsScreen) {
      setResultsScreen(false);
    }
    setAllVerbs(verbs);
    fetchQuestionAndAnswers();
  };

  return (
    <>
      {!resultsScreen ? (
        <CardContent
          correctAnswer={correctAnswer}
          possibleAnswers={possibleAnswers}
          nextMessage={nextMessage}
          isResultsScreen={() => setResultsScreen(true)} // Callback to handle 'End Quiz' selection.
          updateQuestionAndAnswers={fetchQuestionAndAnswers} // Callback to handle next question.
        />
      ) : (
        <>
          <Results
            numberOfQuestions={numberOfQuestions}
            setStartOver={() => handleStartOver()}
          />
        </>
      )}
    </>
  );
};

export default InteractiveSection;
