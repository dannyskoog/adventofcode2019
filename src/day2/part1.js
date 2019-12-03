const calculateProgramFinalState = (program) => {
  const programArr = program.split(',').map(Number);

  const _calculateProgramFinalState = (program, opcodeIndex = 0) => {
    const opcode = program[opcodeIndex];
    const firstOperand = program[program[opcodeIndex + 1]];
    const secondOperand = program[program[opcodeIndex + 2]];
    const storageIndex = program[opcodeIndex + 3];
  
    switch (opcode) {
      case 1:
          program[storageIndex] = firstOperand + secondOperand;
        break;
      case 2:
          program[storageIndex] = firstOperand * secondOperand;
        break;
      case 99:
        return program;
      default:
        throw new Error(`Invalid opcode ${opcode}`);
    }

    return _calculateProgramFinalState(program, opcodeIndex + 4);
  };
  
  return _calculateProgramFinalState(programArr).join(',');
}

const calculcateOutputOf1202ProgramFinalState = (program) => {
  const programIn1202State = putProgramIn1202State(program);
  const programFinalState = calculateProgramFinalState(programIn1202State);
  return +programFinalState.split(',')[0];
}

const putProgramIn1202State = (program) => {
  const programArr = program.split(',');
  programArr[1] = 12;
  programArr[2] = 2;

  return programArr.join(',');
};

module.exports = { calculateProgramFinalState, calculcateOutputOf1202ProgramFinalState, putProgramIn1202State };