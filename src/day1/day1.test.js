const { calculateFuelByMass, calculateFuelByModules } = require('./part1');
const { calculateAccumulatedFuelByMass, calculateAccumulatedFuelByModules } = require('./part2');
const modules = require('fs').readFileSync(`${__dirname}/input.txt`, 'utf8').split('\n');

describe("Day 1: The Tyranny of the Rocket Equation", () => {
  describe("Part 1", () => {
    it("should calculate fuel by mass", () => {
      expect(calculateFuelByMass(12)).toEqual(2);
      expect(calculateFuelByMass(14)).toEqual(2);
      expect(calculateFuelByMass(1969)).toEqual(654);
      expect(calculateFuelByMass(100756)).toEqual(33583);
    });
  
    it("should calculate fuel by modules", () => {
      expect(calculateFuelByModules(modules)).toEqual(3349352);
    });
  });

  describe("Part 2", () => {
    it("should calculate accumulated fuel by mass", () => {
      expect(calculateAccumulatedFuelByMass(14)).toEqual(2);
      expect(calculateAccumulatedFuelByMass(1969)).toEqual(966);
      expect(calculateAccumulatedFuelByMass(100756)).toEqual(50346);
    });

    it("should calculate accumulated fuel by modules", () => {
      expect(calculateAccumulatedFuelByModules(modules)).toEqual(5021154);
    });
  });
});