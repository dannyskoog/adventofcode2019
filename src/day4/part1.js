const convertNumberToDigitArray = (number) => {
  return Math.abs(number).toString().split('').map(val => +val);
}

const numberHasSixDigits = (number) => {
  return convertNumberToDigitArray(number).length === 6;
};

const numberHasTwoAdjacentDigits = (number) => {
  return convertNumberToDigitArray(number).some((num, index, arr) => arr[index + 1] === num);
};

const numberIsEqualOrBiggerFromLeftToRight = (number) => {
  return convertNumberToDigitArray(number).every((num, index, arr) => {
    const isLastItem = index === arr.length - 1;
    return isLastItem || arr[index + 1] >= num;
  });
};

const numberMeetsPasswordV1Requirements = (number) => {
  return numberHasSixDigits(number)
    && numberHasTwoAdjacentDigits(number)
    && numberIsEqualOrBiggerFromLeftToRight(number);
};

const getNumberOfPasswordsMeetingV1Requirements = (rangeStart, rangeEnd) => {
  let numberOfValidPasswords = 0;

  for (let number = rangeStart; number <= rangeEnd; number++) {
    if (numberMeetsPasswordV1Requirements(number)) {
      numberOfValidPasswords++;
    }
  }

  return numberOfValidPasswords;
};

module.exports = {
  convertNumberToDigitArray,
  numberHasSixDigits,
  numberHasTwoAdjacentDigits,
  numberIsEqualOrBiggerFromLeftToRight,
  numberMeetsPasswordV1Requirements,
  getNumberOfPasswordsMeetingV1Requirements
};