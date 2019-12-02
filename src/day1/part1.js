const calculateFuelByMass = (mass) => {
  return Math.floor(mass / 3) - 2;
}

const calculateFuelByModules = (modules) => {
  return modules.reduce((prev, current) => prev + calculateFuelByMass(current), 0);
};

module.exports = { calculateFuelByMass, calculateFuelByModules };