export function generateQuestionAndAnswers(numberOfChoices: number) {
  const correctAnswer = Math.floor(Math.random() * 11);
  const possibleAnswers = generateRandomAnswers(correctAnswer, numberOfChoices);

  return { correctAnswer, possibleAnswers };
}

function generateRandomAnswers(correctAnswer: number, numberOfChoices: number) {
  const possibleAnswers = new Array<number>();
  let hasCorrect: boolean = false;

  for (let i = 0; i < numberOfChoices; i++) {
    possibleAnswers.push(Math.floor(Math.random() * 11));

    if (possibleAnswers[i] === correctAnswer) hasCorrect = true;
  }

  if (!hasCorrect) {
    possibleAnswers[Math.floor(Math.random() * numberOfChoices)] =
      correctAnswer;
  }

  return possibleAnswers;
}

export function checkAnswer(
  correctAnswer: number,
  selectedAnswer: number,
): boolean {
  return correctAnswer === selectedAnswer;
}
