// utils/cardUtils.js

export function generateCardContent(cardIndex) {
  const baseContent = `Card ${cardIndex + 1}:`;

  // Perform calculations or generate content based on the card index
  // For example:
  const calculatedContent = `Calculated content for card ${cardIndex + 1}`;

  return `${baseContent} ${calculatedContent}`;
}
