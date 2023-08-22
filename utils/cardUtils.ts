export function generateQuestionAndAnswers(numberOfChoices: number) {
  const question = Math.floor(Math.random() * 11);
  const possibleAnswers = generateRandomAnswers(question, numberOfChoices);

  return { question, possibleAnswers };
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

export function generateQuestion() {
  return Math.floor(Math.random() * 11);
}
