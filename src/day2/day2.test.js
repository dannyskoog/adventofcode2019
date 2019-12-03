
const { calculateProgramFinalState, calculcateOutputOf1202ProgramFinalState, putProgramIn1202State } = require('./part1');
const { calculateNounAndVerbByProgramOutput } = require('./part2');
const gravityAssistProgram = require('fs').readFileSync(`${__dirname}/input.txt`, 'utf8');

describe("Day 2: 1202 Program Alarm", () => {
  describe("Part 1", () => {
    it("should calculate the final state of a program", () => {
      expect(calculateProgramFinalState('1,0,0,0,99')).toEqual('2,0,0,0,99');
      expect(calculateProgramFinalState('2,3,0,3,99')).toEqual('2,3,0,6,99');
      expect(calculateProgramFinalState('2,4,4,5,99,0')).toEqual('2,4,4,5,99,9801');
      expect(calculateProgramFinalState('1,1,1,4,99,5,6,0,99')).toEqual('30,1,1,4,2,5,6,0,99');
      expect(calculateProgramFinalState('1,9,10,3,2,3,11,0,99,30,40,50')).toEqual('3500,9,10,70,2,3,11,0,99,30,40,50');
    });

    it("should put a program in a '1202 program alarm' state", () => {
      expect(putProgramIn1202State('1,0,0,0,99')).toEqual('1,12,2,0,99');
    });

    it("should calculate the output of a program in a '1202 program alarm' state", () => {
      expect(calculcateOutputOf1202ProgramFinalState(gravityAssistProgram)).toEqual(4090701);
    });
  });

  describe("Part 2", () => {
    it("should calculate the noun and verb by program output", () => {
      const noun = 64;
      const verb = 21;
      expect(calculateNounAndVerbByProgramOutput(gravityAssistProgram, 19690720)).toEqual([noun, verb]);
      expect(100 * noun + verb ).toEqual(6421)
    });
  });
});