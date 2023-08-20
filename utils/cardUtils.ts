export function generateQuestionAndAnswers() {
  const correctAnswer = Math.floor(Math.random() * 11);
  const possibleAnswers = generateRandomAnswers(correctAnswer);

  const question = `What is ${correctAnswer} ?`;
  const answers = [String(correctAnswer), ...possibleAnswers.map(String)]; // Convert numbers to strings

  return { question, answers };
}

function generateRandomAnswers(correctAnswer: number) {
  const numberOfAnswers = 4;
  const possibleAnswers = new Set<number>();

  while (possibleAnswers.size < numberOfAnswers - 1) {
    const randomAnswer = Math.floor(Math.random() * 11);
    if (randomAnswer !== correctAnswer) {
      possibleAnswers.add(randomAnswer);
    }
  }

  return Array.from(possibleAnswers);
}
