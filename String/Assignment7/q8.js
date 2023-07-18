function checkStraightLine(coordinates) {
  if (coordinates.length < 3) {
    return true; // A line can be formed with 2 or fewer points.
  }

  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];

  for (let i = 2; i < coordinates.length; i++) {
    const [x3, y3] = coordinates[i];

    // Check if the points are collinear or have the same slope.
    if ((y2 - y1) * (x3 - x2) !== (y3 - y2) * (x2 - x1)) {
      return false;
    }
  }

  return true;
}

console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
); // Output: true (All points are collinear)
console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ])
); // Output: false (Not all points are collinear)
