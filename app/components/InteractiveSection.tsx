'use client';
import React, { useState, useEffect } from 'react';
import CardContent from './CardContainer';
import ResultsContainer from './ResultsContainer';

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

  const [resultsScreen, setResultsScreen] = useState<boolean>(false);

  useEffect(() => {
    fetchQuestionAndAnswers();
  }, []);

  const fetchQuestionAndAnswers = () => {
    if (allVerbs.length == 2) {
      return setResultsScreen(true);
    }
    // Shuffle the list of verbs using the Fisher-Yates shuffle algorithm.
    const shuffledVerbs = [...allVerbs].sort(() => Math.random() - 0.5);

    // Select the first 3 verbs for display.
    const selectedVerbs = shuffledVerbs.slice(0, 3);
    setCorrectAnswer(selectedVerbs[0]); // Set one of the selected verbs as the currentVerb.

    // Extract English translations from the selected verbs for possibleAnswers.
    const pVerbs: string[] = selectedVerbs.map(verb => verb.english);
    setPossibleAnswers(pVerbs);

    // Remove verb from list to prevent recurrence.
    setAllVerbs(allVerbs.filter(verb => verb.id !== selectedVerbs[0].id));

    // Counter on times questions are fetched.
    setNumberOfQuestions(numberOfQuestions => numberOfQuestions + 1);
  };

  return (
    <>
      {!resultsScreen ? (
        <CardContent
          correctAnswer={correctAnswer}
          possibleAnswers={possibleAnswers}
          updateQuestionAndAnswers={fetchQuestionAndAnswers} // Pass the callback function.
        />
      ) : (
        <ResultsContainer numberOfQuestions={numberOfQuestions} />
      )}
    </>
  );
};

export default InteractiveSection;
