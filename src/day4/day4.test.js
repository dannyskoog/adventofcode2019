
const { 
  numberHasSixDigits, 
  numberHasTwoAdjacentDigits, 
  numberIsEqualOrBiggerFromLeftToRight, 
  numberMeetsPasswordV1Requirements,
  getNumberOfPasswordsMeetingV1Requirements
} = require('./part1');
const { numberMeetsPasswordV2Requirements, getNumberOfPasswordsMeetingV2Requirements } = require('./part2');
const [rangeStart, rangeEnd] = require('fs').readFileSync(`${__dirname}/input.txt`, 'utf8').split('-').map(Number);

describe('Day 4: Secure Container', () => {
  describe('Part 1', () => {
    test('should validate that number has 6 digits', () => {
      expect(numberHasSixDigits(9999)).toEqual(false);
      expect(numberHasSixDigits(-99999)).toEqual(false);
      expect(numberHasTwoAdjacentDigits(0)).toEqual(false);
      expect(numberHasSixDigits(999999)).toEqual(true);
    });

    test('should validate that number has two adjacent digits', () => {
      expect(numberHasTwoAdjacentDigits(1234)).toEqual(false);
      expect(numberHasTwoAdjacentDigits(-5678)).toEqual(false);
      expect(numberHasTwoAdjacentDigits(0)).toEqual(false);
      expect(numberHasTwoAdjacentDigits(112345)).toEqual(true);
      expect(numberHasTwoAdjacentDigits(122345)).toEqual(true);
      expect(numberHasTwoAdjacentDigits(-123455)).toEqual(true);
    });

    test('should validate that number is equal or bigger from left to right', () => {
      expect(numberIsEqualOrBiggerFromLeftToRight(223450)).toEqual(false);
      expect(numberIsEqualOrBiggerFromLeftToRight(-56378)).toEqual(false);
      expect(numberIsEqualOrBiggerFromLeftToRight(111111)).toEqual(true);
      expect(numberIsEqualOrBiggerFromLeftToRight(0)).toEqual(true);
      expect(numberIsEqualOrBiggerFromLeftToRight(111123)).toEqual(true);
      expect(numberIsEqualOrBiggerFromLeftToRight(135679)).toEqual(true);
      expect(numberIsEqualOrBiggerFromLeftToRight(-56789)).toEqual(true);
    });

    test('should validate that number meets password v1 requirements', () => {
      expect(numberMeetsPasswordV1Requirements(12334, 1, 100000)).toEqual(false);
      expect(numberMeetsPasswordV1Requirements(123456, 1, 1000000)).toEqual(false);
      expect(numberMeetsPasswordV1Requirements(123343, 1, 1000000)).toEqual(false);
      expect(numberMeetsPasswordV1Requirements(123345, 1, 1000000)).toEqual(true);
    });

    test('should get the number of passwords meeting v1 requirements', () => {
      expect(getNumberOfPasswordsMeetingV1Requirements(rangeStart, rangeEnd)).toEqual(1625);
    });
  });

  describe('Part 2', () => {
    test('should validate that number meets password v2 requirements', () => {
      expect(numberMeetsPasswordV2Requirements(123444)).toEqual(false);
      expect(numberMeetsPasswordV2Requirements(124444)).toEqual(false);
      expect(numberMeetsPasswordV2Requirements(568889)).toEqual(false);
      expect(numberMeetsPasswordV2Requirements(112233)).toEqual(true);
      expect(numberMeetsPasswordV2Requirements(111122)).toEqual(true);
    });

    test('should get the number of passwords meeting v2 requirements', () => {
      expect(getNumberOfPasswordsMeetingV2Requirements(rangeStart, rangeEnd)).toEqual(1111);
    });
  });
});