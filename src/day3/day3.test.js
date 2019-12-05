const { 
  calculcateCoordinatesByWirePath,
  calculateWirePathIntersections,
  calculateDistanceBetweenCoordinates,
  calculateShortestWirePathIntersectionDistance
} = require('./part1');
const { calculateFewestCombinedStepsRequiredToReachIntersection } = require('./part2');
const wirePaths = require('fs').readFileSync(`${__dirname}/input.txt`, 'utf8').split('\n');

describe("Day 3: Crossed Wires", () => {
  describe("Part 1", () => {
    test("should calculate coordinates by wire path", () => {
      expect(calculcateCoordinatesByWirePath('R8,U5,L5,D3')).toEqual([{ from: { x: 0, y: 0 }, to: { x: 8, y: 0 } }, { from: { x: 8, y: 0 }, to: { x: 8, y: 5 } }, { from: { x: 8, y: 5 }, to: { x: 3, y: 5 } }, { from: { x: 3, y: 5 }, to: { x: 3, y: 2 } }]);
      expect(calculcateCoordinatesByWirePath('U7,R6,D4,L4')).toEqual([{ from: { x: 0, y: 0 }, to: { x: 0, y: 7 } }, { from: { x: 0, y: 7 }, to: { x: 6, y: 7 } }, { from: { x: 6, y: 7 }, to: { x: 6, y: 3 } }, { from: { x: 6, y: 3 }, to: { x: 2, y: 3 } }]);
    });

    test("should calculate wire path intersections", () => {
      expect(calculateWirePathIntersections('R8,U5,L5,D3', 'U7,R6,D4,L4')).toEqual([{ x: 6, y: 5 }, { x: 3, y: 3 }]);
    });

    test("should calculate distance between coordinates", () => {
      expect(calculateDistanceBetweenCoordinates({ x: 0, y: 0 }, { x: 6, y: 5})).toEqual(11);
      expect(calculateDistanceBetweenCoordinates({ x: 0, y: 0 }, { x: 3, y: 3})).toEqual(6);
      expect(calculateDistanceBetweenCoordinates({ x: 14, y: 8 }, { x: 32, y: 9})).toEqual(19);
      expect(calculateDistanceBetweenCoordinates({ x: 2, y: -11 }, { x: -5, y: 45})).toEqual(63);
    });

    test("should calculate shortest distance between wire path intersections and reference coordinates", () => {
      expect(calculateShortestWirePathIntersectionDistance('R8,U5,L5,D3', 'U7,R6,D4,L4', { x: 0, y: 0 })).toEqual(6);
      expect(calculateShortestWirePathIntersectionDistance('R8,U5,L5,D3', 'U7,R6,D4,L4', { x: 7, y: 4 })).toEqual(2);
      expect(calculateShortestWirePathIntersectionDistance('R75,D30,R83,U83,L12,D49,R71,U7,L72', 'U62,R66,U55,R34,D71,R55,D58,R83', { x: 0, y: 0 })).toEqual(159);
      expect(calculateShortestWirePathIntersectionDistance('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51', 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7', { x: 0, y: 0 })).toEqual(135);
      expect(calculateShortestWirePathIntersectionDistance(wirePaths[0], wirePaths[1], { x: 0, y: 0 })).toEqual(5319);
    });
  });

  describe("Part 2", () => {
    test.only("should calculate fewest combined steps required to reach intersection", () => {
      expect(calculateFewestCombinedStepsRequiredToReachIntersection('R8,U5,L5,D3', 'U7,R6,D4,L4')).toEqual(30);
      expect(calculateFewestCombinedStepsRequiredToReachIntersection('R75,D30,R83,U83,L12,D49,R71,U7,L72', 'U62,R66,U55,R34,D71,R55,D58,R83')).toEqual(610);
      expect(calculateFewestCombinedStepsRequiredToReachIntersection('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51', 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7')).toEqual(410);
      expect(calculateFewestCombinedStepsRequiredToReachIntersection(wirePaths[0], wirePaths[1])).toEqual(122514);
    });
  });
});