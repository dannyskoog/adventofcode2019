const { convertNumberToDigitArray, numberHasSixDigits, numberIsEqualOrBiggerFromLeftToRight } = require('./part1');

const numberHasTwoAdjacentsNotPartOfABiggerGroup = (number) => {
  const digitArr = convertNumberToDigitArray(number);

  const _digiArrHasTwoAdjacentsNotPartOfABiggerGroup = function (digits, pointer = 0) {
    if (pointer === digits.length) {
      return false;
    }

    let numberOfAdjacents = 0;
  
    for (let i = pointer + 1; i < digits.length; i++) {
      if (digits[pointer] !== digits[i]) {
        break;
      }

      numberOfAdjacents += numberOfAdjacents ? 1 : 2;
    }

    if (numberOfAdjacents === 2) {
      return true;
    }

    const newPointer = numberOfAdjacents 
      ? pointer + numberOfAdjacents 
      : pointer + 1;

    return _digiArrHasTwoAdjacentsNotPartOfABiggerGroup(digits, newPointer);  
  };

  return _digiArrHasTwoAdjacentsNotPartOfABiggerGroup(digitArr);
};

const numberMeetsPasswordV2Requirements = (number) => {
  return numberHasSixDigits(number)
    && numberHasTwoAdjacentsNotPartOfABiggerGroup(number)
    && numberIsEqualOrBiggerFromLeftToRight(number);
};

const getNumberOfPasswordsMeetingV2Requirements = (rangeStart, rangeEnd) => {
  let numberOfValidPasswords = 0; 

  for (let number = rangeStart; number <= rangeEnd; number++) {
    if (numberMeetsPasswordV2Requirements(number)) {
      numberOfValidPasswords++;
    }
  }

  return numberOfValidPasswords;
};

module.exports = { numberMeetsPasswordV2Requirements, getNumberOfPasswordsMeetingV2Requirements };