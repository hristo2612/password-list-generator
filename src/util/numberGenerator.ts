export const numberIterator = (currentNumber: string) => {
  const nextNumber: string[] = [];
  const splitNumber = currentNumber.split('');
  let alreadyAdded = false;
  for (let i = splitNumber.length - 1; i > -1; i--) {
    const currentInt = parseInt(splitNumber[i], 10);
    if (!alreadyAdded) {
      if (currentInt < 9) {
        nextNumber.unshift((currentInt + 1).toString());
        alreadyAdded = true;
      } else {
        nextNumber.unshift('0');
      }
    } else {
      nextNumber.unshift(currentInt.toString());
    }
  }

  return nextNumber.join('');
};
