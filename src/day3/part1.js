const calculcateCoordinatesByWirePath = (wirePath) => {
  let x = 0;
  let y = 0;
  const coordinates = [];
  const steps = wirePath.split(',');

  for (const step of steps) {
    const direction = step[0];
    const distance = +step.slice(1);
    const coordinate = { from: { x, y, distance } };

    switch (direction) {
      case "R":
        x += distance;
        break;
      case "L":
        x -= distance;
        break;
      case "U":
        y += distance;
        break;
      case "D":
        y -= distance;
        break;
      default:
        throw new Error(`Invalid direction ${direction}`);

    }

    coordinate.to = { x, y };
    coordinates.push(coordinate);
  }

  return coordinates;
};

const calculateWirePathIntersections = (wirePathA, wirePathB) => {
  const wirePathACoordinates = calculcateCoordinatesByWirePath(wirePathA);
  const wirePathBCoordinates = calculcateCoordinatesByWirePath(wirePathB);

  return calculateWirePathIntersectionsByCoordinates(wirePathACoordinates, wirePathBCoordinates);
};

const calculateWirePathIntersectionsByCoordinates = (coordinatesA, coordinatesB) => {
  const intersections = [];

  for (const coordinates of coordinatesA) {
    intersections.push(...doesCoordinatesIntersectWithListOfCoordinates(coordinates, coordinatesB));
  }
 
  return intersections;
};

const calculateDistanceBetweenCoordinates = (coordinatesA, coordinatesB) => {
  return Math.abs(coordinatesA.x - coordinatesB.x) + Math.abs(coordinatesA.y - coordinatesB.y);
};

const doesCoordinatesIntersect = (coordinatesA, coordinatesB) => {

};

const doesCoordinatesIntersectWithListOfCoordinates = (coordinates, lines) => {
  const intersections = [];

  for (const line of lines) {
    if (coordinates.from.x === coordinates.to.x) {
      if (line.from.x !== line.to.x) {
        if (isBetween(coordinates.from.x, line.from.x, line.to.x)) {
          if (isBetween(line.from.y, coordinates.from.y, coordinates.to.y)) {
            intersections.push({ x: coordinates.from.x, y: line.from.y });
          }
        }
      }
    } else if (line.from.y !== line.to.y) {
      if (isBetween(coordinates.from.y, line.from.y, line.to.y)) {
        if (isBetween(line.from.x, coordinates.from.x, coordinates.to.x)) {
          intersections.push({ x: line.from.x, y: coordinates.from.y });
        }
      }
    }
  }

  return intersections;
};

const isBetween = (point, lineFrom, lineTo) => {
  return point > lineFrom && point < lineTo || point > lineTo && point < lineFrom;
};

const calculateShortestWirePathIntersectionDistance = (wirePathA, wirePathB, referenceCoordinates) => {
  const wirePathIntersections = calculateWirePathIntersections(wirePathA, wirePathB);
  const distances = Object.values(wirePathIntersections)
    .map(intersectionCoordinates => calculateDistanceBetweenCoordinates(intersectionCoordinates, referenceCoordinates));

  return Math.min(...distances);
};

module.exports = { 
  calculcateCoordinatesByWirePath, 
  calculateWirePathIntersections, 
  calculateWirePathIntersectionsByCoordinates,
  calculateDistanceBetweenCoordinates,
  calculateShortestWirePathIntersectionDistance,
  doesCoordinatesIntersect,
  isBetween
};