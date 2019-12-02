const { calculateFuelByMass } = require('./part1');

const calculateAccumulatedFuelByMass = (mass) => {
  const _calculateAccumulatedFuelByMass = (mass, sum = 0) => {
    const fuel = calculateFuelByMass(mass);

    return fuel > 0
      ? _calculateAccumulatedFuelByMass(fuel, sum + fuel)
      : sum;
  };

  return _calculateAccumulatedFuelByMass(mass);
};

const calculateAccumulatedFuelByModules = (modules) => {
  return modules.reduce((prev, current) => prev + calculateAccumulatedFuelByMass(current), 0);
}

module.exports = { calculateAccumulatedFuelByMass, calculateAccumulatedFuelByModules };