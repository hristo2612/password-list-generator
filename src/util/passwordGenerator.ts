import { numberIterator } from './numberGenerator';
export const passwordGenerator = (names, lowercase, firstNumber, finalNumber) => {
  const passwords = [];
  let currentNumber = firstNumber;
  names.forEach((name) => {
    let current;
    while (currentNumber !== finalNumber) {
      current = (lowercase ? name.toLowerCase() : name);
      if ((current + currentNumber).length >= 8) {
        passwords.push(current + currentNumber);
      }
      currentNumber = numberIterator(currentNumber);
    }
    current = (lowercase ? name.toLowerCase() : name);
    if ((current + finalNumber).length >= 8) {
      passwords.push(current + finalNumber);
    }
    currentNumber = firstNumber;
  });

  return passwords.join('\n');
};
