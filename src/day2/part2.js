const { calculateProgramFinalState } = require('./part1');

const calculateNounAndVerbByProgramOutput = (program, output) => {
  const programArr = program.split(',').map(Number);

  const _calculateNounAndVerbByProgramOutput = (noun = 99, verb = 99) => {
    const programArrCopy = [...programArr];
    programArrCopy[1] = noun;
    programArrCopy[2] = verb;

    const programFinalState = calculateProgramFinalState(programArrCopy.join(','));
    const isOutputMatch = programFinalState.split(',').map(Number)[0] === output;

    if (isOutputMatch) {
      return [noun, verb];
    } else if (verb === 0) {
      return _calculateNounAndVerbByProgramOutput(--noun, 99)
    } else if (noun === 0 && verb === 0) {
      throw new Error('No noun and verb combination found for the output');
    }

    return _calculateNounAndVerbByProgramOutput(noun, --verb)
  };

  return _calculateNounAndVerbByProgramOutput();
};

module.exports = { calculateNounAndVerbByProgramOutput };