'use client';
import React, { useState, useEffect } from 'react';
import CardContent from './CardContainer'; // Assuming the CardContent component is in the same directory

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

  useEffect(() => {
    fetchQuestionAndAnswers();
  }, []);

  const fetchQuestionAndAnswers = () => {
    if (allVerbs.length > 0) {
      // Shuffle the list of verbs using the Fisher-Yates shuffle algorithm.
      const shuffledVerbs = [...allVerbs].sort(() => Math.random() - 0.5);

      // Select the first 3 verbs for display
      const selectedVerbs = shuffledVerbs.slice(0, 3);
      setCorrectAnswer(selectedVerbs[0]); // Set one of the selected verbs as the currentVerb

      // Extract English translations from the selected verbs for possibleAnswers
      const pVerbs: string[] = selectedVerbs.map(verb => verb.english);
      setPossibleAnswers(pVerbs);

      // Remove verb from list to prevent recurrence.
      setAllVerbs(allVerbs.filter(verb => verb.id !== selectedVerbs[0].id));
    }
  };

  return (
    <CardContent
      correctAnswer={correctAnswer}
      possibleAnswers={possibleAnswers}
      updateQuestionAndAnswers={fetchQuestionAndAnswers} // Pass the callback function
    />
  );
};

export default InteractiveSection;
