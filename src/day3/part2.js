const { calculcateCoordinatesByWirePath, calculateWirePathIntersectionsByCoordinates, isBetween } = require('./part1');

const calculateFewestCombinedStepsRequiredToReachIntersection = (wirePathA, wirePathB) => {
  const wirePathACoordinates = calculcateCoordinatesByWirePath(wirePathA);
  const wirePathBCoordinates = calculcateCoordinatesByWirePath(wirePathB);
  const wirePathIntersections = calculateWirePathIntersectionsByCoordinates(wirePathACoordinates, wirePathBCoordinates);

  const stepAmountVariants = [];

  for (const intersection of wirePathIntersections) {
    const steps = calculateStepsToIntersectionForWirePathCoordinates(wirePathACoordinates, intersection) + calculateStepsToIntersectionForWirePathCoordinates(wirePathBCoordinates, intersection);
    stepAmountVariants.push(steps);
  }

  return Math.min(...stepAmountVariants);
}

const calculateStepsToIntersectionForWirePathCoordinates = (wirePathCoordinates, intersection) => {
  let steps = 0;

  for (const coordinates of wirePathCoordinates) {
    if (intersection.x === coordinates.to.x && intersection.y === coordinates.to.y) {
      steps += coordinates.from.distance;
      break;
    } else if (isBetween(intersection.x, coordinates.from.x, coordinates.to.x) && intersection.y === coordinates.to.y) {
      steps += Math.abs(coordinates.from.x - intersection.x);
      break;
    } else if (isBetween(intersection.y, coordinates.from.y, coordinates.to.y) && intersection.x === coordinates.to.x) {
      steps += Math.abs(coordinates.from.y - intersection.y);
      break;
    } else {
      steps += coordinates.from.distance;
    }
  }

  return steps;
};

module.exports = { calculateFewestCombinedStepsRequiredToReachIntersection };